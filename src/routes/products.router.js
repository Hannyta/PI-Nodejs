import {router} from 'express';

const router = Router();

const products = []

router.get('/products', (req, res) => {
    res.json(products);
});

router.get('/products/search', (res, res) => {
    const { name } = req.query;

    const filteridProducts = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );
});

router.get('/products/:id', (req, res) => {
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
})

router.post('/products', (req, res) => {
    
})

export default router;