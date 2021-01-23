import Product from '../models/product.model';
import ProductService from '../services/product.service';
import { Request, Response } from 'express';

const getAll = async (req:Request, res:Response)=>{
    try {
        const products = await ProductService.getAll();
        return res.json({
            status: res.statusCode,
            data: products
        })
    } catch (error) {
        return res.json({
            status: res.statusCode,
            error: error
        })
    }
}

const get = async (req:Request, res:Response)=>{
    const { id } = req.params;
    try {
        const data = await ProductService.search(id);
        return res.json({
            status: res.statusCode,
            data
        })
    } catch (error) {
        return res.json({
            status: res.statusCode,
            error: error
        })
    }
}

const create = async (req:Request, res:Response)=>{
    const now = new Date();
    const { name, price } = req.body;
    try {
        await ProductService.create(new Product(
            -1 , name, price, now, now
        ));
        res.status(201);
        return res.json({
            message: 'Producto creado con exito.'
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
}

const updated = async (req:Request, res:Response)=>{
    const { id, name, price } = req.body;
    try {
        await ProductService.updated(new Product(
            id , name, price, null, null
        ));
        res.status(200);
        return res.json({
            message: 'Producto actualizado con exito.'
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
}

const remove = async (req:Request, res:Response)=>{
    const { id} = req.params;
    try {
        await ProductService.delete(id);
        res.status(200);
        return res.json({
            message: 'Producto eliminado con exito.'
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error
        });
    }
}

const test = (req:Request, res:Response)=>{
    console.log(req.body);
}

export = {
    getAll,
    get,
    create,
    updated,
    remove,
    test
}