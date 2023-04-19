

interface Focusable {
    nextFocus() : Focusable | undefined;
    prevFocus() : Focusable | undefined;

    isFocused() : boolean;

    setFocus() : void;


};

export default Focusable;