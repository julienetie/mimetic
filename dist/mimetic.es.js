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
 * CSS Fixed units with pixel values.
 */
const CSSFixedUnits = [{
    unit: 'xx-small',
    // 9 / 16
    PXValue: 9
}, {
    unit: 'x-small',
    // 10 / 16
    PXValue: 10
}, {
    unit: 'small',
    // 13 / 16
    PXValue: 13
}, {
    unit: 'normal',
    // 16 / 16
    PXValue: 16
}, {
    unit: 'medium',
    // 16 / 16
    PXValue: 16
}, {
    unit: 'large',
    // 18 / 16
    PXValue: 18
}, {
    unit: 'x-large',
    // 24 / 16
    PXValue: 24
}, {
    unit: 'xx-large',
    // 32 / 16
    PXValue: 32
}];

/** 
 * CSS Units with pixel factor.
 */
const CSSUnits = [{
    unit: 'px',
    //  1 / 16
    PXFactor: 1
}, {
    unit: 'pt',
    // 96 / 72 / 16
    PXFactor: 1.33333333328
}, {
    unit: 'em',
    // 1
    PXFactor: 16
}, {
    unit: 'rem',
    // 1
    PXFactor: 16
}, {
    unit: 'cm',
    // ???
    PXFactor: 16
}, {
    unit: 'q',
    // ???
    PXFactor: 16
}, {
    unit: 'in',
    // ???
    PXFactor: 16
}, {
    unit: 'pc',
    // 96 / 72 / 12 / 16
    PXFactor: 0.11111111104
}, {
    unit: 'ex',
    // ???
    PXFactor: 16
}, {
    unit: 'ch',
    // ???
    PXFactor: 16
}, {
    unit: 'vw',
    // Needs override.
    PXFactor: 16
}, {
    unit: 'vh',
    // Needs override.
    PXFactor: 16
}, {
    unit: 'vmin',
    // Needs override.
    PXFactor: 16
}, {
    unit: 'vmax',
    // Needs override.
    PXFactor: 16
}];

// Checks if string or number is a number.
const isNumber = value => Number(value) === value;

// A very simple compose function.
const basicCompose = (a, b) => {
    return function (c) {
        return a(b(c));
    };
};

// converts pixels to REM values.
const pxToRem = fontSizePx => parseInt(fontSizePx) / 16;

// Checks callback type.
const isCallBackDefined = callback => typeof callback === 'function';

// Gets the element's root font size.
const getFontSize = element => window.getComputedStyle(element.documentElement, null).getPropertyValue('font-size');

// Gets the root element.
const getRootElement = element => {
    const elements = {
        html: parent => parent.documentElement,
        body: parent => parent.body
    };

    if (element instanceof Element) {
        if (element.nodeType === 1) {
            return element;
        } else {
            // @TODO Throw new error.
        }
    }
    return elements.hasOwnProperty(element) ? elements[element](document) : document.querySelector(element);
};

const aliasValueToPX = value => {
    return CSSFixedUnits.filter(function (metricInfo) {
        return value === metricInfo.unit;
    }).shift().PXValue;
};

const CSSUnitsToPixels = value => {

    if (isNumber(value)) {
        return value;
    }

    const suffix = value.replace(/[^a-z]+/gi, '');
    const numberValue = value.replace(/[^\d\.]*/g, '');

    const metricInfo = CSSUnits.filter(function (metricInfo) {
        return suffix === metricInfo.unit;
    }).shift();

    const PXValue = metricInfo ? numberValue * metricInfo.PXFactor : aliasValueToPX(value);

    return parseInt(PXValue);
};

/**
 * Sets up intializeMimetic via partial application.
 * @param {Function} getRootElement - Gets the root font element.
 * @param {Function} getRootREMValue - Gets the root font-size in REM units.
 * @param {Function} CSSUnitsToPixels - Converts any CSS units to pixels.
 * @param {Function} setRootFontSize - Sets the new root font size.
 * @param {Function} resizilla - Calls handler on window resize and orientationchange events.
 */
function initializeMimeticPartial(getRootElement, getRootREMValue, CSSUnitsToPixels, setRootFontSize, resizilla) {
    // A resize object to store MIMETIC's resizilla's requirements.
    var resize = {};

    /**
     * The intializeMimetic function.
     * @param {object} config - The API parameters.
     */
    function initalizeMimeticFinal(config) {
        // Destructured API parameters.
        const { loadEvent, mobileWidth, rootSelector, scaleDelay, cutOffWidth } = config;

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
            rootElementStyle: rootElement.style,
            window,
            mobileWidthPX,
            cutOffWidthPX
        }, config);

        // Store the settings for kill and revive. 
        resize.settings = settings;

        // Immediately set the root font size according to MIMETIC.
        setRootFontSize(settings);

        // On window resize set the root font size according to MIMETIC.
        resize.resizilla = resizilla(() => {
            setRootFontSize(settings);
        }, scaleDelay, false);
    }

    /** 
     * Remove both event listeners set via resizilla.
     */
    initalizeMimeticFinal.prototype.kill = function () {
        resize.resizilla.destroy();
    };

    /** 
     * Re-instate resizilla.
     */
    initalizeMimeticFinal.prototype.revive = function () {
        resize.resizilla = resizilla(() => {
            setRootFontSize(resize.settings);
        }, resize.scaleDelay, false);
    };

    // Return as intializeMimetic.
    return initalizeMimeticFinal;
}

/** 
 * Set Root Font Size.
 */
const setRootFontSizePartial = resizeRootFontSize => {
  let requestId;
  let outerWidth;
  let outerHeight;
  const windowRef = window;
  const documentRef = windowRef.document;
  return settings => {
    /** 
     * Destructured settings.
     */
    const {
      rootElement,
      rootFontSize,
      initialOuterHeight,
      initialOuterWidth,
      relativeDesignWidth,
      mobileWidth,
      cutOffWidth,
      enableScale,
      preserveDevicePixelRatio,
      onScale,
      onZoom,
      onResize,
      mobileWidthPX,
      cutOffWidthPX
    } = settings;

    /** 
     * Get Real time values.
     */
    const windowWidth = windowRef.innerWidth;
    const windowOuterWidth = windowRef.outerWidth;
    const windowOuterHeight = windowRef.outerHeight;
    const cliWidth = documentRef.documentElement.clientWidth;
    const outerPerClient = windowOuterWidth / cliWidth;
    const opcR = outerPerClient < 1.05 && outerPerClient > 0.95 ? 1 : outerPerClient;
    const safarIDPR = Number(opcR.toFixed(5));
    const safarIDPRRounded = Number(safarIDPR.toFixed(1));
    const iEDPR = Number(screen.deviceXDPI / screen.logicalXDPI);
    const devicePixelRatioRound = Math.abs(iEDPR ? iEDPR : devicePixelRatio === 1 ? safarIDPR : devicePixelRatio);
    const windowResize = windowOuterWidth !== outerWidth && windowOuterHeight !== outerHeight;
    const clientWidth = parseInt(cliWidth * devicePixelRatioRound);
    const defaultDevicePixelRatio = Math.round(cliWidth * devicePixelRatioRound / windowOuterWidth);

    /** 
     * Set variable inital values if not yet set.
     */
    if (outerWidth === undefined) {
      outerWidth = initialOuterWidth;
      outerHeight = initialOuterHeight;
    }

    /**
     * The window width compared to the design width.
     */
    const designWidthRatio = windowWidth / relativeDesignWidth;

    /**
     * Check to see if the window is at the default zoom level.
     */
    const isDevicePixelRatioDefault = defaultDevicePixelRatio === devicePixelRatioRound;

    /** 
     * The minimum veiwport size to not react to.
     */
    const cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;

    /**
     * Mutate on next available frame.
     */
    resizeRootFontSize({
      windowWidth,
      windowOuterWidth,
      isDevicePixelRatioDefault,
      relativeDesignWidth,
      cutOff,
      rootElement,
      designWidthRatio,
      devicePixelRatioRound,
      rootFontSize,
      enableScale,
      preserveDevicePixelRatio,
      onScale,
      onZoom,
      onResize,
      clientWidth,
      defaultDevicePixelRatio
    });

    /**
     * Updated Outer browser dimensions.
     */
    outerWidth = windowOuterWidth;
    outerHeight = windowOuterWidth;
  };
};

/**
 * Pass a condition once with a given reference.
 * @param {string} reference - A unique reference per conditon.
 * @return {Boolean}
 */
function once(reference) {
    if (!once.prototype.references) {
        once.prototype.references = {};
    }
    // Store reference if dosen't exist.
    if (!once.prototype.references.hasOwnProperty(reference)) {
        once.prototype.references[reference] = null;
        return true;
    } else {
        return false;
    }
}

/** 
 * Calculate and apply the new font size to the root element.
 */
let wasLastBeyondMobileWidth = true;
let lastDevicePixelRatio;
let hasScaleCallback = false;
let hasZoomCallback = false;
let hasResizeCallback = false;
let APIParameters;
const resizeRootFontSize = ({
    windowWidth,
    windowOuterWidth,
    isDevicePixelRatioDefault,
    relativeDesignWidth,
    cutOff,
    rootElement,
    designWidthRatio,
    devicePixelRatioRound,
    rootFontSize,
    enableScale,
    preserveDevicePixelRatio,
    onScale,
    onZoom,
    onResize,
    clientWidth,
    defaultDevicePixelRatio
}) => {

    /** 
     * Evaluated devicePixelRatio
     */
    const ddd = 1 / defaultDevicePixelRatio * devicePixelRatioRound;
    const evalDevicePixelRatio = preserveDevicePixelRatio ? devicePixelRatioRound : ddd;
    const resizeWithoutZoom = devicePixelRatioRound === lastDevicePixelRatio;

    if (resizeWithoutZoom || isDevicePixelRatioDefault || once('init')) {
        const isAboveDesignWidth = windowWidth > relativeDesignWidth;

        if (windowWidth > cutOff) {
            /** 
             * Set the rootElement's font size.
             */
            if (enableScale) {
                rootElement.style.fontSize = (rootFontSize * designWidthRatio * evalDevicePixelRatio).toFixed(6) + 'rem';
            }

            /** 
             * Indicate that the viewport has exceeded the mobileWidth.
             */
            wasLastBeyondMobileWidth = true;
        } else if (wasLastBeyondMobileWidth) {
            /** 
             * Prevent odd behaviour when refreshed.
             * By removing the style attribute once when 
             * within the mobileWidth.
             */
            if (wasLastBeyondMobileWidth) {
                rootElement.removeAttribute("style");
            }
            /** 
             * Reset as within mobileWidth.
             */
            wasLastBeyondMobileWidth = false;
        }
    }

    // The parameters passed to each callback as an object.
    APIParameters = { clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound, ddd };

    /** 
     * Callbacks.
     */
    if (once('callbacks') && windowWidth > cutOff) {
        /** 
         * Validates callbacks once.
         */
        hasScaleCallback = isCallBackDefined(onScale);
        hasZoomCallback = isCallBackDefined(onZoom);
        hasResizeCallback = isCallBackDefined(onResize);
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

    // Store the last device pixel ratio for future comparision.
    lastDevicePixelRatio = devicePixelRatioRound;
};

/**
 * Sets up mimetic via partial application.
 * @param {Function} initializeMimetic - Initalizes MIMETIC function.
 */
const mimeticPartial = (initializeMimetic, defaults) => {
    return configurationObj => {
        // Assing configuration as an object.
        const configuration = configurationObj ? configurationObj : {};

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
};

/** 
 * Default config properties if not defined.
 */
const defaults$1 = {
    loadEvent: 'DOMContentLoaded', // Load type
    mobileWidth: 640, // Width before disabling for mobile phone devices.
    scaleDelay: 16, // Miliseconds between calls on resize.
    preserveDevicePixelRatio: false, // Preserve the device pixel ratio on zoom.
    rootSelector: 'html', // Use the HTML element as the root element. 
    onScale: undefined,
    onZoom: undefined,
    onResize: undefined,
    cutOffWidth: 0, // The minimum width to disable resizing.
    relativeDesignWidth: 1024, // The width relative to the font size.
    enableScale: true
};

objectAssignPolyfill$1();

//Object Freeze polyfill.
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
const initializeMimetic = initializeMimeticPartial(getRootElement, getRootREMValue, CSSUnitsToPixels, setRootFontSize, resizilla);

// The MIMETIC API. 
const mimetic = mimeticPartial(initializeMimetic, defaults$1);

export default mimetic;
