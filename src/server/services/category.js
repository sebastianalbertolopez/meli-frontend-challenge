import { API } from '../API';

const category = {};

category.getById = async (id) => API.get(`categories/${id}`);

export default category;
