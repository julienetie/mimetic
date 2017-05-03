/*           _.-~-.
           7''  Q..\
        _7         (_
      _7  _/    _q.  /
    _7 . ___  /VVvv-'_                                            .
   7/ / /~- \_\\      '-._     .-'                      /       //
  ./ ( /-~-/  ||'=.__  '::. '-~'' {             ___   /  //     ./{
 V   V-~-~|   ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /
  VV/-~-~-|  / \ .'__'. '.  '::  ____               _ _ _        ''.
  / /~~~~||  VVV/ /  \ )  \     |  _ \ ___  ___(_)___(_) | | __ _   .::'
 / (~-~-~\\.-' /    \'   \::::. | |_) / _ \/ __| |_  / | | |/ _` | :::'
/..\    /..\__/      '     '::: |  _ <  __/\__ \ |/ /| | | | (_| | ::'
vVVv    vVVv                 ': |_| \_\___||___/_/___|_|_|_|\__,_| ''
*/
/*
 Version: 0.9.2
 Description: A Better Window Resize
 Author: Julien Etienne
 Repository: https://github.com/julienetie/resizilla
*/

/**
 * request-frame-modern - Optimal requestAnimationFrame & cancelAnimationFrame polyfill for modern development
 * @version v2.0.3
 * @license MIT
 * Copyright Julien Etienne 2015 All Rights Reserved.
 */
// Initial time of the timing lapse.
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

/**
 * Debounce a function call during repetiton.
 * @param {Function}  callback - Callback function.
 * @param {Number}    delay    - Delay in milliseconds.
 * @param {Boolean}   lead  - Leading or trailing.
 * @return {Function} - The debounce function. 
 */
function debounce(callback, delay, lead) {
    var debounceRange = 0;
    var currentTime;
    var lastCall;
    var setDelay;
    var timeoutId;

    const call = parameters => {
        callback(parameters);
    };

    return parameters => {
        if (lead) {
            currentTime = Date.now();
            if (currentTime > debounceRange) {
                callback(parameters);
            }
            debounceRange = currentTime + delay;
        } else {
            /**
             * setTimeout is only used with the trail option.
             */
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                call(parameters);
            }, delay);
        }
    };
}

const objectAssignPolyfill = () => {
    if (typeof Object.assign != 'function') {
        (function () {
            Object.assign = function (target) {
                'use strict';
                // We must check against these specific cases.

                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var output = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source !== undefined && source !== null) {
                        for (var nextKey in source) {
                            if (source.hasOwnProperty(nextKey)) {
                                output[nextKey] = source[nextKey];
                            }
                        }
                    }
                }
                return output;
            };
        })();
    }
};

// Add the Object.assign polyfill.
objectAssignPolyfill();

// Obtains the window or global according to the environment.
const windowGlobal = typeof window !== 'undefined' ? window : typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global;

// A list of option names to make naming and renaming simple.
const optionNames = 'handler,delay,incept,useCapture,orientationchange'.split(',');

// Default options that correspond with the optionNames.
const defaults = [() => {}, 16, false, false, true];

/** 
 * Each option name is paired with the option value
 * @return {Object}
 */
const convertPairsToLiterals = (value, i) => ({
    [optionNames[i]]: value });

/** 
 * Adds the window event with the provided options.
 * Returns the same handler for removeEventListeners.
 * @return {Function}
 */
const addWindowEvent = (handler, delay, incept, windowObject, useCapture) => {
    const debounced = debounce(handler, delay, incept);
    windowObject.addEventListener('resize', debounced, useCapture);
    return debounced;
};

const destroyPartial = (directHandler, useCapture, windowObject) => {
    const destroyAPI = type => {
        if (!type || type === 'all') {
            // Remove both event listeners.
            windowObject.removeEventListener('resize', directHandler, useCapture);
            windowObject.removeEventListener('orientationchange', directHandler, useCapture);
        } else {
            // Remove specific event listener.
            windowObject.removeEventListener(type, directHandler, useCapture);
        }
    };
    return destroyAPI;
};

/** 
 * Partially apply variables as defaults
 * @param {Array} defaults - Array of consecutive defaults.
 * @param {object} windowObject -  The window | global object.
 */
const resizillaPartial = (defaults, windowObject) => {

    /** 
     * The API
     * @param {Function} handler - The callback to execute on resize
     * @param {Number} delay - Debounce delay in milliseconds
     * @param {Boolean} incept - Debounce style
     * @param {Boolean} useCapture - Bubbling/ capture options for events
     * @param {Boolean} orientationChange - respond on orientation change
     */
    return function resizillaFinal(...APIParameters) {

        // The unchosen excess defaults.
        const excessDefaults = defaults.slice(APIParameters.length, defaults.length);

        // Concatenate the API options with the excess defaults.
        const optionValues = [...APIParameters, ...excessDefaults];

        // Final options as an object.
        const mergedOptions = Object.assign(...optionValues.map(convertPairsToLiterals));

        // Destructured options.
        const {
            handler,
            delay,
            incept,
            useCapture,
            orientationChange
        } = mergedOptions;

        // A direct reference to the added handler.
        const directHandler = addWindowEvent(handler, delay, incept, windowObject, useCapture);

        // Adds orientationchange event if required.
        if (orientationChange) {
            windowObject.addEventListener('orientationchange', directHandler, useCapture);
        }

        // Returns an destroyAPI method to remove event listeners.
        return {
            destroy: destroyPartial(directHandler, useCapture, windowObject)
        };
    };
};

// Creates the Resizilla function.
const resizilla = resizillaPartial(defaults, windowGlobal);

const objectAssignPolyfill$1 = () => {
    if (typeof Object.assign != 'function') {
        (function () {
            Object.assign = function (target) {
                'use strict';
                // We must check against these specific cases.

                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var output = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source !== undefined && source !== null) {
                        for (var nextKey in source) {
                            if (source.hasOwnProperty(nextKey)) {
                                output[nextKey] = source[nextKey];
                            }
                        }
                    }
                }
                return output;
            };
        })();
    }
};

const objectFreezePolyfill = () => {
    /** 
     * Object.freeze polyfill
     * ES5 15.2.3.9
     * {@link http://es5.github.com/#x15.2.3.9}
     */
    if (!Object.freeze) {
        Object.freeze = function freeze(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.freeze can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }
};

/**
 * Sets up intializeMimetic via partial application.
 * @param {Function} document.
 * @param {Function} getRootREMValue - Gets the root font-size in REM units.
 * @param {Function} CSSUnitsToPixels - Converts any CSS units to pixels.
 * @param {Function} setRootFontSize - Sets the new root font size.
 * @param {Function} resizilla - Calls handler on window resize and orientationchange events.
 */
function initializeMimeticPartial(document, getRootREMValue,
// CSSUnitsToPixels,
setRootFontSize, resizilla) {
    // A resize object to store MIMETIC's resizilla's requirements.
    const resize = {};

    /**
     * The intializeMimetic function.
     * @param {object} config - The API parameters.
     */
    function initalizeMimeticFinal(config) {
        // Destructured API parameters.
        const {
            scaleDelay
        } = config;

        // Store the scaleDelay for kill and revive.
        resize.scaleDelay = scaleDelay;

        // The intial root font size.
        const rootFontSize = getRootREMValue(document);

        // // mobileWidth in pixels.
        // const mobileWidthPX = CSSUnitsToPixels(mobileWidth);


        // Cut off width in pixels.
        // const cutOffWidthPX = CSSUnitsToPixels(cutOffWidth);


        // Provide parameters to setRootFontSize. @TODO remove config, only use what is needed.
        const settings = Object.assign({
            initialOuterHeight: window.outerHeight,
            initialOuterWidth: window.outerWidth,
            rootFontSize
        }, config);

        // Store the settings for kill and revive.
        resize.settings = settings;

        // Immediately set the root font size according to MIMETIC.
        const setRootFontSizeScope = () => setRootFontSize(settings);
        resize.setRootFontSizeScope = setRootFontSizeScope;
        setRootFontSizeScope();

        // On window resize set the root font size according to MIMETIC.
        resize.resizilla = resizilla(() => {
            setRootFontSize(settings, setRootFontSizeScope);
        }, scaleDelay, false);
    }

    /**
     * Remove both event listeners set via resizilla.
     */
    initalizeMimeticFinal.prototype.kill = () => resize.resizilla.destroy();

    /**
     * Re-instate resizilla.
     */
    initalizeMimeticFinal.prototype.revive = function revive() {
        resize.resizilla = resizilla(() => {
            setRootFontSize(resize.settings, resize.setRootFontSizeScope);
        }, resize.scaleDelay, false);
    };

    return initalizeMimeticFinal;
}

/**
 * Set Root Font Size.
 */
const setRootFontSizePartial = resizeRootFontSize => {
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
        deviceSplitting
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
        const OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95 ? 1 : outerClientRatio;

        // A calculated DPR safe for safari browsers.
        const safariSafeDPR = Number(OCRProximity.toFixed(5));

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
            deviceSplitting
        }, setRootFontSize);

        /**
         * Updated Outer browser dimensions.
         */
        lastOuterWidth = outerWidth;
    };
};

let renderOnce = true;

/**
 * Directly mutates the root font size of a given Element.
 * @param
 */
const mutateRootFontSizePartial = rootElement => (rootFontSizeFinal, resizeWithoutZoom, hasScaledOrDPRIsDefault, isBeyondCutoff, enableScale, isMobileLikeDevice) => {
    if (resizeWithoutZoom || renderOnce) {
        if (hasScaledOrDPRIsDefault || renderOnce) {
            if (isBeyondCutoff || renderOnce) {
                if (isBeyondCutoff && enableScale && !isMobileLikeDevice) {
                    // eslint-disable-next-line
                    console.log('RENDERED');
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

/**
 * Default config properties if not defined.
 */
const defaults$1 = {
  loadEvent: 'DOMContentLoaded', // Load type
  scaleDelay: 16, // Miliseconds between calls on resize.
  preserveDevicePixelRatio: false, // Preserve the device pixel ratio on zoom.
  rootSelector: 'html', // Use the HTML element as the root element.
  onScale: undefined,
  onZoom: undefined,
  onResize: undefined,
  // cutOffWidth: 0, // The minimum width to disable resizing.
  relativeDesignWidth: 1024, // The width relative to the font size.
  enableScale: true,
  /**
   * This is important particularly when users maximises and reverts the browser
   * window. This delay determines the debounce threshold but also the trailing
   * edge call.
   */
  lateDetectionDelay: 500,
  mediaQueryCutOff: '(min-width: 40.063em)',
  /**
   * This is an experimental feature that will only activate MIMETIC for
   * non-mobile-like devices. There fore media queries for max & min width and height
   * will behave similarly to the depreciated max | min device-width / device-height
   * without the use of the depreciated syntax.
   */
  deviceSplitting: false
};

const windowRef = window;
const documentRef = windowRef.document;

// Checks if string or number is a number.


// A very simple compose function.
const basicCompose = (a, b) => c => a(b(c));

// converts pixels to REM values.
const pxToRem = fontSizePx => parseInt(fontSizePx, 10) / 16;

// Is Function.
const isFunction = value => typeof value === 'function';

// Gets the element's root font size.
const getFontSize = element => windowRef.getComputedStyle(element.documentElement, null).getPropertyValue('font-size');

// Gets the root element.
const getRootElement = element => {
    const elements = {
        html: parent => parent.documentElement,
        body: parent => parent.body
    };

    if (element instanceof windowRef.Element) {
        if (element.nodeType === 1) {
            return element;
        }
        throw new Error('rootElement is not a valid element');
    }
    return elements[element] ? elements[element](documentRef) : documentRef.querySelector(element);
};

const { rootSelector } = defaults$1;

// The root font element.
const rootElement = getRootElement(rootSelector);

/**
 * Mutate root font size with pre-sets.
 * @param {HTMLElement} rootElement - Root element option.
 * @param {Boolean} rootElement - Enable scale option.
 * @return {Function} mutateRootFontSize.
 */
const mutateRootFontSize = mutateRootFontSizePartial(rootElement);

let callbacksRequireValidation = true;
let hasScaleCallback = false;
let hasZoomCallback = false;
let hasResizeCallback = false;

const setCallbacks = (APIParameters, isBeyondCutoff, resizeWithoutZoom, onScale, onZoom, onResize) => {
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

const isMobileLikeDeviceTail = () => {
    const widthGreaterThanHeight = window.screen.width > window.screen.height;
    const noInnerDimensions = window.outerWidth === 0 && window.outerHeight === 0;
    const isPortrait = (window.screen.msOrientation || '').indexOf('portrait') === 0 ? 0 : false;
    const msLandscape = (window.screen.msOrientation || '').indexOf('landscape') === 0 ? 90 : isPortrait;
    let screenOrientationAngle;

    if (window.screen.orientation !== undefined) {
        screenOrientationAngle = window.screen.orientation.angle;
    }

    const otherOrientation = window.orientation === undefined ? screenOrientationAngle : window.orientation;
    const clientOrientation = msLandscape === false ? otherOrientation : msLandscape;
    const positiveOrientation = Math.abs(clientOrientation);
    const portraitCheck = !widthGreaterThanHeight && positiveOrientation !== 90;
    const landscapeCheck = widthGreaterThanHeight && positiveOrientation === 90;
    const angleChek = portraitCheck || landscapeCheck && window.devicePixelRatio !== 1;
    const isDeviceMobileLike = noInnerDimensions || angleChek || !widthGreaterThanHeight;

    return isDeviceMobileLike;
};

let lastDevicePixelRatio;
let setRootFontSizeTimeoutId;
let lastOuterWidth;
let isMobileLikeDevice;
let lastScreenWidth;
/**
 * Calculate and apply the new font size to the root element.
 */
const resizeRootFontSize = (settings, setRootFontSizeTail) => {
    const {
        innerWidth,
        outerWidth,
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
        deviceSplitting
    } = settings;

    // Assigns lastOuterWidth with an inital value, never expected to be zero.
    if (!lastOuterWidth) {
        lastOuterWidth = outerWidth;
    }

    // Current screen width.
    const screenWidth = window.screen.width;

    // Calculates the devicePixelRatio as if the default was 1.
    const normalizedDPR = 1 / defaultDPR * calculatedDPR;

    // The preserved or non-preserved DPR via API settings.
    const evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR;

    // Truthy if the browser is resized without being zoomed.
    const resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio;

    // Check to see if the window is at the default zoom level.
    const isDevicePixelRatioDefault = defaultDPR === calculatedDPR;

    // Determine if the resize event was last with or without zoom.
    const resizeWithoutZoom2 = outerWidth === lastOuterWidth;

    const rootFontSizeFinal = rootFontSize * designWidthRatio * evalDPR;

    const hasScaledOrDPRIsDefault = resizeWithoutZoom || isDevicePixelRatioDefault;

    const isBeyondCutoff = deviceSplitting ? true : window.matchMedia(mediaQueryCutOff).matches;

    if (lastScreenWidth === undefined) {
        lastScreenWidth = screenWidth;
    }

    if (screenWidth !== lastScreenWidth || isMobileLikeDevice === undefined) {
        isMobileLikeDevice = isMobileLikeDeviceTail();
    }

    mutateRootFontSize(rootFontSizeFinal, resizeWithoutZoom, hasScaledOrDPRIsDefault, isBeyondCutoff, enableScale, isMobileLikeDevice);

    clearTimeout(setRootFontSizeTimeoutId);

    if (resizeWithoutZoom2) {
        // setRootFontSizeTail to be independently conditional.
        if (setRootFontSizeTail) {
            setRootFontSizeTimeoutId = setTimeout(() => {
                setRootFontSizeTail();
                setRootFontSizeTail();
            }, lateDetectionDelay);
        }
    }

    // The parameters passed to each callback as an object.
    const APIParameters = {
        viewportWidth,
        innerWidth,
        evalDPR,
        calculatedDPR,
        normalizedDPR
    };

    setCallbacks(APIParameters, isBeyondCutoff, resizeWithoutZoom, onScale, onZoom, onResize);

    // Store the last device pixel ratio for future comparision.
    lastDevicePixelRatio = calculatedDPR;

    // Re-assign the lastOuterWidth.
    lastOuterWidth = outerWidth;

    // Screen Width
    lastScreenWidth = screenWidth;
};

/**
 * Sets up mimetic via partial application.
 * @param {Function} initializeMimetic - Initalizes MIMETIC function.
 */
const mimeticPartial = (initializeMimetic, defaults) => configurationObj => {
    // Assing configuration as an object.
    const configuration = configurationObj || {};

    // Merge configuration into defaults.
    const overriddenDefaults = Object.assign(defaults, configuration);

    // Prevent config mutations.
    const config = Object.freeze(overriddenDefaults);

    // Default load to DOMContentLoaded if not opted.
    const loadEventOption = config.loadEvent === 'load' ? 'load' : 'DOMContentLoaded';

    // Initalize mimetic on load.
    window.addEventListener(loadEventOption, () => initializeMimetic(config));

    // Return kill and revive methods.
    return {
        kill() {
            initializeMimetic.prototype.kill();
        },
        revive() {
            initializeMimetic.prototype.revive();
        }
    };
};

objectAssignPolyfill$1();

// Object Freeze polyfill.
objectFreezePolyfill();

/*
 initializeMimetic initalizes resizilla
 (A window resize plugin) to call setRootFontSize
 on window resize.

 setRootFontSize -> resizeRootFontSize which does
 `rootElement.style.fontSize = 'xrem';`

 This function is initally called on resize.
*/
const setRootFontSize = setRootFontSizePartial(resizeRootFontSize);

// Gets the root element value in REM units.
const getRootREMValue = basicCompose(pxToRem, getFontSize);

/*
 Called initally and on prototype.revivie() to
 setup and implement resizilla's event listeners.

 initalizeMimetic contains a kill method to remove
 resizilla's event listeners and a revive method to
 restart Mimetic's initalization.
*/
const initializeMimetic = initializeMimeticPartial(document, getRootREMValue,
// CSSUnitsToPixels,
setRootFontSize, resizilla);

// The MIMETIC API.
const mimetic = mimeticPartial(initializeMimetic, defaults$1);

export default mimetic;
