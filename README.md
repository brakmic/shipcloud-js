# ShipCloud API Binding for JavaScript

This project provides a complete mapping of [ShipCloud](https://www.shipcloud.io/)'s API. At [advarics](http://www.advarics.net/) we're currently evaluating their services and because our applications rely heavily on web technologies we've decided to create a proper JS API-binding. As far as we know there aren't any similar projects available. 

**This projects is still in development. At this time we're only utilizing the Address-Calls of the API. But soon it'll cover the missing parts of the API.**

### Structure

We use these fine open source packages and languages:

* TypeScript
* WebPack 2
* Lodash
* node-fetch

### Api Access Keys

However, to be able to communicate with the API you'll have [to register](https://developers.shipcloud.io/) first to obtain the free developer access keys. Then open **src/config.json** and put your keys in there.

<img src="https://i.imgsafe.org/35ede348de.png" width="350" height="120">

### Api Structure 

The structure under *src/api/v1* strictly follows the original documentation. It comprises of three sub-directories named **calls**, **types** and **config**

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

#### Config directory 

This directory contains elements which aren't described in the original docs.

```
Api Auth
```

Api-Auth class contains some helper methods for auth-key management. 

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

This binding can be used in any JavaScript environment as it contains a complete WebPack build setup that generates a bundle in the **dist** directory. But it also can be used directly in Node by calling `npm run start:client`. In this case a special node instance called **ts-node** will load **index.ts** from the project root and instantiate a small client script. This script initializes the API binding located in **src** and some of their API calls to query data from ShipCloud. 

Here's an example output:

<img src="https://i.imgsafe.org/366113e56e.png" width="450">

**Notice**: It depends on *your current setup* what and if any data will be sent back from ShipCloud. Also, don't forget to check your API key in **src/config.json** if you experience any problems. 

### License 

[MIT](https://github.com/brakmic/shipcloud-js/blob/master/LICENSE)

<img src="https://i.imgsafe.org/36963687f2.png" width="150">