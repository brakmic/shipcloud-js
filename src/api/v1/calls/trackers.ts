import { RequestHelper, API_URLS } from '../../base';
import { Tracker, TrackerResponse } from '../types';
import * as _ from 'lodash';
const protocol = 'https';
const trackersUrl = `${protocol}://${API_URLS['trackers'].server}/${API_URLS['trackers'].version}/trackers`;

const create = (authHeader: any, tracker: Tracker): Promise<TrackerResponse> => {
    return RequestHelper.post(trackersUrl, tracker, authHeader);
};

const read = (authHeader: any, id: string): Promise<TrackerResponse> => {
    return RequestHelper.get(`${trackersUrl}/${id}`, authHeader);
};

const readAll = (authHeader: any): Promise<TrackerResponse[]> => {
    return RequestHelper.get(trackersUrl, authHeader);;
};

const remove = (authHeader: any, id: string): Promise<TrackerResponse> => {
    return RequestHelper.delete(`${trackersUrl}/${id}`, authHeader);
}

export const Trackers = {
    create,
    read,
    readAll,
    remove
};

