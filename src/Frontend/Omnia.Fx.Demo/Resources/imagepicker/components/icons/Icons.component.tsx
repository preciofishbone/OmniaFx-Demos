import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

/**
 * Property Interface for icons
 */
export interface IconProps{ 
    color:string;
    width:number;
    height:number;
}

/**ProjectPortfolio Icon */
@Component
export class ProjectPortfolio extends tsx.Component<IconProps>{
     
    public render(h){            
        return <svg fill="#000000" height={this.$props.height} viewBox="0 0 24 24" width={this.$props.width} xmlns="http://www.w3.org/2000/svg">
                    <path fill={this.$props.color} d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
    }  
}

/**ProjectPortfolio Icon */
@Component
export class SettingsIcon extends tsx.Component<IconProps>{
    @Prop() public color: string;    
    @Prop() public width: string;    
    @Prop() public height: string;    
    public render(h){    
        debugger;    
        return <svg fill="#000000" height={this.height} viewBox="0 0 24 24" width={this.width} xmlns="http://www.w3.org/2000/svg">
                     <path fill={this.color} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                     <path d="M0 0h24v24H0z" fill="none"/>
                 </svg>
    }  
}

/**ProjectPortfolio Icon */
@Component
export class AddIcon extends tsx.Component<IconProps>{
    @Prop() public color: string;    
    @Prop() public width: string;    
    @Prop() public height: string;        
    public render(h){        
        return <svg fill="#000000" height={this.height} viewBox="0 0 24 24" width={this.width} xmlns="http://www.w3.org/2000/svg">
                    <path fill={this.color} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
    }  
}
/** Info Icon */
@Component
export class InfoIcon extends tsx.Component<IconProps>{
    @Prop() public color: string;    
    @Prop() public width: string;    
    @Prop() public height: string;        
    public render(h){        
        return <svg height={this.height} viewBox="0 0 24 24" width={this.width} xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill={this.color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
    }
}

/** Check Icon */
@Component
export class CheckIcon extends tsx.Component<IconProps>{
    @Prop() public color: string;    
    @Prop() public width: string;    
    @Prop() public height: string;        
    public render(h){        
        return <svg height={this.height} viewBox="0 0 24 24" width={this.width} xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill={this.color} d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
    }
}
