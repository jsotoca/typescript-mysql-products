import MySQL from '../configuration/database';
import Order from '../models/order.model';

export default class OrderRepository {
    
    public static createOrder(order: Order){
        let { user_id, creater_id, total } = order;
        total = this.generateTotal(order);
        return new Promise<boolean>((resolve,reject)=>{
            MySQL.doQuery(`
                INSERT INTO orders(user_id, creater_id, total)
                VALUES (?, ?, ?)
            `,[
                user_id, creater_id, total
            ])
            .then(()=> resolve(true))
            .catch((err)=> reject(err));
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