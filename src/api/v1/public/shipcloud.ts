import { Address } from '../types/address';
import { Shipment } from '../types/shipment';
import { AddressResponse, ShipmentResponse } from '../types/responses';

export interface IShipCloud {
    // Adresses
    createAddress: (address: Address) => Promise<AddressResponse>;
    readAddress: (id: string) => Promise<AddressResponse>;
    readAllAddresses: () => Promise<AddressResponse[]>;
    // // Shipments
    createShipment: (shipment: Shipment) => Promise<ShipmentResponse>;
    readShipment: (id: string) => Promise<ShipmentResponse>;
    readAllShipments: () => Promise<ShipmentResponse[]>;
    updateShipment: (shipment: Shipment, id: string) => Promise<ShipmentResponse>;
    removeShipment: (id: string) => Promise<any>;
}
