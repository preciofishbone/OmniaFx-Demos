import Component from "vue-class-component";
import * as tsx from "vue-tsx-support";
import { Prop } from "vue-property-decorator";

export interface BasicSubComponentProps {
    subtext: string;
}

export interface BasicSubComponentEvents {
    onOk: void;
    onError: { code: number, detail: string };
}

export interface BasicSubComponentScopedSlots {
    default: { text: string };
}

@Component
export default class BasicSubComponent extends tsx.Component<BasicSubComponentProps, BasicSubComponentEvents, BasicSubComponentScopedSlots> {

    @Prop() subtext: string

    mounted() {

    }

    render(h) {
        return (
            <div> I am a niceeeee sub component {this.subtext}! </div>
        )
    }

}