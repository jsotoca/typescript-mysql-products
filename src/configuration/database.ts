import mysql from 'mysql';
import enviroment from '../configuration/enviroment';

export default class MySQL {
    private _cnn: mysql.Connection;
    private static _instance: MySQL;

    constructor(){
        this._cnn = mysql.createConnection({
            host: enviroment.DB_HOST,
            database: enviroment.DB_NAME,
            user: enviroment.DB_USER,
            password: enviroment.DB_PASS
        });
        this.connectDB();
    }

    private connectDB(){
        this._cnn.connect((err:mysql.MysqlError)=> {
            if(err) throw err;
        });
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static doQuery(query: string, values?: any[]){
         return new Promise<any[]>((resolve,reject)=>{
            this.instance._cnn.query(query,values,(err,result)=>{
                if(err) reject(err);
                resolve(result);
            });
         });   
    }

    public static get cnn(){
        return this.instance._cnn;
    }

}