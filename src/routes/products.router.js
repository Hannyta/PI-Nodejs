import {Router} from 'express';
import { getAllProducts, searchProduct, getProdcutById, createProduct, putProductId, deleteProductId } from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProduct);
router.get('/products/:id', getProdcutById);

router.post('/products', createProduct);

router.put('/products/:id', putProductId);

router.delete('/products/:id', deleteProductId);

export default router;