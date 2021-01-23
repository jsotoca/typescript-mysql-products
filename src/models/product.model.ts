export default class Product {
    
    private _id: number;
    private _name: string;
    private _price: number;
    private _created_at: Date;
    private _updated_at: Date;

    constructor(id: number, name: string, price: number, created_at: Date, updated_at: Date){
        this._id = id;
        this._name = name;
        this._price = price;
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    public get id(){
        return this._id;
    }

    public get name(){
        return this._name;
    }

    public get price(){
        return this._price;
    }

    public get created_at(){
        return this._created_at;
    }

    public get updated_at(){
        return this._updated_at;
    }
}