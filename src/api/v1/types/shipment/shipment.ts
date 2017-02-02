import { Address} from '../address';
import { Package } from '../package';
import * as Services from '../additional-services';
import { Pickup } from '../pickup';

export interface Shipment {
    carrier: string;
    to: Address;
    from: Address;
    package: Package;
    service?: string;
    additional_service: (Services.AdvanceNoticeEmail | Services.AdvanceNoticeSms |
                        Services.CashOnDelivery | Services.DropAuthorization |
                        Services.SaturdayDelivery)[];
    pickup?: Pickup;
    reference_number?: string;
    description: string;
    label?: string;
    notification_email?: string;
    create_shipping_label: boolean;
}
