let renderOnce = true;


/**
 * Directly mutates the root font size of a given Element.
 * @param
 */
const mutateRootFontSizePartial = rootElement => (
    rootFontSizeFinal,
    resizeWithoutZoom,
    hasScaledOrDPRIsDefault,
    isBeyondCutoff,
    enableScale,
    isMobileLikeDevice
) => {
    if (hasScaledOrDPRIsDefault || renderOnce) {
        if (isBeyondCutoff || renderOnce) {
            if (isBeyondCutoff && enableScale && !isMobileLikeDevice) {
                rootElement.style.fontSize = rootFontSizeFinal.toFixed(4) + 'rem';
            } else {
                rootElement.removeAttribute('style');
            }
            renderOnce = false;
        } else {
            rootElement.removeAttribute('style');
        }
    } else {
        rootElement.removeAttribute('style');
    }
};


export default mutateRootFontSizePartial;
