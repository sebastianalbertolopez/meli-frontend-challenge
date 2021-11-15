import express from 'express';

import items from './products';

const router = express.Router();

router.use('/items', items);

export default router;
