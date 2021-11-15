import express from 'express';

import productsController from '../controllers/products';

const router = express.Router();
const { list, getById } = productsController;

router.get('/', list);
router.get('/:id', getById);

export default router;
