import { RequestHelper, API_URLS } from '../../base';
import { Shipment, ShipmentResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const shipmentsUrl = `${protocol}://${API_URLS['shipments'].server}/${API_URLS['shipments'].version}/shipments`;


const create = (authHeader: any, shipment: Shipment): Promise<ShipmentResponse> => {
    return RequestHelper.post(shipmentsUrl, shipment, authHeader);
};

const read = (authHeader: any, id: string): Promise<ShipmentResponse> => {
    return RequestHelper.get(`${shipmentsUrl}/${id}`, authHeader);
};

const readAll = (authHeader: any): Promise<ShipmentResponse[]> => {
    return RequestHelper.get(shipmentsUrl, authHeader);;
};

const update = (authHeader: any, shipment: Shipment, id: string): Promise<ShipmentResponse> => {
    return RequestHelper.put(`${shipmentsUrl}/${id}`, shipment, authHeader);
};

const remove = (authHeader: any, id: string): Promise<any> => {
    return RequestHelper.delete(`${shipmentsUrl}/${id}`, authHeader);
};

export const Shipments = {
    create,
    read,
    readAll,
    update,
    remove
};