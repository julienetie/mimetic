import runOnce from 'run-once';
import { isCallBackDefined } from './utilities';

/** 
 * Calculate and apply the new font size to the root element.
 */
let wasLastBeyondMobileWidth = true;
let lastDevicePixelRatio;
let hasScaleCallback = false;
let hasZoomCallback = false;
let hasResizeCallback = false;
let APIParameters;
const windowRef = window;
const documentRef = windowRef.document;


const resizeRootFontSize = ({
    windowWidth,
    windowOuterWidth,
    isDevicePixelRatioDefault,
    relativeDesignWidth,
    cutOff,
    rootElement,
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
}) => {


    /** 
     * Evaluated devicePixelRatio
     */
    const ddd = (1 / defaultDevicePixelRatio) * devicePixelRatioRound;
    const evalDevicePixelRatio = preserveDevicePixelRatio ? devicePixelRatioRound : ddd;
    const resizeWithoutZoom = devicePixelRatioRound === lastDevicePixelRatio;

    if (resizeWithoutZoom || isDevicePixelRatioDefault || runOnce('init')) {
        const isAboveDesignWidth = windowWidth > relativeDesignWidth;

        if (windowWidth > cutOff) {
            /** 
             * Set the rootElement's font size.
             */
            if (enableScale) {
                rootElement.style.fontSize = (rootFontSize * designWidthRatio * evalDevicePixelRatio).toFixed(6) + 'rem';
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

    // The parameters passed to each callback as an object.
    APIParameters = { clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound, ddd };

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


    // Action onScale during resize without zoom.    
    if (resizeWithoutZoom && hasScaleCallback) {
        onScale(APIParameters);
    }


    // Action onZoom during resize without scale.
    if (!resizeWithoutZoom && hasZoomCallback) {
        onZoom(APIParameters);
    }


    // Action onResize during either zoom or scale.
    if (hasResizeCallback) {
        onResize(APIParameters);
    }


    // Store the last device pixel ratio for future comparision.
    lastDevicePixelRatio = devicePixelRatioRound;
};

export default resizeRootFontSize;
