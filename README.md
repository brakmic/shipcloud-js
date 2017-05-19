# ShipCloud API Binding for JavaScript

This project provides a complete mapping of [ShipCloud](https://www.shipcloud.io/)'s API. At [advarics](http://www.advarics.net/) we're currently evaluating their services and because our applications rely heavily on web technologies we've decided to create a proper JS API-binding. As far as we know there aren't any similar projects available. 

For a C++ version visit [this](https://github.com/brakmic/shipcloud-cpp) repo.

### Structure

We use these fine open source packages and languages:

* [TypeScript](https://www.typescriptlang.org/)
* [WebPack 2](https://webpack.js.org/)
* [Lodash](https://lodash.com/)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

### Api Access Keys

However, to be able to communicate with the API you'll have [to register](https://developers.shipcloud.io/) first to obtain the free developer access keys. Then open **src/config.json** and put your keys in there.

![shipcloud_keys](https://picload.org/image/rirpplgw/shipcloud_config.png)

### Api Structure 

The structure under *src/api/v1* strictly follows the [original documentation](https://developers.shipcloud.io/reference/). It comprises of these sub-directories:

``` 
calls
config
public
types
```

#### Calls directory 

This directory contains all available API calls:

- [Addresses](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/address/address.ts) 
- [Shipments](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/shipment/shipment.ts)
- [Shipment Quotes](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/shipment-quote/shipment-quote.ts)
- [Carriers](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/responses/carrier-response.ts)
- [Rates](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/rate/rate.ts)
- [Pickup Requests](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/pickup/pickup.ts)
- [Webhooks](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/webhook/webhook.ts)
- [Trackers](https://github.com/brakmic/shipcloud-js/blob/master/src/api/v1/types/tracker/tracker.ts)


For example, the Address-Call comprises of three calls according to the docs: **create**, **index** and **read**

Therefore we define these call-mappings in our Address class: **read**, **readAll** and **create**.
In general these classes define the `high-level` portion of the complete API-binding as these don't touch more specific aspects like JSON or HTTP-Requests.

#### Config directory 

This directory contains elements which aren't described in the original docs.

```
Api Auth
```

Api-Auth class contains some helper methods for auth-key management. 

#### Public directory 

```
ShipCloud
```

This directory contains the public ShipCloud interface. Clients should use it for type-safe API access.

#### Types directory 

This directory contains all message and response definitions.

```
Additional Services
Address 
Package 
Pickup 
Rate 
Responses ---
             |
             | ---> Address-Response, 
             | ---> Carrier-Response
             | ---> Pickup-Response 
             | ----> etc.
Shipment 
Shipment Quote 
Tracker 
Webhook
```

These classes are `DTOs` for easy transfer between client and server.

### REST & JSON 

All API calls go via the [RequestHelper](https://github.com/brakmic/shipcloud-js/blob/master/src/api/base/request-helper.ts) class. This class utilizes [node-fetch](https://www.npmjs.com/package/node-fetch) and [implements](https://github.com/brakmic/shipcloud-js/blob/master/src/api/base/request-helper.ts#L76) the GET, POST, PUT and DELETE requests.

### Building

First, install node packages with `npm install`.

#### Development bundle

To create a development bundle type:

```
npm run build:dev 
```  

#### Production bundle

To create a production bundle type: 

```
npm run build:prod 
```

After a successful build a new bundle will be created in **dist**.

#### Hot-Module reloading with WebPack

To activate hot-module reloading during the development type:

```
npm run start:hmr 
```

### Usage 

#### Console Client

To test the binding in Node type:

```
npm run start:client
``` 

Now a special node instance called **ts-node** will load **index.ts** to boot the API client. 

#### Browser Client 

Type:

```
npm run build:client
```

The generated build will be located in **dist/client**.

Copy this directory to your web server and open **index.html**. 

**Notice**: It depends on *your current setup* what and if any data will be sent back from ShipCloud. Also, don't forget to check your API key in **src/config.json** if you experience any problems. 

### License 

[MIT](https://github.com/brakmic/shipcloud-js/blob/master/LICENSE)
