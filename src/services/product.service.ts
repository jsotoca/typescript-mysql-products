import ProductRepository from "../repositories/product.repository";
import Product from "../models/product.model";

export default class ProductService {

    public static async getAll(){
        return await ProductRepository.getAll();
    }

    public static async search(id: string){
        return await ProductRepository.search(id);
    }

    public static async create(product: Product){
        return await ProductRepository.create(product);
    }

    public static async updated(product: Product){
        return await ProductRepository.updated(product);
    }

    public static async delete(id: string){
        return await ProductRepository.delete(id);
    }
}