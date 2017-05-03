const isMobileLikeDeviceTail = () => {
    const widthGreaterThanHeight = window.screen.width > window.screen.height;
    const noInnerDimensions = window.outerWidth === 0 && window.outerHeight === 0;

    const msLandscape = (screen.msOrientation || '').indexOf('landscape') === 0 ? 90 : (screen.msOrientation || '').indexOf('portrait') === 0 ? 0 : false;
    let screenOrientationAngle;
    if (window.screen.orientation !== undefined) {
        screenOrientationAngle = window.screen.orientation.angle;
    }

    const otherOrientation = window.orientation === undefined ? screenOrientationAngle: window.orientation;
    const clientOrientation = msLandscape === false ? otherOrientation : msLandscape;
    const positiveOrientation = Math.abs(clientOrientation);

    const isDeviceMobileLike = (noInnerDimensions || ((!widthGreaterThanHeight && positiveOrientation !== 90) || (widthGreaterThanHeight && positiveOrientation === 90) && devicePixelRatio !== 1) || !widthGreaterThanHeight);

    return isDeviceMobileLike;
}


export default isMobileLikeDeviceTail;
