export interface Property {
    amount: number;
    currency: string;
    bank_account_holder: string;
    bank_name: string;
    bank_account_number: string;
    bank_code: string;
    reference1: string;
}

export interface CashOnDelivery {
    name: string;
    properties: Property;
}
