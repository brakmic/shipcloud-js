import { RequestHelper, API_URLS } from '../../base';
import { Pickup, PickupResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const quotesUrl = `${protocol}://${API_URLS['pickup_requests'].server}/${API_URLS['pickup_requests'].version}/pickup_requests`;

const create = (authHeader: any, pickup: Pickup): Promise<PickupResponse> => {
    return RequestHelper.post(quotesUrl, pickup, authHeader);
};

export const PickupRequest = {
    create
};

