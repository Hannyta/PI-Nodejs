import * as service from '../services/products.service.js';
import * as model from '../models/products.model.js';

export const getAllProducts = async (req, res) => {
    res.json(await model.getAllProducts());
};

export const searchProduct = (req, res) => {
    const { name } = req.query;

    const products = model.getAllProducts();

    const filteredProducts = products.filter((p) =>
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

export const createProduct = async (req, res) => {
    const { name, price, categories } = req.body;

    const newProduct = await model.createProduct({ name, price, categories});

    res.status(201).json(createProduct);
};

export async function updateProduct(id, productData) {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await setDoc(productRef, productData); //remplazo completo
        return { id, ...productData};
    } catch (error) {
        console.error(error);
    }
};

export const deleteProduct = async(req, res) => {
    const productId = req.params.id;

    const product = await model.deleteProduct(productId);

    if (!product) {
        return res.status(404).json({
        status: 404,
        mensaje: ' 🥲 Producto no encontrado ❌',
        ruta: req.originalUrl
        })
    }

    res.status(204).send();
};