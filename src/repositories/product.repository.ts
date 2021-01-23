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

    public static search(id: string){
        return new Promise((resolve,reject)=>{
            MySQL.doQuery("SELECT * FROM products where id = ?",[id])
            .then(result => resolve(result))
            .catch(err => reject(err));
        });
    }

    public static create(product:Product){
        const { name, price, created_at, updated_at} = product;
        return new Promise<boolean>((resolve,reject)=>{
            MySQL.doQuery(`
                INSERT INTO products(name, price, created_at, updated_at)
                VALUES (?, ?, ?, ?)
            `,[
                name, price, created_at, updated_at
            ])
            .then(()=>resolve(true))
            .catch((err)=>reject(err));
        });
    }

    public static updated(product:Product){
        const { id, name, price, updated_at} = product;
        return new Promise<boolean>((resolve,reject)=>{
            MySQL.doQuery(`
                UPDATE products set name = ?, price = ?, updated_at = ?
                WHERE id = ?
            `,[
                name, price, updated_at, id
            ])
            .then(()=>resolve(true))
            .catch((err)=>reject(err));
        });
    }

    public static delete(id: string){
        return new Promise<boolean>((resolve,reject)=>{
            MySQL.doQuery(`
                DELETE FROM products WHERE id = ?
            `,[
                id
            ])
            .then(()=>resolve(true))
            .catch((err)=>reject(err));
        });
    }

}