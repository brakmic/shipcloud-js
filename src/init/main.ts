require('es6-promise').polyfill();
require('isomorphic-fetch');
import { Api } from '../api';
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
    // Pickup Request
    public createPickupRequest(pickup: Api.Types.Pickup): Promise<Api.Types.PickupResponse> {
        return Api.Calls.PickupRequest.create(this.authHeader, pickup);
    }
    // Rates [deprecated] => use "shipment quotes" instead
    public getRateFor(rate: Api.Types.Rate): Promise<Api.Types.RateResponse> {
        return Api.Calls.Rates.get(this.authHeader, rate);
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
    // Shipment Quotes
    public createShipmentQuote(quote: Api.Types.ShipmentQuote): Promise<Api.Types.ShipmentQuoteResponse> {
        return Api.Calls.ShipmentQuotes.create(this.authHeader, quote);
    }
    // Trackers
    public createTracker(tracker: Api.Types.Tracker): Promise<Api.Types.TrackerResponse> {
        return Api.Calls.Trackers.create(this.authHeader, tracker);
    }
    public readTracker(id: string): Promise<Api.Types.TrackerResponse> {
        return Api.Calls.Trackers.read(this.authHeader, id);
    }
    public readAllTrackers(): Promise<Api.Types.TrackerResponse[]> {
        return Api.Calls.Trackers.readAll(this.authHeader);
    }
    // Webhooks
    public readWebHook(id: string): Promise<Api.Types.WebHookResponse> {
        return Api.Calls.WebHooks.read(this.authHeader, id);
    }
    public readAllWebHooks(): Promise<Api.Types.WebHookResponse[]> {
        return Api.Calls.WebHooks.readAll(this.authHeader);
    }
    public createWebHook(hook: Api.Types.WebHook): Promise<Api.Types.WebHookResponse> {
        return Api.Calls.WebHooks.create(this.authHeader, hook);
    }
    public removeWebHook(id: string): Promise<Api.Types.WebHookResponse> {
        return Api.Calls.WebHooks.remove(this.authHeader, id);
    }
}

export default ShipCloudApi;


