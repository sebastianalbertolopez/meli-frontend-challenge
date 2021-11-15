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
      address: item.address.state_name,
    }));

    const [[categories]] = filters.map(({ values }) =>
      values.map(({ path_from_root }) =>
        _buildCategoriesResponse(path_from_root),
      ),
    );

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
    const description = await product.getDescription(id);

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
}) => ({
  id,
  title,
  price: {
    currency,
    amount,
    decimals: 2,
  },
  condition,
  free_shipping: shipping.free_shipping,
});

const _buildCategoriesResponse = (path) => path.map(({ name }) => name);

export default productsController;
