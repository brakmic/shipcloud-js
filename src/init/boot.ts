// this script will be used by index.html located in dist.
import ShipCloudApi from './main';

(function () {
    // Make ShipCloud API globally available when running in a browser
    // NOTICE: You may experience CORS errors because your local domain will be localhost:8080.
    // which isn't allowed to access the api.shipcloud.io domain.
    // To overcome this problem you could, for exampple, create a local server based on HapiJS or Express which then
    // would forward your local requests to api.shipcloud.io and return their responses back.
    if (window) {
        (<any>window).ShipCloudApi = ShipCloudApi;
    }

}());
