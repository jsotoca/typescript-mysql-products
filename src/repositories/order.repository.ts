import { MysqlError } from 'mysql';
import MySQL from '../configuration/database';
import Order from '../models/order.model';
import OrderDetail from '../models/order_details.model';
import OrderDetailRepository from './order_detail.repository';

export default class OrderRepository {
    
    public static create(order: Order){
        order.total = this.generateTotal(order);
        return new Promise<boolean>((resolve,reject)=>{
            MySQL.cnn.beginTransaction(async (err:MysqlError)=>{
                if(err) {
                    reject(err);
                    return;
                };
                try {
                    let insertId = await this.createOrder(order);
                    for (const detail of order.details) {
                        detail.order_id = insertId;
                        try {
                            await OrderDetailRepository.create(detail);
                        } catch (err) {
                            reject(err);
                            return MySQL.cnn.rollback();
                        }
                    }
                    MySQL.cnn.commit(()=>resolve(true));    
                } catch (err) {
                    reject(err);
                    return MySQL.cnn.rollback();
                }
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

    private static createOrder(order: Order){
        return new Promise<number>((resolve,reject)=>{
            MySQL.cnn.query(`
                INSERT INTO orders(user_id, creater_id, total)
                VALUES (?, ?, ?)
            `,[
                order.user_id, order.creater_id, order.total
            ],(err,result)=>{
                if(err) reject(err);
                else resolve(result.insertId);
            });
        });
    }

    public static getAll(){
        return new Promise<Order[]>((resolve,reject) => {
            MySQL.doQuery(`SELECT * FROM orders ORDER BY id DESC`)
            .then( async(results) => {
                let orders = results.map(order => new Order(
                    order.id,
                    order.creater_id,
                    order.user_id,
                    null,
                    order.total,
                    order.created_at,
                    order.updated_at
                ));
                for (const order of orders) {
                    order.details = await this.getDetails(order.id);
                }
                resolve(orders);
            })
            .catch(err => reject(err));
        });
    }

    private static async getDetails(id: number){
        return new Promise<OrderDetail[]>((resolve,reject)=> {
            OrderDetailRepository.getAll(id)
            .then(details => resolve(details))
            .catch(err => reject(err));
        });
    }
}