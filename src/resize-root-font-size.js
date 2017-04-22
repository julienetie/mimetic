import mutateRootFontSize from './mutate-root-font-size';
import setCallbacks from './set-callbacks';


let lastDevicePixelRatio;
let setRootFontSizeTimeoutId;
let lastOuterWidth;
/** 
 * Calculate and apply the new font size to the root element.
 */
const resizeRootFontSize = (settings, setRootFontSizeTail) => {
    const {
        innerWidth,
        outerWidth,
        relativeDesignWidth,
        cutOff,
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

    // Assigns lastOuterWidth with an inital value, never expected to be zero.
    if (!lastOuterWidth) {
        lastOuterWidth = outerWidth;
    }

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

    const isAboveDesignWidth = innerWidth > relativeDesignWidth;

    const isBeyondCutoff = innerWidth > cutOff;

    const rootFontSizeFinal = rootFontSize * designWidthRatio * evalDPR;

    const hasScaledOrDPRIsDefault = resizeWithoutZoom || isDevicePixelRatioDefault;


    mutateRootFontSize(
        rootFontSizeFinal,
        resizeWithoutZoom,
        hasScaledOrDPRIsDefault,
        isDevicePixelRatioDefault,
        isAboveDesignWidth,
        isBeyondCutoff,
        enableScale
    );


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
    const APIParameters = {
        viewportWidth,
        innerWidth,
        evalDPR,
        calculatedDPR,
        normalizedDPR
    };


    setCallbacks(
        APIParameters,
        isBeyondCutoff,
        resizeWithoutZoom,
        onScale,
        onZoom,
        onResize
    );

    // Store the last device pixel ratio for future comparision.
    lastDevicePixelRatio = calculatedDPR;

    // Re-assign the lastOuterWidth.
    lastOuterWidth = outerWidth;
};

export default resizeRootFontSize;
