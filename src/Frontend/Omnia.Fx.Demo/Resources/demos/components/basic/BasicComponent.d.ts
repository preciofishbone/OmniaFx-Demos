import { IWebComponentInstance } from '@omnia/fx';
import Vue from 'vue';
import { ErrorDetails } from './BasicSubComponent';
export declare class BasicComponent extends Vue implements IWebComponentInstance {
    private basicService;
    private httpClient;
    private omniaContext;
    private spContext;
    mounted(): void;
    onOk(): void;
    onError(details: ErrorDetails): void;
    render(h: any): any;
}
