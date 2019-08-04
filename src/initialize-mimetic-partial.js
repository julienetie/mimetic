import {
    basicCompose,
    pxToRem,
    getFontSize,
} from './utilities';
import resizilla from 'resizilla';
import store from './store.js';
/**
 * Sets up intializeMimetic via partial application.
 * @param {Function} document.
 * @param {Function} getRootREMValue - Gets the root font-size in REM units.
 * @param {Function} CSSUnitsToPixels - Converts any CSS units to pixels.
 * @param {Function} setRootFontSize - Sets the new root font size.
 * @param {Function} resizilla - Calls handler on window resize and orientationchange events.
 */
function initializeMimeticPartial(setRootFontSize) {
    // A resize object to store MIMETIC's resizilla's requirements.

    // Gets the root element value in REM units.
    const getRootREMValue = basicCompose(
        pxToRem,
        getFontSize,
    );
    /**
     * The intializeMimetic function.
     * @param {object} config - The API parameters.
     */
    function initalizeMimeticFinal(config) {

        // Store the scaleDelay for kill and revive.
        store.scaleDelay = config.scaleDelay;


        // The intial root font size.
        store.rootFontSize = getRootREMValue(document);


        // Provide parameters to setRootFontSize. @TODO remove config, only use what is needed.
        const resizeSettings = Object.assign({
            initialOuterHeight: window.outerHeight,
            initialOuterWidth: window.outerWidth,
            // mobileWidthPX,
            // cutOffWidthPX,
        }, config);


        // Store the settings for kill and revive.
        store.resizeSettings = resizeSettings;


        // Immediately set the root font size according to MIMETIC.
        store.setRootFontSizeScope = () => setRootFontSize(resizeSettings);
        store.setRootFontSizeScope();


        // On window resize set the root font size according to MIMETIC.
        // resize.resizilla = resizilla(() => {
        //     setRootFontSize(settings, resize.setRootFontSizeScope);
        // }, scaleDelay, false);

        window.addEventListener('resize',()=> 
            setRootFontSize(store.setRootFontSizeScope))
    }


    /**
     * Remove both event listeners set via resizilla.
     */
    initalizeMimeticFinal.prototype.kill = () => resize.resizilla.destroy();


    /**
     * Re-instate resizilla.
     */
    initalizeMimeticFinal.prototype.revive = function revive() {
        resize.resizilla = resizilla(() => {
            setRootFontSize(store.setRootFontSizeScope);
        }, store.scaleDelay, false);
    };

    return initalizeMimeticFinal;
}


export default initializeMimeticPartial;