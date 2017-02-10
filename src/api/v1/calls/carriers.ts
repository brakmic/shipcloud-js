import { RequestHelper, API_URLS } from '../../base';
import { CarrierResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const addressesUrl = `${protocol}://${API_URLS['carriers'].server}/${API_URLS['carriers'].version}/addresses`;

const readAll = (authHeader: any): Promise<CarrierResponse[]> => {
    return RequestHelper.get(addressesUrl, authHeader);;
};


export const Carriers = {
    readAll
};

