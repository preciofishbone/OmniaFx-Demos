/*@WebComponentInterface("my-test-spfx-settings")*/
export interface ITestSpfxComponentSettings {
    // allow unknown elements like ref which is vue specific
    [name: string]: any;

    /*@DomProperty*/
    onClosed?: () => void;

    /*@DomProperty*/
    onChange?: (value) => void

}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty {
            wcslot: string;
        }
        interface IntrinsicElements {
            /*@WebComponent*/
            "my-test-spfx-settings": ITestSpfxComponentSettings
        }
    }
}