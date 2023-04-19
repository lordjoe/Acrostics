
export interface Redrawable {
    forceRedraw() : void;

    hasFocus() : boolean;

    setFocus() : void;

}

export type NoArgsNoReturnFunction = () => void;

export type NoArgsNumberReturnFunction = () => number;