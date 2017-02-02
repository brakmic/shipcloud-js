import { PickupTime } from './pickup-time';
import { PickupAddress} from './pickup-address';

export interface Pickup {
    pickup_time: PickupTime;
    pickup_address: PickupAddress;
}
