import MySQL from '../configuration/database';
import Product from "../models/product.model";

export default class ProductRepository {

    public static getAll(){
        return new Promise<Product[]>((resolve,reject)=>{
            MySQL.doQuery("SELECT * FROM products")
            .then((results) => {
                const data =  results.map(data => new Product(
                    data['id'],
                    data['name'],
                    data['price'],
                    data['created_at'],
                    data['updated_at']
                ));
                resolve(data);
            })
            .catch(err => reject(err));
        });
    }

}