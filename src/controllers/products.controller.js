import * as service from '../services/products.service.js';
import * as model from '../models/products.model.js';

export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts());
};

export const searchProduct = (req, res) => {
    const { name } = req.query;

    const product = service.getAllProducts();

    const filteredProducts = product.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredProducts);
};

export const getProdcutById = (req, res) => {
    const { id } = req.params;

    const product = service.getProductById(id);

    if (!product) {
        res.status(404).json({
        status: 404,
        mensaje: ' 🥲 El producto no existe ❌',
        ruta: req.originalUrl
        })
    }

    res.json(product);
};

export const createProduct = (req, res) => {
    const { name, price } = req.body;

    const newProduct = model.createProduct({ name, price});

    res.status(201).json(createProduct);
};

export const putProductId = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({
        status: 404,
        mensaje: ' 🥲 Producto no encontrado ❌',
        ruta: req.originalUrl
        })
    }

    const { name, price } = req.body;

    products[productIndex] = { id: productId, name, price };
    res.json(products[productIndex]);
};

export const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);

    const product = model.deleteProduct(productId);

    if (!product) {
        return res.status(404).json({
        status: 404,
        mensaje: ' 🥲 Producto no encontrado ❌',
        ruta: req.originalUrl
        })
    }

    res.status(204).send();

};