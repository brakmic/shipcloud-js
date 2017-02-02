import * as _ from 'lodash';
import { RequestHelper } from '../../base';
export class ApiAuth {
    constructor(private apiKey = undefined, private isDebugMode: boolean = true) {
       this.setup();
    }
    public getKey() {
        return this.apiKey;
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
                    this.apiKey = config.sandboxApiKey;
                } else {
                    this.apiKey = config.productionApiKey;
                }
            });
        }
        console.log(`Using key: ${this.apiKey}`);
    }
}
