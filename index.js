import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRouter from './src/routes/products.router.js';

dotenv.config(); 

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("API Rest en Node.js")
});

app.use('/api',productsRouter)

app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        mensaje: ' 🥲 La ruta que solicitaste no existe ❌',
        ruta: req.originalUrl
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log (`http://localhost:${PORT}`));