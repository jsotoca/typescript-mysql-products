export default class OrderDetail {
    
    private _id: number | null;
    private _order_id: number | null;
    private _product_id: number | null;
    private _quantity: number | null;
    private _price: number | null;
    private _total: number;
    private _created_at: Date | null;
    private _updated_at: Date | null;

    constructor(id: number | null, order_id: number | null, product_id: number | null, quantiy: number | null, price: number | null){
        this._id = id;
        this._order_id = order_id;
        this._product_id = product_id;
        this._quantity = quantiy;
        this._price = price;
        this._total = (this._quantity as number) * (this._price as number);
        this._created_at = null;
        this._updated_at = null;
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