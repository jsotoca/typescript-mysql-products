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


export = {
    getAll,
    get
}