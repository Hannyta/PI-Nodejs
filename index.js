import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();

app.use(cors({
    origin: ['https://frontend-empresa.com', 'https://dashboard.empresa.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("API Rest en Node.js")
});

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        mensaje: ' 🥲 La ruta que solicitaste no existe ❌',
        ruta: req.originalUrl
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log (`http://localhost:${PORT}`));