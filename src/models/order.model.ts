import OrderDetail from './order_details.model';

export default class Order {
    
    private _id: number | null;
    private _creater_id: number | null;
    private _user_id: number | null;
    private _total: number;
    private _created_at: Date | null;
    private _updated_at: Date | null;
    private _details: OrderDetail[];

    constructor(id: number | null, creater_id: number | null, user_id: number | null, details: OrderDetail[]){
        this._id = id;
        this._creater_id = creater_id;
        this._user_id = user_id;
        this._total = 0.00;
        this._created_at = null;
        this._updated_at = null;
        this._details = details;
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
    
    public get details() {
        return this._details;
    }
}