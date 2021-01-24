import OrderRepository from '../repositories/order.repository';
import Order from '../models/order.model';

export default class OrderService {

    public static async create(order: Order){
        return await OrderRepository.create(order);
    }

    public static async getAll(){
        return await OrderRepository.getAll();
    }

}