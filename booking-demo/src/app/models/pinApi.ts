
import {Customer} from './customer';

export class PinApi{
    success: string;
    message: string;
    status_code: string;
    data: Customer;

    constructor(success: string, message: string, status_code: string,  data: Customer){
        this.success = success;
        this.message = message;
        this.status_code = status_code;
        this.data = data;
    }
}