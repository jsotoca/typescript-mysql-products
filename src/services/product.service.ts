import Product from "../models/product.model";
import ProductRepository from "../repositories/product.repository";

export default class ProductService {

    public static async getAll(){
        return await ProductRepository.getAll();
    }

    public static async search(id: string){
        return await ProductRepository.search(id);
    }
}