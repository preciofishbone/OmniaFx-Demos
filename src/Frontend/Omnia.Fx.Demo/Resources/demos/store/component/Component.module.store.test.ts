import {GlobalStore} from "@omnia/fx/store";
import {componentStoreModule} from "./Component.module.store";
import {ComponentReference,ComponentRegistry} from "../../models";
import {MutationCatalog,ActionCatalog} from "../";

describe("Test for loading of the component",()=>{           
    test('Expect module registration to be called when model is created', ()=>{
        expect(GlobalStore.registerModule).toHaveBeenCalledTimes(1);
    });    
});

describe("Test for Getters",()=>{           
    test('Expect image are loaded to be empty before images are loaded', ()=>{
        expect(componentStoreModule.getters.isInitialized()).toBeFalsy();
    });    
});

describe("Test for Mutations",()=>{           
    test('Expect images to be set when setstate is called', ()=>{
        let fakeComponents:Array<ComponentReference> = new Array<ComponentReference>();        
        componentStoreModule.mutations.set(null,fakeComponents);
        expect(componentStoreModule.state.components).toBe(fakeComponents);
    });    
});

describe("Test for Actions",()=>{           
    test('Expect set state mutation to be called with component registry when load action is invoked', ()=>{        
        GlobalStore.commit = jest.fn();        
        componentStoreModule.state.components = null;
        componentStoreModule.actions.load(null,null);
        expect(GlobalStore.commit).toBeCalledWith(MutationCatalog.Component.setState(ComponentRegistry));
    });    
    test('Expect set state mutation not to be called when component is initialized', ()=>{        
        GlobalStore.commit = jest.fn();        
        expect(GlobalStore.commit).toHaveBeenCalledTimes(0);
    });    
    
});
