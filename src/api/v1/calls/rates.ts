import { RequestHelper, API_URLS } from '../../base';
import { Rate, RateResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const ratesUrl = `${protocol}://${API_URLS['rates'].server}/${API_URLS['rates'].version}/rates`;

const get = (authHeader: any, rate: Rate): Promise<RateResponse> => {
    return RequestHelper.post(ratesUrl, rate, authHeader);
};

export const Rates = {
    get
};

