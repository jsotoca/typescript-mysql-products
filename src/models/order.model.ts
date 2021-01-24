import OrderDetail from './order_details.model';

export default class Order {
    
    private _id: number;
    private _creater_id: number;
    private _user_id: number;
    private _total: number;
    private _created_at: Date;
    private _updated_at: Date;
    private _details: OrderDetail[];

    constructor(id: number, creater_id: number, user_id: number, details: OrderDetail[], total: number, created_at: Date, updated_at: Date){
        this._id = id;
        this._creater_id = creater_id;
        this._user_id = user_id;
        this._total =  total || 0.00;
        this._created_at = created_at;
        this._updated_at = updated_at;
        this._details = details;
    }

    public get id() {
        return this._id;
    }

    public get user_id() {
        return this._user_id;
    }

    public get creater_id() {
        return this._creater_id;
    }

    public set total(total: number) {
        this._total = total;
    }
    
    public get total() {
        return this._total;
    }

    public set details(details) {
        this._details = details;
    }

    public get details() {
        return this._details;
    }
}