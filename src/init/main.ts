import * as Api from '../api';
import * as _ from 'lodash';

class ShipCloudApi {
    private authHeader: any;
    constructor(private apiKey: string) {
        if (_.isNil(this.apiKey)) throw new Error('ApiKey is missing!');
       this.authHeader = {'Authorization': `Basic ${this.apiKey}`};
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
    public removeShipment(id: string): Promise<any> {
        return Api.Calls.Shipments.remove(this.authHeader, id);
    }
}

export default ShipCloudApi;
