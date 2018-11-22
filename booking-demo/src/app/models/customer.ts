
export class Customer{
    id: number;
    customer_name: string;
    phone_number: string;
    coin: number;

    constructor(id: number, customer_name: string, phone_number: string, coin: number){
        this.id = id;
        this.customer_name = customer_name;
        this.phone_number = phone_number;
        this.coin = coin;
    }
}