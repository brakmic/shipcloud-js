import { RequestHelper, API_URLS } from '../../base';
import { Address, AddressResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const addressesUrl = `${protocol}://${API_URLS['addresses'].server}/${API_URLS['addresses'].version}/addresses`;
const readAll = (authHeader: any): Promise<Address[]> => {
    return RequestHelper.get(addressesUrl, authHeader);;
};

const read = (authHeader: any, id: string): Promise<Address> => {
    return RequestHelper.get(`${addressesUrl}/${id}`, authHeader);
};

const create = (authHeader: any, address: Address): Promise<AddressResponse> => {
    return RequestHelper.post(addressesUrl, address, authHeader);
};

export const Addresses = {
    read,
    readAll,
    create
};

