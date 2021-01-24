export default class OrderDetail {
    
    private _id: number;
    private _order_id: number;
    private _product_id: number;
    private _quantity: number;
    private _price: number;
    private _total: number;
    private _created_at: Date;
    private _updated_at: Date;

    constructor(id: number, order_id: number, product_id: number, quantiy: number, price: number, total: number, created_at: Date, updated_at: Date){
        this._id = id;
        this._order_id = order_id;
        this._product_id = product_id;
        this._quantity = quantiy;
        this._price = price;
        this._total = total | (this._quantity as number) * (this._price as number);
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    public get order_id(){
        return this._order_id;
    }

    public get product_id(){
        return this._product_id;
    }

    public get quantity(){
        return this._quantity;
    }

    public get price(){
        return this._price;
    }

    public get total(){
        return this._total;
    }

    public set order_id(id){
        this._order_id = id;
    }
}