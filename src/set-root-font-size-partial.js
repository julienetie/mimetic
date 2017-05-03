/**
 * Set Root Font Size.
 */
const setRootFontSizePartial = (resizeRootFontSize) => {
    const windowRef = window;
    const documentRef = windowRef.document;
    let lastOuterWidth;


    return ({
        rootFontSize,
        initialOuterWidth,
        relativeDesignWidth,
        preserveDevicePixelRatio,
        onScale,
        onZoom,
        onResize,
        enableScale,
        lateDetectionDelay,
        mediaQueryCutOff,
        deviceSplitting,
    }, setRootFontSize) => {
        // Real time DOM measurments.
        const innerWidth = windowRef.innerWidth;
        const outerWidth = windowRef.outerWidth;
        const clientWidth = documentRef.documentElement.clientWidth;
        const DPR = windowRef.devicePixelRatio;

        // Ratio between the outer and client width.
        const outerClientRatio = outerWidth / clientWidth;

        // A calulated DPR within the proximity of 0.05. for devices (eg.safari)
        // that have a fixed DPR.
        // @TODO check on large display devices with DPRs greater than 1.
        const OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95
        ? 1 : outerClientRatio;

        // A calculated DPR safe for safari browsers.
        const safariSafeDPR = Number((OCRProximity).toFixed(5));

        // Legacy internet explorer devicePixelRatio.
        const IEDPR = Number(windowRef.screen.deviceXDPI / windowRef.screen.logicalXDPI);

        // The devicePixelRatio with polyfilled support.
        const alt = DPR === 1 ? safariSafeDPR : DPR;
        const calculatedDPR = Math.abs(IEDPR || alt);

        // The real viewport width.
        const viewportWidth = parseInt(clientWidth * calculatedDPR, 10);

        // The default device pixel ratio.
        const defaultDPR = Math.round(clientWidth * (calculatedDPR / outerWidth));


        /**
         * Set variable inital values if not yet set.
         */
        if (lastOuterWidth === undefined) {
            lastOuterWidth = initialOuterWidth;
        }


        /**
         * The window width compared to the design width.
         */
        const designWidthRatio = innerWidth / relativeDesignWidth;


        /**
         * Mutate on next available frame.
         */
        resizeRootFontSize({
            innerWidth,
            outerWidth,
            relativeDesignWidth,
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
            lateDetectionDelay,
            mediaQueryCutOff,
            deviceSplitting,
        }, setRootFontSize);

        /**
         * Updated Outer browser dimensions.
         */
        lastOuterWidth = outerWidth;
    };
};


export default setRootFontSizePartial;
