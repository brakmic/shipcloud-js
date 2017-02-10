import { Address } from '../types/address';
import { Rate } from '../types/rate';
import { Shipment } from '../types/shipment';
import { ShipmentQuote } from '../types/shipment-quote';
import { Pickup } from '../types/pickup';
import { AddressResponse, ShipmentResponse,
         CarrierResponse, RateResponse,
         ShipmentQuoteResponse, PickupResponse } from '../types/responses';

export interface IShipCloud {
    // Adresses
    createAddress: (address: Address) => Promise<AddressResponse>;
    readAddress: (id: string) => Promise<AddressResponse>;
    readAllAddresses: () => Promise<AddressResponse[]>;
    // Carriers
    readAllCarriers: () => Promise<CarrierResponse[]>;
    // Pickup Requests
    createPickupRequest: (request: Pickup) => Promise<PickupResponse>;
    // Rates [deprecated] => use "shipment quotes" instead
    getRateFor: (rate: Rate) => Promise<RateResponse>;
    // // Shipments
    createShipment: (shipment: Shipment) => Promise<ShipmentResponse>;
    readShipment: (id: string) => Promise<ShipmentResponse>;
    readAllShipments: () => Promise<ShipmentResponse[]>;
    updateShipment: (shipment: Shipment, id: string) => Promise<ShipmentResponse>;
    removeShipment: (id: string) => Promise<any>;
    // ShipmentQuotes
    createShipmentQuote: (quote: ShipmentQuote) => Promise<ShipmentQuoteResponse>;
}
