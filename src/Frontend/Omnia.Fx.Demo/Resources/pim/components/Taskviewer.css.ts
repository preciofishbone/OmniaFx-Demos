import {style} from 'typestyle';
import {StyleVariables} from "../common/variables.css";
import {relative} from 'path';
import {left} from 'vue-tsx-support/lib/modifiers';

export class TaskViewerStyles
{
    public static Table = style(
        {
            width:'300px',
            border:"1px",
            backgroundColor:StyleVariables.SystemColors.Light 
        });
    public static TableRow = style(
        {
            fontFamily: "Segoe UI",
            fontSize : "12px;"            
        }
    )
}   




