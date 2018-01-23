import * as tsx from 'vue-tsx-support';
export interface BasicSubComponentProps {
    subtext: string;
}
export interface BasicSubComponentEvents {
    onOk: void;
    onError: ErrorDetails;
}
export interface ErrorDetails {
    code: number;
    detail: string;
}
export interface BasicSubComponentScopedSlots {
    default: {
        text: string;
    };
}
export default class BasicSubComponent extends tsx.Component<BasicSubComponentProps, BasicSubComponentEvents, BasicSubComponentScopedSlots> {
    subtext: string;
    onOkClicked(): void;
    onErrorClicked(details: ErrorDetails): void;
    mounted(): void;
    render(h: any): any;
}
