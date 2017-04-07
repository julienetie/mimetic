
import {isCallBackDefined} from './utilities';

var once = true;
/** 
 * Calculate and apply the new font size to the root element.
 */
let wasLastBeyondMobileWidth = true;
let lastDevicePixelRatio;
let hasScaleCallback = false;
let hasZoomCallback = false;
let hasResizeCallback = false;
const resizeRootFontSize = (preCalculatedValues) => {
    const {
        windowWidth,
        windowOuterWidth,
        isDevicePixelRatioDefault,
        relativeDesignWidth,
        cutOff,
        rootElement,
        rootElementStyle,
        designWidthRatio,
        devicePixelRatioRound,
        rootFontSize,
        enableScale,
        preserveDevicePixelRatio,
        onScale,
        onZoom,
        onResize,
        clientWidth,
        defaultDevicePixelRatio
    } = preCalculatedValues;

    /** 
     * Evaluated devicePixelRatio
     */

    const ddd = (1 / defaultDevicePixelRatio) * devicePixelRatioRound;
    const evalDevicePixelRatio = preserveDevicePixelRatio ? devicePixelRatioRound : ddd;
    const resizeWithoutZoom = devicePixelRatioRound === lastDevicePixelRatio;

    if (resizeWithoutZoom || isDevicePixelRatioDefault || once) {
        if(once){
            once = false;
        }
        const isAboveDesignWidth = windowWidth > relativeDesignWidth;

        if (windowWidth > cutOff) {
            /** 
             * Set the rootElement's font size.
             */
            if (enableScale) {
                rootElementStyle.fontSize = (rootFontSize * designWidthRatio * evalDevicePixelRatio).toFixed(6) + 'rem';
            }

            /** 
             * Indicate that the viewport has exceeded the mobileWidth.
             */
            wasLastBeyondMobileWidth = true;
        } else if (wasLastBeyondMobileWidth) {
            /** 
             * Prevent odd behaviour when refreshed.
             * By removing the style attribute once when 
             * within the mobileWidth.
             */
            if (wasLastBeyondMobileWidth) {
                rootElement.removeAttribute("style");
            }
            /** 
             * Reset as within mobileWidth.
             */
            wasLastBeyondMobileWidth = false;
        }
    }

    // console.log('resizeWithoutZoom', resizeWithoutZoom)
    /** 
     * Callbacks.
     */
    if (runOnce('callbacks') && windowWidth > cutOff) {
        /** 
         * Validates callbacks once.
         */
        hasScaleCallback = isCallBackDefined(onScale);
        hasZoomCallback = isCallBackDefined(onZoom);
        hasResizeCallback = isCallBackDefined(onResize);
    }
    if (resizeWithoutZoom && hasScaleCallback) {
        onScale(clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound);
    }

    if (!resizeWithoutZoom && hasZoomCallback) {
        onZoom({ clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound, ddd });
    }

    if (hasResizeCallback) {
        onResize(clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound);
    }

    /** 
     * Set the last ratio from the current.
     */
    lastDevicePixelRatio = devicePixelRatioRound;
};

export default resizeRootFontSize;