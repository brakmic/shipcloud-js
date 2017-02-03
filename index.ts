import * as fetch from 'node-fetch';
global['fetch'] = fetch;
const config = require('./src/config.json');
const jsBase64 = require('js-base64').Base64;
import ShipCloudApi from './src/init/main';
import { Address, AddressResponse,
         Shipment, ShipmentResponse,
         Package } from './src/api/v1/types';
import * as _ from 'lodash';

let api: ShipCloudApi;

const listKnownAddresses = (): Promise<any> => {
    console.log(`Querying all known addresses\r\n`);
    return api.readAllAddresses().then((addresses: AddressResponse[]) => {
        console.log(`Response received containing ${addresses.length} valid addresses.\r\n`);
        _.each(addresses, address => {
            console.log(address);
        });
    });
};

const getSingleAddress = (id: string): Promise<AddressResponse> => {
    console.log(`Querying addreess with id ${id}\r\n`);
    return api.readAddress(id);
};

const createAddress = (address: Address): Promise<AddressResponse> => {
    console.log(`Creating a new address\r\n`);
    return api.createAddress(address);
};

const createShipment = (shipment: Shipment): Promise<ShipmentResponse> => {
    console.log(`Creating new Shipment\r\n`);
    return api.createShipment(shipment);
};

const removeShipment = (id: string): Promise<any> => {
    console.log(`Removing Shipment with id ${id}\r\n`);
    return api.removeShipment(id);
};

const composeDummyAddress = (): Address => {
    return <Address>{
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

const composeShipment = (): Shipment => {
    const shipment = <Shipment>{
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

class Client {
    constructor() {
        this.setup();
    }
    public run() {
        // getSingleAddress('ADDRESS_ID').then(res => {
        //     console.log(res);
        // });
        // createAddress(composeDummyAddress()).then(res => {
        //     console.log(res);
        // });
        listKnownAddresses().then(res => console.log);
        // createShipment(composeShipment()).then(res => {
        //     console.log(res);
        // });
        // removeShipment('SHIPMENT_ID');

    }
    private setup() {
        api = new ShipCloudApi(jsBase64.encode(config.sandboxApiKey));
    }
}

const client = new Client();
client.run();

