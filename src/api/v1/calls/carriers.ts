import { RequestHelper, API_URLS } from '../../base';
import { CarrierResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const carriersUrl = `${protocol}://${API_URLS['carriers'].server}/${API_URLS['carriers'].version}/carriers`;

const readAll = (authHeader: any): Promise<CarrierResponse[]> => {
    return RequestHelper.get(carriersUrl, authHeader);;
};

export const Carriers = {
    readAll
};

