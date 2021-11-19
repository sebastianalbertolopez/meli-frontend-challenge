import product from '../services/product';
import category from '../services/category';
import { sendOK } from '../utils/sendOK';

const productsController = {};

productsController.list = async (req, res, next) => {
  try {
    const { q } = req.query;
    const { results, filters } = await product.list(q);

    const items = results.map((item) => ({
      ..._buildGenericResponse(item),
      picture: item.thumbnail,
      location: item.address.state_name,
    }));

    const { values } = filters.find(({ id }) => id === 'category') ?? {};

    const [categories] =
      values?.map(({ path_from_root }) =>
        _buildCategoriesResponse(path_from_root),
      ) ?? [];

    sendOK(res, {
      items,
      categories,
    });
  } catch (err) {
    next(err);
  }
};

productsController.getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await product.getById(id);
    const { plain_text: description } = await product.getDescription(id);

    const { category_id, pictures, sold_quantity } = item;
    const { path_from_root: path } = await category.getById(category_id);

    sendOK(res, {
      item: {
        ..._buildGenericResponse(item),
        picture: pictures[0].secure_url,
        sold_quantity,
        description,
        categories: _buildCategoriesResponse(path),
      },
    });
  } catch (err) {
    next(err);
  }
};

const _buildGenericResponse = ({
  id,
  title,
  currency_id: currency,
  price: amount,
  condition,
  shipping,
}) => {
  const price = {
    ...splitPrice(amount),
    currency,
  };

  return {
    id,
    title,
    price,
    condition,
    free_shipping: shipping.free_shipping,
  };
};

const splitPrice = (price) => {
  const [amount, decimals] = price.toString().split('.');
  return { amount: parseInt(amount, 10), decimals: parseInt(decimals, 10) };
};

const _buildCategoriesResponse = (path) => path?.map(({ name }) => name);

export default productsController;
