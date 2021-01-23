import { MysqlError } from 'mysql';
import MySQL from '../configuration/database';
import Order from '../models/order.model';
import OrderDetailRepository from './order_detail.repository';

export default class OrderRepository {
    
    public static createOrder(order: Order){
        let { user_id, creater_id, total } = order;
        total = this.generateTotal(order);
        return new Promise<boolean>((resolve,reject)=>{
            MySQL.cnn.beginTransaction((err:MysqlError)=>{
                if(err) {
                    reject(err);
                    return;
                };
                MySQL.cnn.query(`
                    INSERT INTO orders(user_id, creater_id, total)
                    VALUES (?, ?, ?)
                `,[
                    user_id, creater_id, total
                ],(err,result)=>{
                    if(err) {
                        reject(err);
                        return MySQL.cnn.rollback();
                    };
                    let insertId = result.insertId;
                    for (const detail of order.details) {
                        MySQL.cnn.query(`
                        INSERT INTO order_detail(order_id,product_id,quantity,price,total)
                        VALUES (?,?,?,?,?)
                        `,[
                            insertId,
                            detail.product_id,
                            detail.quantity,
                            detail.price,
                            detail.total.toFixed(2)
                        ],(err,result)=>{
                            if(err){
                                reject(err);
                                return MySQL.cnn.rollback();
                            }
                            MySQL.cnn.commit(()=>{
                                resolve(true);
                            });
                        });
                    }
                });
                
            });
        });
    }

    private static generateTotal(order: Order){
        const { details } = order;
        let total = 0;
        for (const detail of details) {
            total += detail.total;
        }
        return total;
    }
}