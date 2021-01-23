export default class Product {
    
    private _id: number | null;
    private _name: string;
    private _price: number;
    private _created_at: Date | null;
    private _updated_at: Date | null;

    constructor(id: number | null, name: string, price: number, created_at: Date | null, updated_at: Date | null){
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