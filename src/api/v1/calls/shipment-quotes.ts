import { RequestHelper, API_URLS } from '../../base';
import { ShipmentQuote, ShipmentQuoteResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const quotesUrl = `${protocol}://${API_URLS['shipment_quotes'].server}/${API_URLS['shipment_quotes'].version}/shipment_quotes`;

const create = (authHeader: any, quote: ShipmentQuote): Promise<ShipmentQuoteResponse> => {
    return RequestHelper.post(quotesUrl, quote, authHeader);
};

export const ShipmentQuotes = {
    create
};

