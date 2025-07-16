import {Router} from 'express';
import { getAllProducts, searchProduct, getProdcutById, createProduct, putProductId, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProduct);
router.get('/products/:id', getProdcutById);

router.post('/products', createProduct);

router.put('/products/:id', putProductId);

router.delete('/products/:id', deleteProduct);

export default router;