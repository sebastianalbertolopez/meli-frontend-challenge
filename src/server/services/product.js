import { API } from '../API';
import { RESULTS_LIMIT } from '../config/constants';

const product = {};

product.list = async (query) =>
  API.get(`sites/MLA/search?q=${query}&limit=${RESULTS_LIMIT}`);

product.getById = async (id) => API.get(`items/${id}`);

product.getDescription = async (id) => API.get(`items/${id}/description`);

export default product;
