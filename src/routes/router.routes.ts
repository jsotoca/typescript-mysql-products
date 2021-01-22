import express from 'express';
import productRouter from './product.router';

const app = express();

app.use('/product',productRouter);

export default app;