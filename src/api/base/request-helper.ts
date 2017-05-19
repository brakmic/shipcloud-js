import * as _ from 'lodash';
let defaultHeaders = {
    'Content-Type': 'application/json;charset=utf-8',
    'Cache-Control': 'no-cache'
};
// use fetch for all API calls
const doFetch = (url: string, headers: any = {}): Promise<any> => {
    const allHeaders = _.assign(defaultHeaders, headers);
    return fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: allHeaders
        })
        .then(response => {
            return response.json();
        });
};

const doPost = function <T>(url: string, data: T, headers: any = {}): Promise<any> {
    const allHeaders = _.assign(defaultHeaders, headers);
    const request = {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(data),
        headers: allHeaders
    };
    return fetch(url, request as any).then(response => {
        return response.json();
    });
};

const doPut = function <T>(url: string, data: T, headers: any = {}): Promise<any> {
    const allHeaders = _.assign(defaultHeaders, headers);
    const request = {
        method: 'PUT',
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(data),
        headers: allHeaders
    };
    return fetch(url, request as any).then(response => {
        return response.json();
    });
};

const doDelete = function <T>(url: string, headers: any = {}): Promise<any> {
    const allHeaders = _.assign(defaultHeaders, headers);
    const request = {
        method: 'DELETE',
        mode: 'cors',
        redirect: 'follow',
        headers: allHeaders
    };
    return fetch(url, request as any).then((response: Response) => {
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

