import { isCallBackDefined } from './utilities';

let wasLastBeyondMobileWidth = true;
let lastDevicePixelRatio;
let hasScaleCallback = false;
let hasZoomCallback = false;
let hasResizeCallback = false;
let APIParameters;
let callbacksRequireValidation = true;
let initalRenderOnce = true;
let setRootFontSizeTimeoutId;
let lastOuterWidth;
/** 
 * Calculate and apply the new font size to the root element.
 */
const resizeRootFontSize = (settings, setRootFontSizeTail) => {

    const {
        innerWidth,
        outerWidth,
        isDevicePixelRatioDefault,
        relativeDesignWidth,
        cutOff,
        rootElement,
        designWidthRatio,
        calculatedDPR,
        rootFontSize,
        enableScale,
        preserveDevicePixelRatio,
        onScale,
        onZoom,
        onResize,
        viewportWidth,
        defaultDPR,
        lateDetectionDelay
    } = settings;

    // Calculates the devicePixelRatio as if the default was 1.
    const normalizedDPR = (1 / defaultDPR) * calculatedDPR;

    // The preserved or non-preserved DPR via API settings.
    const evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR;

    // Truthy if the browser is resized without being zoomed.
    const resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio;


    // Assigns lastOuterWidth with an inital value, never expected to be zero.
    if (!lastOuterWidth) {
        lastOuterWidth = outerWidth;
    }


    // Determine if the resize event was last with or without zoom.
    const resizeWithoutZoom2 = outerWidth === lastOuterWidth;

    if (resizeWithoutZoom || isDevicePixelRatioDefault || initalRenderOnce) {
        if (initalRenderOnce) {
            initalRenderOnce = false;
        }
        const isAboveDesignWidth = innerWidth > relativeDesignWidth;

        if (innerWidth > cutOff) {
            /** 
             * Set the rootElement's font size.
             */
            if (enableScale) {
                rootElement.style.fontSize = (rootFontSize * designWidthRatio * evalDPR).toFixed(6) + 'rem';
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

    clearTimeout(setRootFontSizeTimeoutId);
    if (resizeWithoutZoom2) {
        // setRootFontSizeTail to be independently conditional.
        if (setRootFontSizeTail) {
            setRootFontSizeTimeoutId = setTimeout(
                () => {
                    setRootFontSizeTail()
                }, lateDetectionDelay
            );
        }
    }


    // The parameters passed to each callback as an object.
    APIParameters = {
        viewportWidth,
        innerWidth,
        evalDPR,
        calculatedDPR,
        normalizedDPR
    };


    // Validates callbacks once.
    if (callbacksRequireValidation && innerWidth > cutOff) {
        callbacksRequireValidation = false;
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
    lastDevicePixelRatio = calculatedDPR;


    lastOuterWidth = outerWidth;
};

export default resizeRootFontSize;
