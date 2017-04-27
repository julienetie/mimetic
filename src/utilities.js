const windowRef = window;
const documentRef = windowRef.document;


// Checks if string or number is a number.
export const isNumber = value => Number(value) === value;


// A very simple compose function.
export const basicCompose = (a, b) => c => a(b(c));


// converts pixels to REM values.
export const pxToRem = fontSizePx => parseInt(fontSizePx, 10) / 16;


// Is Function.
export const isFunction = value => typeof value === 'function';


// Gets the element's root font size.
export const getFontSize = element => windowRef.getComputedStyle(element.documentElement, null).getPropertyValue('font-size');


// Gets the root element.
export const getRootElement = (element) => {
    const elements = {
        html: parent => parent.documentElement,
        body: parent => parent.body,
    };

    if (element instanceof windowRef.Element) {
        if (element.nodeType === 1) {
            return element;
        }
        throw new Error('rootElement is not a valid element');
    }
    return elements[element] ? elements[element](documentRef) : documentRef.querySelector(element);
};
