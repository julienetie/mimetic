import requestFrame from 'request-frame-modern';
import resizilla from 'resizilla';
import objectAssignPolyfill from '../libs/object-assign-polyfill';
import objectFreezePolyfill from '../libs/object-freeze-polyfill';
import CSSUnitsToPixels from './css-units-to-pixels';
import initializeMimeticPartial from './initialize-mimetic-partial';
import setRootFontSizePartial from './set-root-font-size-partial';
import resizeRootFontSize from './resize-root-font-size';
import mimeticPartial from './mimetic-partial';
import defaults from './defaults';
import {
    basicCompose,
    pxToRem,
    isCallBackDefined,
    getFontSize,
    getRootElement
} from './utilities';


//Object Assign polyfill.
objectAssignPolyfill();


//Object Freeze polyfill.
objectFreezePolyfill();


// Non-mutating requestAnimationFrame polyfill.
const request = requestFrame('request');


// Non-mutating requestAnimationFrame polyfill.
const cancel = requestFrame('cancel');


/*
 initializeMimetic initalizes resizilla 
 (A window resize plugin) to call setRootFontSize 
 on window resize.

 setRootFontSize -> resizeRootFontSize which does 
 `rootElement.style.fontSize = 'xrem';`

 This function is initally called on resize.
*/
const setRootFontSize = setRootFontSizePartial(
    resizeRootFontSize,
    cancel,
    request
);


// Gets the root element value in REM units.
const getRootREMValue = basicCompose(
    pxToRem,
    getFontSize
);


/* 
 Called initally and on prototype.revivie() to 
 setup and implement resizilla's event listeners.

 initalizeMimetic contains a kill method to remove 
 resizilla's event listeners and a revive method to 
 restart Mimetic's initalization.
*/
const initializeMimetic = initializeMimeticPartial(
    getRootElement,
    getRootREMValue,
    CSSUnitsToPixels,
    setRootFontSize,
    resizilla
);


// The MIMETIC API. 
const mimetic = mimeticPartial(initializeMimetic, defaults);


export default mimetic;
