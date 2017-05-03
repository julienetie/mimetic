import { isFunction } from './utilities';


let callbacksRequireValidation = true;
let hasScaleCallback = false;
let hasZoomCallback = false;
let hasResizeCallback = false;


const setCallbacks = (
    APIParameters,
    isBeyondCutoff,
    resizeWithoutZoom,
    onScale,
    onZoom,
    onResize,
) => {
    // Validates callbacks once.
    if (callbacksRequireValidation) {
        callbacksRequireValidation = false;
        hasScaleCallback = isFunction(onScale);
        hasZoomCallback = isFunction(onZoom);
        hasResizeCallback = isFunction(onResize);
    }


    // Action onScale during resize without zoom.
    if (resizeWithoutZoom && hasScaleCallback) {
        onScale(APIParameters);
    }


    // Action onZoom during resize without scale.
    if (!resizeWithoutZoom && hasZoomCallback) {
        onZoom(APIParameters);
    }


    // Action onResize during either zoom or scale.
    if (hasResizeCallback) {
        onResize(APIParameters);
    }
};

export default setCallbacks;
