/**
 * Sets up intializeMimetic via partial application.
 * @param {Function} getRootElement - Gets the root font element.
 * @param {Function} getRootREMValue - Gets the root font-size in REM units.
 * @param {Function} CSSUnitsToPixels - Converts any CSS units to pixels.
 * @param {Function} setRootFontSize - Sets the new root font size.
 * @param {Function} resizilla - Calls handler on window resize and orientationchange events.
 */
function initializeMimeticPartial(
    getRootElement,
    getRootREMValue,
    CSSUnitsToPixels,
    setRootFontSize,
    resizilla
) {
    // A resize object to store MIMETIC's resizilla's requirements.
    var resize = {};


    /**
     * The intializeMimetic function.
     * @param {object} config - The API parameters.
     */
    function initalizeMimeticFinal(config) {
        // Destructured API parameters.
        const { loadEvent, mobileWidth, rootSelector, scaleDelay, cutOffWidth, lateDetectionDelay } = config;


        // Store the scaleDelay for kill and revive.
        resize.scaleDelay = scaleDelay;


        // The root font element.
        const rootElement = getRootElement(rootSelector);


        // The intial root font size.
        const rootFontSize = getRootREMValue(document);


        // mobileWidth in pixels.
        const mobileWidthPX = CSSUnitsToPixels(mobileWidth);


        // Cut off width in pixels.
        const cutOffWidthPX = CSSUnitsToPixels(cutOffWidth);


        // Provide parameters to setRootFontSize. @TODO remove config, only use what is needed.
        const settings = Object.assign({
            initialOuterHeight: window.outerHeight,
            initialOuterWidth: window.outerWidth,
            rootFontSize,
            rootElement,
            mobileWidthPX,
            cutOffWidthPX
        }, config);


        // Store the settings for kill and revive. 
        resize.settings = settings;


        // Immediately set the root font size according to MIMETIC.
        const setRootFontSizeScope = () => setRootFontSize(settings);

        setRootFontSizeScope();

        // On window resize set the root font size according to MIMETIC.
        resize.resizilla = resizilla(() => {
            setRootFontSize(settings, setRootFontSizeScope);
        }, scaleDelay, false);
    }

    /** 
     * Remove both event listeners set via resizilla.
     */
    initalizeMimeticFinal.prototype.kill = function() {
        resize.resizilla.destroy();
    }

    /** 
     * Re-instate resizilla.
     */
    initalizeMimeticFinal.prototype.revive = function() {
        resize.resizilla = resizilla(() => {
            setRootFontSize(resize.settings, setRootFontSizeScope);
        }, resize.scaleDelay, false);
    }

    // Return as intializeMimetic.
    return initalizeMimeticFinal;
}


export default initializeMimeticPartial;
