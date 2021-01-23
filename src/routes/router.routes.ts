import express from 'express';
import productRouter from './product.router';
import orderRouter from './order.router';

const app = express();

app.use('/product',productRouter);
app.use('/order',orderRouter);

export default app;