import { RequestHelper, API_URLS } from '../../base';
import { WebHook, WebHookResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const webhooksUrl = `${protocol}://${API_URLS['webhooks'].server}/${API_URLS['webhooks'].version}/webhooks`;

const create = (authHeader: any, hook: WebHook): Promise<WebHookResponse> => {
    return RequestHelper.post(webhooksUrl, hook, authHeader);
};

const read = (authHeader: any, id: string): Promise<WebHookResponse> => {
    return RequestHelper.get(`${webhooksUrl}/${id}`, authHeader);
};

const readAll = (authHeader: any): Promise<WebHookResponse[]> => {
    return RequestHelper.get(webhooksUrl, authHeader);;
};

const remove = (authHeader: any, id: string): Promise<WebHookResponse> => {
    return RequestHelper.delete(`${webhooksUrl}/${id}`, authHeader);
}

export const WebHooks = {
    create,
    read,
    readAll,
    remove
};

