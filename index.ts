import * as fetch from 'node-fetch';
global['fetch'] = fetch;
const config = require('./src/config.json');
import ShipCloudApi from './src/init/main';
import { Address, AddressResponse } from './src/api/v1/types';
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

class Client {
    constructor() {
        this.setup();
    }
    public run() {
        // getSingleAddress('ADDRESS_ID').then(res => {
        //     console.log(res);
        // });
        createAddress(composeDummyAddress()).then(res => {
            console.log(res);
        });
        listKnownAddresses().then(res => console.log);
    }
    private setup() {
        api = new ShipCloudApi(config.sandboxApiKey);
    }
}

const client = new Client();
client.run();

