import MySQL from '../configuration/database';
import OrderDetail from '../models/order_details.model';

export default class OrderDetailRepository {

    public static create(orderDetail: OrderDetail){
        return new Promise((resolve,reject)=>{
            MySQL.doQuery(`
                INSERT INTO order_detail(order_id,product_id,quantity,price,total)
                VALUES (?,?,?,?,?)
            `,[
                orderDetail.order_id,
                orderDetail.product_id,
                orderDetail.quantity,
                orderDetail.price,
                orderDetail.total
            ])
            .then(()=>resolve(true))
            .catch((err)=>reject(err));
        });
    }

}