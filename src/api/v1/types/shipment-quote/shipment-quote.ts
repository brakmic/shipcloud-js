import { Package } from '../package';
import { Address, AddressId } from '../address';

export interface ShipmentQuote {
    carrier: string;
    service: string;
    to: (Address | AddressId);
    from?: (Address | AddressId); // omit only if Stadard-Address is set in ShipCloud Profile!
    package: Package;
}
