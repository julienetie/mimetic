const isMobileLikeDeviceTail = () => {
    const widthGreaterThanHeight = window.screen.width > window.screen.height;
    const noInnerDimensions = window.outerWidth === 0 && window.outerHeight === 0;
    const isPortrait = (window.screen.msOrientation || '').indexOf('portrait') === 0 ? 0 : false;
    const msLandscape = (window.screen.msOrientation || '').indexOf('landscape') === 0 ? 90 : isPortrait;
    let screenOrientationAngle;

    if (window.screen.orientation !== undefined) {
        screenOrientationAngle = window.screen.orientation.angle;
    }

    const otherOrientation = window.orientation === undefined ?
    screenOrientationAngle : window.orientation;
    const clientOrientation = msLandscape === false ? otherOrientation : msLandscape;
    const positiveOrientation = Math.abs(clientOrientation);
    const portraitCheck = (!widthGreaterThanHeight && positiveOrientation !== 90);
    const landscapeCheck = (widthGreaterThanHeight && positiveOrientation === 90);
    const angleChek = (portraitCheck || (landscapeCheck && window.devicePixelRatio !== 1));
    const isDeviceMobileLike = noInnerDimensions || angleChek || !widthGreaterThanHeight;

    return isDeviceMobileLike;
};


export default isMobileLikeDeviceTail;
