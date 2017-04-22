/** 
 * Set Root Font Size.
 */
const setRootFontSizePartial = (resizeRootFontSize) => {
    const windowRef = window;
    const documentRef = windowRef.document;
    let requestId;
    let lastOuterWidth;
    let lastOuterHeight;


    return ({
        rootFontSize,
        initialOuterHeight,
        initialOuterWidth,
        relativeDesignWidth,
        mobileWidth,
        cutOffWidth,
        preserveDevicePixelRatio,
        onScale,
        onZoom,
        onResize,
        enableScale,
        mobileWidthPX,
        cutOffWidthPX,
        lateDetectionDelay
    }, setRootFontSize) => {
        // Real time DOM measurments.
        const innerWidth = windowRef.innerWidth;
        const outerWidth = windowRef.outerWidth;
        const outerHeight = windowRef.outerHeight;
        const clientWidth = documentRef.documentElement.clientWidth;
        const DPR = windowRef.devicePixelRatio;

        // Ratio between the outer and client width.
        const outerClientRatio = outerWidth / clientWidth;

        // A calulated DPR within the proximity of 0.05. for devices (eg.safari) that have a fixed DPR.
        // @TODO check on large display devices with DPRs greater than 1. 
        const OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95 ? 1 : outerClientRatio;

        // A calculated DPR safe for safari browsers.
        const safariSafeDPR = Number((OCRProximity).toFixed(5));

        // Legacy internet explorer devicePixelRatio.
        const IEDPR = Number(screen.deviceXDPI / screen.logicalXDPI);

        // The devicePixelRatio with polyfilled support.
        const calculatedDPR = Math.abs(IEDPR ? IEDPR : DPR === 1 ? safariSafeDPR : DPR);

        // The real viewport width. 
        const viewportWidth = parseInt(clientWidth * calculatedDPR);

        // The default device pixel ratio. 
        const defaultDPR = Math.round(clientWidth * calculatedDPR / outerWidth);


        /** 
         * Set variable inital values if not yet set.
         */
        if (lastOuterWidth === undefined) {
            lastOuterWidth = initialOuterWidth;
            lastOuterHeight = initialOuterHeight;
        }


        /**
         * The window width compared to the design width.
         */
        const designWidthRatio = innerWidth / relativeDesignWidth;


        /** 
         * The minimum veiwport size to not react to.
         */
        const cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;


        /**
         * Mutate on next available frame.
         */
        resizeRootFontSize({
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
        },setRootFontSize);

        /**
         * Updated Outer browser dimensions.
         */
        lastOuterWidth = outerWidth;
        lastOuterHeight = outerWidth;
    }
}


export default setRootFontSizePartial;
