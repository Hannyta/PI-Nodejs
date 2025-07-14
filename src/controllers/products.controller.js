const products = [
    {id: 1, name: "Camiseta Deportiva", price: 150},
    {id: 2, name: "Zapatos Running", price: 1300},
    {id: 3, name: "Mochila Escolar", price: 350},
    {id: 4, name: "Auriculares Bluetooth", price: 800},
    {id: 5, name: "Botella Térmica", price: 230},
]

export const getAllProducts = (req, res) => {
    res.json(products);
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

export const postNewProduct = (req, res) => {

    const {name, price} = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price,
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
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