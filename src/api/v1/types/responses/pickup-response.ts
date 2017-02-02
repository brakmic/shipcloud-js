import { PickupAddress, PickupTime } from '../pickup';

export interface PickupResponse {
    id: string;
    carrier: string;
    pickup_time: PickupTime;
    pickup_address: PickupAddress;
}
