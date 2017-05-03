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
    isMobileLikeDevice,
) => {
    if (resizeWithoutZoom || renderOnce) {
        if (hasScaledOrDPRIsDefault || renderOnce) {
            if (isBeyondCutoff || renderOnce) {
                if (isBeyondCutoff && enableScale && !isMobileLikeDevice) {
                    // eslint-disable-next-line
                    rootElement.style.fontSize = rootFontSizeFinal.toFixed(4) + 'rem';
                    renderOnce = false;
                } else {
                    rootElement.removeAttribute('style');
                }
            } else {
                rootElement.removeAttribute('style');
            }
        } else {
            rootElement.removeAttribute('style');
        }
    }
};


export default mutateRootFontSizePartial;
