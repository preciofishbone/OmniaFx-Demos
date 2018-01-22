import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

export interface BasicSubComponentProps {
  subtext: string;
}

export interface BasicSubComponentEvents {
  onOk: void;
  onError: { code: number; detail: string };
}

export interface BasicSubComponentScopedSlots {
  default: { text: string };
}

@Component
export default class BasicSubComponent extends tsx.Component<
  BasicSubComponentProps,
  BasicSubComponentEvents,
  BasicSubComponentScopedSlots
> {
  @Prop() public subtext: string;

  public mounted() {}

  public render(h) {
    return <div> I am a niceeeee sub component {this.subtext}! </div>;
  }
}
