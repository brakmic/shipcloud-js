export interface WebHookResponse {
    id: string;
    url: string;
    event_types: string[];
    deactivated: boolean;
}
