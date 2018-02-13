//import {GlobalStore} from "@omnia/fx/src/store/Global.store";
import {GlobalStore} from "@omnia/fx/store";
import {MediaStoreModule,mediaStoreModule} from "../Media.module.store";
import {MediaReference,SearchMediaSettings} from "../../models";
import {ImageServiceMock} from "../../services/__mocks__/ImageService.mock";
import * as Actions from "../media.actions";
import * as Mutations from "../media.mutations";
import { ImageService } from '../../services/index';

describe("Test for Module registration",()=>{           
    test('Expect module to be registered at the OmniaStore', ()=>{
        //GlobalStore.registerModule(null)
        //GlobalStore.registerModule(mediaStoreModule);     
        //expect(GlobalStore.getModule<MediaStoreModule>(mediaStoreModule.namespace)).toEqual(mediaStoreModule);
    });    
});

// describe("Tests for Getters",()=>{           
//     test('Expect images not to be loaded before request to load', ()=>{        
//         expect(mediaStoreModule.getters.areImagesLoaded()).toBeFalsy();
//     });    
//     test('Expect images to be loaded when state is set', ()=>{        
//         //For tests only. The state should always be set through mutations
//         mediaStoreModule.state.images = new Array<MediaReference>();
//         GlobalStore.getModule<MediaStoreModule>(mediaStoreModule.namespace).getters.areImagesLoaded();
//         expect(mediaStoreModule.getters.areImagesLoaded()).toBeTruthy();
//     }); 
// });

// describe("Tests for Mutations",()=>{           
//     test('Expect Images to be set when I create a mutation through the store', ()=>{                      
//         let fakeEntities = new Array<MediaReference>();
//         fakeEntities.push({
//             path : "fakePath1",
//             name:"fakeName1"
//         });
//         fakeEntities.push({
//             path : "fakePath2",
//             name: "fakeName2"
//         });        
//         GlobalStore.commit(Mutations.SetState(fakeEntities))        
//         expect(mediaStoreModule.state.images.length).toBe(2);
//         expect(mediaStoreModule.state.images[0].path).toBe("fakePath1");
//         expect(mediaStoreModule.state.images[1].path).toBe("fakePath2");
//     });    
// });

// describe("Tests for Actions",()=>{           
//     let imageServiceMock:ImageService = null;
//     beforeEach(() =>{
//         imageServiceMock = new ImageServiceMock()
//         mediaStoreModule.imageService = imageServiceMock;
//     })
//     test('Expect service to be called with search settings when action is dispatched', ()=>{        
//         let fakeSearchSettings:SearchMediaSettings = {
//             path : "fakePath"
//         }
//         GlobalStore.dispatch(Actions.LoadImages(fakeSearchSettings));        
//         expect(imageServiceMock.getImages).toBeCalledWith(fakeSearchSettings);
//     });    
// });

