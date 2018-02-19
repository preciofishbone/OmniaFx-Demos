import {ComponentReference} from "../models";

/** 
 * All components to load
*/
export const ComponentRegistry:Array<ComponentReference>  = new Array<ComponentReference>();
 ComponentRegistry.push({
    elementName : "fakeElement",
    name : "fakeName"
 });