require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as Api from '../api';
import * as _ from 'lodash';

class ShipCloudApi implements Api.IShipCloud {
    private authHeader: any;
    constructor(private apiKey: string) {
        if (_.isNil(this.apiKey)) throw new Error('ApiKey is missing!');
        this.authHeader = { 'Authorization': `Basic ${this.apiKey}` };
    }
    // Adresses
    public createAddress(address: Api.Types.Address): Promise<Api.Types.AddressResponse> {
        return Api.Calls.Addresses.create(this.authHeader, address);
    }
    public readAddress(id: string): Promise<Api.Types.AddressResponse> {
        return Api.Calls.Addresses.read(this.authHeader, id);
    }
    public readAllAddresses(): Promise<Api.Types.AddressResponse[]> {
        return Api.Calls.Addresses.readAll(this.authHeader);
    }
    // Carriers
    public readAllCarriers(): Promise<Api.Types.CarrierResponse[]> {
        return Api.Calls.Carriers.readAll(this.authHeader);
    }
    // Shipments
    public createShipment(shipment: Api.Types.Shipment): Promise<Api.Types.ShipmentResponse> {
        return Api.Calls.Shipments.create(this.authHeader, shipment);
    }
    public readShipment(id: string): Promise<Api.Types.ShipmentResponse> {
        return Api.Calls.Shipments.read(this.authHeader, id);
    }
    public readAllShipments(): Promise<Api.Types.ShipmentQuoteResponse[]> {
        return Api.Calls.Shipments.readAll(this.authHeader);
    }
    public updateShipment(shipment: Api.Types.Shipment, id: string): Promise<Api.Types.ShipmentResponse> {
        return Api.Calls.Shipments.update(this.authHeader, shipment, id);
    }
    public removeShipment(id: string): Promise<any> {
        return Api.Calls.Shipments.remove(this.authHeader, id);
    }
}

export default ShipCloudApi;


