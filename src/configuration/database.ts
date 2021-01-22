import mysql from 'mysql';
import enviroment from '../configuration/enviroment';

export default class MySQL {
    private cnn: mysql.Connection;
    private static _instance: MySQL;

    constructor(){
        this.cnn = mysql.createConnection({
            host: enviroment.DB_HOST,
            database: enviroment.DB_NAME,
            user: enviroment.DB_USER,
            password: enviroment.DB_PASS
        });
        this.connectDB();
    }

    private connectDB(){
        this.cnn.connect((err:mysql.MysqlError)=> {
            if(err) throw err;
        });
        console.log("database running");
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static doQuery(query: string, values?: any[]){
         return new Promise<any[]>((resolve,reject)=>{
            this.instance.cnn.query(query,values,(err,result)=>{
                if(err) reject(err);
                resolve(result);
            });
         });   
    }

}