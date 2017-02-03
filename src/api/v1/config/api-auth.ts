import * as _ from 'lodash';
import { RequestHelper } from '../../base';
const jsBase64 = require('js-base64').Base64;
export class ApiAuth {
    private apiKeyBase64: string;
    constructor(private apiKey = undefined, private isDebugMode: boolean = true) {
       this.setup();
    }
    public getKey() {
        return this.apiKeyBase64;
    }
    public isRunningInDebugMode() {
        return this.isDebugMode;
    }
    private setup() {
         if (this.isDebugMode) {
            console.log(`ShipCloud-API runs in debug mode.`);
        } else {
            console.log(`ShipCloud-API runs in production mode.`);
        }
        if (_.isNil(this.apiKey)) {
            RequestHelper.get('config.json').then(config => {
                console.log(`Received config.json from server.`);
                if (this.isDebugMode) {
                    this.apiKeyBase64 = this.toBase64(config.sandboxApiKey);
                } else {
                    this.apiKeyBase64 = this.toBase64(config.productionApiKey);
                }
            });
        }
        console.log(`Using key: ${this.apiKey}`);
    }
    private toBase64(key: string): string {
        return jsBase64.encode(key);
    }
}
