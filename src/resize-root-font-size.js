import mutateRootFontSize from './mutate-root-font-size';
import setCallbacks from './set-callbacks';
import isMobileLikeDeviceTail from './is-mobile-like-device-tail';
import store from './store.js';

let lastDevicePixelRatio;
let setRootFontSizeTimeoutId;
let lastOuterWidth;
let isMobileLikeDevice;
let lastScreenWidth;
/**
 * Calculate and apply the new font size to the root element.
 */
const resizeRootFontSize = (setRootFontSizeTail) => {
    const {
        innerWidth,
        outerWidth,
        designWidthRatio,
        calculatedDPR,
        enableScale,
        preserveDevicePixelRatio,
        onScale,
        onZoom,
        onResize,
        viewportWidth,
        defaultDPR,
        lateDetectionDelay,
        mediaQueryCutOff,
        deviceSplitting,
    } = store.resizeSettings;

    // Assigns lastOuterWidth with an inital value, never expected to be zero.
    if (!lastOuterWidth) {
        lastOuterWidth = outerWidth;
    }

    // Current screen width.
    const screenWidth = window.screen.width;

    // Calculates the devicePixelRatio as if the default was 1.
    const normalizedDPR = (1 / defaultDPR) * calculatedDPR;

    // The preserved or non-preserved DPR via API settings.
    const evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR;

    // Truthy if the browser is resized without being zoomed.
    const resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio;

    // Check to see if the window is at the default zoom level.
    const isDevicePixelRatioDefault = defaultDPR === calculatedDPR;

    // Determine if the resize event was last with or without zoom.
    const resizeWithoutZoom2 = outerWidth === lastOuterWidth;

    const rootFontSizeFinal = store.rootFontSize * designWidthRatio * evalDPR;

    const hasScaledOrDPRIsDefault = resizeWithoutZoom || isDevicePixelRatioDefault;

    const isBeyondCutoff = deviceSplitting ? true : window.matchMedia(mediaQueryCutOff).matches;

    if (lastScreenWidth === undefined) {
        lastScreenWidth = screenWidth;
    }


    if (screenWidth !== lastScreenWidth || isMobileLikeDevice === undefined) {
        isMobileLikeDevice = isMobileLikeDeviceTail();
    }

    mutateRootFontSize(
        rootFontSizeFinal,
        resizeWithoutZoom,
        hasScaledOrDPRIsDefault,
        isBeyondCutoff,
        enableScale,
        isMobileLikeDevice,
    );


    clearTimeout(setRootFontSizeTimeoutId);


    if (resizeWithoutZoom2) {
        // setRootFontSizeTail to be independently conditional.
        if (setRootFontSizeTail) {
            setRootFontSizeTimeoutId = setTimeout(
                () => {
                    setRootFontSizeTail();
                    setRootFontSizeTail();
                }, lateDetectionDelay,
            );
        }
    }


    // The parameters passed to each callback as an object.
    const APIParameters = {
        viewportWidth,
        innerWidth,
        evalDPR,
        calculatedDPR,
        normalizedDPR,
    };


    setCallbacks(
        APIParameters,
        isBeyondCutoff,
        resizeWithoutZoom,
        onScale,
        onZoom,
        onResize,
    );

    // Store the last device pixel ratio for future comparision.
    lastDevicePixelRatio = calculatedDPR;

    // Re-assign the lastOuterWidth.
    lastOuterWidth = outerWidth;

    // Screen Width
    lastScreenWidth = screenWidth;
};


export default resizeRootFontSize;
