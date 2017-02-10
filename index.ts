const config = require('./src/config.json');
const jsBase64 = require('js-base64').Base64;
import * as _ from 'lodash';
import { Api } from './src/api';
import ShipCloudApi from './src/init/main';

let api: Api.IShipCloud;

const display = (obj: any): void => {
    console.log(obj);
};

const displayCollection = (objects: any): void => {
    _.each(objects, obj => {
        console.log(obj);
    });
};

const listKnownAddresses = (): Promise<any> => {
    console.log(`Querying all known addresses\r\n`);
    return api.readAllAddresses().then((addresses: Api.Types.AddressResponse[]) => {
        console.log(`Response received containing ${addresses.length} valid addresses.\r\n`);
        displayCollection(addresses);
    });
};

const listAllCarriers = (): Promise<any> => {
    console.log(`Querying all carriers\r\n`);
    return api.readAllCarriers().then((carriers: Api.Types.CarrierResponse[]) => {
        console.log(`Response received containing ${carriers.length} valid carriers.\r\n`);
        displayCollection(carriers);
    });
};

const getRateFor = (rate: Api.Types.Rate): Promise<any> => {
    console.log(`Querying rate for: ${JSON.stringify(rate, undefined, 2)}`);
    return api.getRateFor(rate).then(response => {
        console.log(response);
    });
};

const getSingleAddress = (id: string): Promise<Api.Types.AddressResponse> => {
    console.log(`Querying addreess with id ${id}\r\n`);
    return api.readAddress(id);
};

const createAddress = (address: Api.Types.Address): Promise<Api.Types.AddressResponse> => {
    console.log(`Creating a new address\r\n`);
    return api.createAddress(address);
};

const createPickupRequest = (pickup: Api.Types.Pickup): Promise<Api.Types.PickupResponse> => {
    console.log(`Creating a new Pickup Request\r\n`);
    return api.createPickupRequest(pickup);
};

const createShipment = (shipment: Api.Types.Shipment): Promise<Api.Types.ShipmentResponse> => {
    console.log(`Creating new Shipment\r\n`);
    return api.createShipment(shipment);
};

const createShipmentQuote = (quote: Api.Types.ShipmentQuote): Promise<Api.Types.ShipmentQuoteResponse> => {
    console.log(`Creating a new ShipmentQuote\r\n`);
    return api.createShipmentQuote(quote);
};

const createWebHook = (hook: Api.Types.WebHook): Promise<Api.Types.WebHookResponse> => {
    console.log(`Creating a new WebHook\r\n`);
    return api.createWebHook(hook);
};

const removeShipment = (id: string): Promise<any> => {
    console.log(`Removing Shipment with id ${id}\r\n`);
    return api.removeShipment(id);
};

const composeDummyAddress = (): Api.Types.Address => {
    return <Api.Types.Address>{
        'company': 'ACME Company',
        'first_name': 'Bugs',
        'last_name': 'Bunny',
        'care_of': null,
        'street': 'Acme Street',
        'street_no': '42',
        'zip_code': '12345',
        'city': 'Los Angeles',
        'state': null,
        'country': 'US',
        'phone': '555-123',
    };
};

const composeShipment = (): Api.Types.Shipment => {
    const shipment = <Api.Types.Shipment>{
        from: {
            id: '1b9f23ab-6332-4c6c-beed-c1295e9dd749'
        },
        to: {
            company: 'Receiver Inc.',
            first_name: 'Max',
            last_name: 'Mustermann',
            street: 'Beispielstrasse',
            street_no: '42',
            city: 'Rum',
            zip_code: '6063',
            country: 'AT'
        },
        package: {
            weight: 1.5,
            length: 20,
            width: 20,
            height: 20,
            declared_value: {
                amount: 555.45,
                currency: 'EUR'
            }
        },
        carrier: 'dhl',
        service: 'standard',
        reference_number: 'ref123456',
        notification_email: 'person@example.com',
        create_shipping_label: true
    };
    return shipment;
};

const composeShipmentQuote = (): Api.Types.ShipmentQuote => {
    return <Api.Types.ShipmentQuote>{
        carrier: 'dhl',
        service: 'standard',
        to: {
            street: 'Beispielstrasse',
            street_no: '42',
            zip_code: '22100',
            city: 'Hamburg',
            country: 'DE'
        },
        from: {
            street: 'Musterstrasse',
            street_no: '23',
            zip_code: '20148',
            city: 'Hamburg',
            country: 'DE'
        },
        package: {
            weight: 1.5,
            length: 20,
            width: 20,
            height: 20
        }
    };
};

const composePickup = (): Api.Types.Pickup => {
    return <Api.Types.Pickup>{
        carrier: 'dpd',
        pickup_time: {
            earliest: '2015-09-15T09:00:00+02:00',
            latest: '2015-09-15T18:00:00+02:00'
        },
        pickup_address: {
            company: 'Muster-Company',
            first_name: 'Max',
            last_name: 'Mustermann',
            street: 'Musterstraße',
            street_no: '42',
            zip_code: '54321',
            city: 'Musterstadt',
            country: 'DE',
            phone: '555-555'
        }
    };
};

const composeRate = (): Api.Types.Rate => {
    return <Api.Types.Rate>{
        carrier: 'dhl',
        weight: 1.5,
        length: 20,
        width: 20,
        height: 20
    };
};

const composeWebHook = (): Api.Types.WebHook => {
    return <Api.Types.WebHook>{
        url: 'https://example.com/webhook',
        event_types: ['shipment.tracking.delayed', 'shipment.tracking.delivered']
    }
};

class Client {
    constructor() {
        this.setup();
    }
    public run() {

        // getSingleAddress('ADDRESS_ID').then(display);

        // createAddress(composeDummyAddress()).then(display);

        // listKnownAddresses().then(displayCollection);

        // listAllCarriers();

        // createPickupRequest(composePickup()).then(display);

        // getRateFor(composeRate());

        // createShipment(composeShipment()).then(display);

        // createShipmentQuote(composeShipmentQuote()).then(display);

        // createWebHook(composeWebHook()).then(display);

        // removeShipment('SHIPMENT_ID');

    }
    private setup() {
        api = new ShipCloudApi(jsBase64.encode(config.sandboxApiKey));
    }
}

const client = new Client();
client.run();

