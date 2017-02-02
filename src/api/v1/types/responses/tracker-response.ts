import { Address } from '../address';

export interface TrackerResponse {
    id: string;
    tracking_code: string;
    status: string;
    created_at: string;
    to: Address;
    tracking_status_updated_at?: any;
    last_polling_at?: any;
    next_polling_at: string;
    shipment_id: string;
    carrier: string;
    tracking_events: any[];
}
