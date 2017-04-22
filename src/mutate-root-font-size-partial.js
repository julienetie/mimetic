let wasLastBeyondMobileWidth = true;
let renderOnce;

/** 
 * Directly mutates the root font size of a given Element.
 * @param 
 */
const mutateRootFontSizePartial = (rootElement) => (
    rootFontSizeFinal,
    resizeWithoutZoom,
    hasScaledOrDPRIsDefault,
    isDevicePixelRatioDefault,
    isAboveDesignWidth,
    isBeyondCutoff,
    enableScale
) => {
    if (hasScaledOrDPRIsDefault || renderOnce) {
        if (renderOnce) {
            renderOnce = false;
        }

        if (isBeyondCutoff) {
            // Set the rootElement's font size if scale is enabled.
            if (enableScale) {
                rootElement.style.fontSize = rootFontSizeFinal.toFixed(4) + 'rem';
            }

            // Indicate that the viewport has exceeded the mobileWidth.
            wasLastBeyondMobileWidth = true;
        } else if (wasLastBeyondMobileWidth) {
            /** 
             * Prevent odd behaviour when refreshed.
             * By removing the style attribute once when 
             * within the mobileWidth.
             */
            if (wasLastBeyondMobileWidth) {
                rootElement.removeAttribute('style');
            }

            // Reset as within mobileWidth.
            wasLastBeyondMobileWidth = false;
        }
    }
}


export default mutateRootFontSizePartial;
