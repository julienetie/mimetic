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
) => {
    if (hasScaledOrDPRIsDefault || renderOnce) {
        if (isBeyondCutoff || renderOnce) {
            if (isBeyondCutoff && enableScale) {
                console.log('Scaled')
                rootElement.style.fontSize = rootFontSizeFinal.toFixed(4) + 'rem';
            }
            renderOnce = false;
        } else {
            console.log('Removed Scale')
            rootElement.removeAttribute('style');
        }
    }
};


export default mutateRootFontSizePartial;
