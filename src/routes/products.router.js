import {Router} from 'express';
import { getAllProducts, searchProduct, getProdcutById, postNewProduct, putProductId, deleteProductId } from '../controllers/products.controller.js';

const router = Router();

const products = [
    {id: 1, name: "Camiseta Deportiva", price: 150},
    {id: 2, name: "Zapatos Running", price: 1300},
    {id: 3, name: "Mochila Escolar", price: 350},
    {id: 4, name: "Auriculares Bluetooth", price: 800},
    {id: 5, name: "Botella Térmica", price: 230},
]

router.get('/products', getAllProducts);
router.get('/products/search', searchProduct);
router.get('/products/:id', getProdcutById);

router.post('/products', postNewProduct);

router.put('/products/:id', putProductId);

router.delete('/products/:id', deleteProductId);

export default router;