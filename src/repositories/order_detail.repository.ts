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

    public static getAll(id: number | string){
        return new Promise<OrderDetail[]>((resolve,reject)=>{
            MySQL.doQuery(
                `SELECT * FROM order_detail WHERE order_id = ?`,
                [id]
            )
            .then(result => {
                let details = result.map(detail => 
                    new OrderDetail(
                        detail.id,
                        detail.order_id,
                        detail.product_id,
                        detail.order_id,
                        detail.quantity,
                        detail.total,
                        detail.created_at,
                        detail.updated_at,
                    )
                );
                resolve(details);
            })
            .catch(err => reject(err));
        });
    }

}