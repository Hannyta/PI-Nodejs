import * as service from '../services/products.service.js';

export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts());
};

export const searchProduct = (req, res) => {
    const { name } = req.query;

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredProducts);
};

export const getProdcutById = (req, res) => {
    const { id } = req.params;

    const product = products.find((item) => item.id == id);

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

    const {name, price} = req.body;
    const createProduct = {
        id: products.length + 1,
        name,
        price,
    };

    products.push(createProduct);

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

export const deleteProductId = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({
        status: 404,
        mensaje: ' 🥲 Producto no encontrado ❌',
        ruta: req.originalUrl
        })
    }
};