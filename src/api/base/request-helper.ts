import * as _ from 'lodash';
declare var fetch: any;
declare var Request: any;
declare var Headers: any;
// use fetch for all API calls
const doFetch = (url: string, headers: any = {}): Promise<any> => {
    return fetch(url, {
            method: 'GET',
            headers: headers
        })
        .then(response => {
            if (response.status >= 400) {
                console.log(response);
                throw new Error('Bad response from server');
            }
            return response.json();
        });
};

const doPost = function <T>(url: string, data: T, headers: any = {}): Promise<any> {
    const allHeaders = _.assign({
                                   'Content-Type': 'application/json;charset=utf-8'
                                }, headers);
    const request = {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(data),
        headers: allHeaders
    };
    return fetch(url, request).then(response => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
    });
};

const doPut = function <T>(url: string, data: T, headers: any = {}): Promise<any> {
    const allHeaders = _.assign({
                                   'Content-Type': 'application/json;charset=utf-8'
                                }, headers);
    const request = {
        method: 'PUT',
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(data),
        headers: allHeaders
    };
    return fetch(url, request).then(response => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
    });
};

const doDelete = function <T>(url: string, data: T, headers: any = {}): Promise<any> {
    const allHeaders = _.assign({
                                   'Content-Type': 'application/json;charset=utf-8'
                                }, headers);
    const request = {
        method: 'DELETE',
        mode: 'cors',
        redirect: 'follow',
        headers: allHeaders
    };
    return fetch(url, request).then((response: Response) => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.text();
    });
};

const RequestHelper = {
    get: doFetch,
    post: doPost,
    put: doPut,
    delete: doDelete
}

export { RequestHelper }

