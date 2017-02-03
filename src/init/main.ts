require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as Api from '../api';
import * as _ from 'lodash';

class ShipCloudApi implements Api.IShipCloud {
    private authHeader: any;
    constructor(private apiKey: string) {
        if (_.isNil(this.apiKey)) throw new Error('ApiKey is missing!');
        this.authHeader = { 'Authorization': `Basic ${this.apiKey}` };
        console.log('ShipCloud API initialized');
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
// Make ShipCloud API globally available when running in a browser
// NOTICE: You may experience CORS errors because your local domain will be localhost:8080.
// which isn't allowed to access the api.shipcloud.io domain.
// To overcome this problem you could, for exampple, create a local server based on HapiJS or Express which then
// would forward your local requests to api.shipcloud.io and return their responses back.
if (window) {
    (<any>window).ShipCloudApi = ShipCloudApi;
}

export default ShipCloudApi;


