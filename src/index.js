import resizilla from 'resizilla';
import objectAssignPolyfill from '../libs/object-assign-polyfill';
// import CSSUnitsToPixels from './css-units-to-pixels';
import initializeMimeticPartial from './initialize-mimetic-partial';
import setRootFontSizePartial from './set-root-font-size-partial';
import resizeRootFontSize from './resize-root-font-size';
import mimeticPartial from './mimetic-partial';
import defaults from './defaults';


// Object Assign polyfill.
objectAssignPolyfill();


/*
 initializeMimetic initalizes resizilla
 (A window resize plugin) to call setRootFontSize
 on window resize.

 setRootFontSize -> resizeRootFontSize which does
 `rootElement.style.fontSize = 'xrem';`

 This function is initally called on resize.
*/
const setRootFontSize = setRootFontSizePartial(resizeRootFontSize);





/*
 Called initally and on prototype.revivie() to
 setup and implement resizilla's event listeners.

 initalizeMimetic contains a kill method to remove
 resizilla's event listeners and a revive method to
 restart Mimetic's initalization.
*/
const initializeMimetic = initializeMimeticPartial(
    // CSSUnitsToPixels,
    setRootFontSize,
    resizilla,
);


// The MIMETIC API.
const mimetic = mimeticPartial(initializeMimetic, defaults);


export default mimetic;
