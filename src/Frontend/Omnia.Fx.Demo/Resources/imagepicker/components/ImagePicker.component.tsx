import {
    Console,
    HttpClient,
    Inject,
    Localize,
    OmniaContext,
    SharePointContext
  } from '@omnia/fx';
  import {
    IWebComponentInstance,
    WebComponentBootstrapper    
  } from '@omnia/fx/bootstrap';
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';  
  import {ImagePickerStyles} from './ImagePicker.css';
  import {StyleVariables} from "../common/styles/variables.css";  
  //import {SettingsIcon} from "./icons/Icons.component";
//   import {EditProperties} from "./subcomponents/editproperties.component";
  
  @Component
  export class ImagePickerComponent extends Vue implements IWebComponentInstance {
    @Inject(HttpClient) private httpClient: HttpClient;
    @Inject(OmniaContext) private omniaContext: OmniaContext;
    @Inject(SharePointContext) private spContext: SharePointContext;

    public mounted() {
      WebComponentBootstrapper.registerElementInstance(this, this.$el);      
    }
  
    public render(h) {                  
      return <div>
            <div>I am an imagepicker yes I am!</div>
          </div>;
    }    
  }
  
  // WebComponentBootstrapper.registerElement((manifest) => {    
  //   document
  //     .querySelectorAll('.omf-header')[0]
  //     .appendChild(document.createElement(manifest.elementName));
  //   Vue.customElement(manifest.elementName, new ImagePickerComponent().$options);
  // });