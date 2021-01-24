import { Request, Response } from 'express';
import Order from '../models/order.model';
import OrderDetail from '../models/order_details.model';
import OrderService from '../services/order.service';

const create = async(req:Request, res:Response)=>{
    let { user_id, creater_id, details } = req.body;
    details = details.map((detail:any) => {
        return new OrderDetail(null,null,detail['product_id'],detail['quantity'],detail['price'],null,null,null);
    });
    try {
        await OrderService.create(new Order(
            null,
            creater_id,
            user_id,
            details,
            null,
            null,
            null
        ));
        res.status(200);
        res.json({
            message: 'orden creada'
        })
    } catch (error) {
        res.status(500);
        res.json({
            error
        });
    }
    
};

export = {
    create
}