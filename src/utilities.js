// Checks if string or number is a number.
export const isNumber = value => Number(value) === value;


// A very simple compose function.
export const basicCompose = (a, b) => {
    return function(c) {
        return a(b(c));
    };
};


// converts pixels to REM values.
export const pxToRem = (fontSizePx) => parseInt(fontSizePx) / 16;


// Is Function.
export const isFunction = (value) => typeof value === 'function';


// Gets the element's root font size.
export const getFontSize = (element) => window.getComputedStyle(element.documentElement, null).getPropertyValue('font-size');


// Gets the root element.
export const getRootElement = (element) => {
    const elements = {
        html: (parent) => parent.documentElement,
        body: (parent) => parent.body
    }

    if (element instanceof Element) {
        if (element.nodeType === 1) {
            return element;
        } else {
            // @TODO Throw new error.
        }
    }
    return elements.hasOwnProperty(element) ? elements[element](document) : document.querySelector(element);
}
