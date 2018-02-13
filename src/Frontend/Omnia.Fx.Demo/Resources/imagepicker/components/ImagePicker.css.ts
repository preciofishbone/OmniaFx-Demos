import { style } from 'typestyle';
import {StyleVariables} from "../common/styles/variables.css";
import { relative } from 'path';
import { left } from 'vue-tsx-support/lib/modifiers';

export class ImagePickerStyles
{
    public static Chrome = style(
        {
            width:'100%',
            height:'40px',
            margin:'0px',
            backgroundColor:StyleVariables.SystemColors.Dark 
        });

    public static EditProperties = style(
        {
            zIndex:200,
            width:"40px",
            height:"40px",
            backgroundColor:StyleVariables.SystemColors.Accent,
            position:"relative",
            marginRight:"20px",
            top:"20px",
            float:"right",
            borderRadius:"30px",
            boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        });            
    public static Icon = style(
        {
            paddingLeft: "7px",
            paddingTop : "7px"
        });
    
}   




