(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.mimeticTest = global.mimeticTest || {})));
}(this, (function (exports) { 'use strict';

/**
 * Default config properties if not defined.
 */
const defaults = {
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
    enableScale: true,
    /**
     * This is important particularly when users maximises and reverts the browser
     * window. This delay determines the debounce threshold but also the trailing
     * edge call.
     */
    lateDetectionDelay: 500,
};

// const { expect } = chai;
const defaultsKeys = Object.keys(defaults);


describe('defaults', () => {
    it('Should consist of properties', () => {
        expect(defaultsKeys).to.have.length.above(1);
    });
});

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
/**
 *  volve - Tiny, Performant Debounce and Throttle Functions,
 *     License:  MIT
 *      Copyright Julien Etienne 2016 All Rights Reserved.
 *        github:  https://github.com/julienetie/volve
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */

/**
 * Date.now polyfill.
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now}
 */
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
const defaults$2 = [() => {}, 16, false, false, true];

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
const resizilla = resizillaPartial(defaults$2, windowGlobal);

const objectAssignPolyfill$1 = () => {
    if (typeof Object.assign != 'function') {
        (function() {
            Object.assign = function(target) {
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
    PXValue: 9,
}, {
    unit: 'x-small',
    // 10 / 16
    PXValue: 10,
}, {
    unit: 'small',
    // 13 / 16
    PXValue: 13,
}, {
    unit: 'normal',
    // 16 / 16
    PXValue: 16,
}, {
    unit: 'medium',
    // 16 / 16
    PXValue: 16,
}, {
    unit: 'large',
    // 18 / 16
    PXValue: 18,
}, {
    unit: 'x-large',
    // 24 / 16
    PXValue: 24,
}, {
    unit: 'xx-large',
    // 32 / 16
    PXValue: 32,
}];

/**
 * CSS Units with pixel factor.
 */
const CSSUnits = [{
    unit: 'px',
    //  1 / 16
    PXFactor: 1,
}, {
    unit: 'pt',
    // 96 / 72 / 16
    PXFactor: 1.33333333328,
}, {
    unit: 'em',
    // 1
    PXFactor: 16,
}, {
    unit: 'rem',
    // 1
    PXFactor: 16,
}, {
    unit: 'cm',
    // ???
    PXFactor: 16,
}, {
    unit: 'q',
    // ???
    PXFactor: 16,
}, {
    unit: 'in',
    // ???
    PXFactor: 16,
}, {
    unit: 'pc',
    // 96 / 72 / 12 / 16
    PXFactor: 0.11111111104,
}, {
    unit: 'ex',
    // ???
    PXFactor: 16,
}, {
    unit: 'ch',
    // ???
    PXFactor: 16,
}, {
    unit: 'vw',
    // Needs override.
    PXFactor: 16,
}, {
    unit: 'vh',
    // Needs override.
    PXFactor: 16,
}, {
    unit: 'vmin',
    // Needs override.
    PXFactor: 16,
}, {
    unit: 'vmax',
    // Needs override.
    PXFactor: 16,
}];

const windowRef = window;
const documentRef = windowRef.document;


// Checks if string or number is a number.
const isNumber = value => Number(value) === value;


// A very simple compose function.
const basicCompose = (a, b) => c => a(b(c));


// converts pixels to REM values.
const pxToRem = fontSizePx => parseInt(fontSizePx, 10) / 16;


// Is Function.
const isFunction = value => typeof value === 'function';


// Gets the element's root font size.
const getFontSize = element => windowRef.getComputedStyle(element.documentElement, null).getPropertyValue('font-size');


// Gets the root element.
const getRootElement = (element) => {
    const elements = {
        html: parent => parent.documentElement,
        body: parent => parent.body,
    };

    if (element instanceof windowRef.Element) {
        if (element.nodeType === 1) {
            return element;
        }
        throw new Error('rootElement is not a valid element');
    }
    return elements[element] ? elements[element](documentRef) : documentRef.querySelector(element);
};

const aliasValueToPX = value => CSSFixedUnits.filter(
    metricInfo => value === metricInfo.unit).shift().PXValue;


const CSSUnitsToPixels = (value) => {
    if (isNumber(value)) {
        return value;
    }
    const suffix = value.replace(/[^a-z]+/gi, '');
    const numberValue = value.replace(/[^\d.]*/g, '');
    const metricInfo = CSSUnits.filter(
        info => suffix === info.unit).shift();
    const PXValue = metricInfo ? numberValue * metricInfo.PXFactor : aliasValueToPX(value);
    return parseInt(PXValue, 10);
};

/**
 * Sets up intializeMimetic via partial application.
 * @param {Function} document.
 * @param {Function} getRootREMValue - Gets the root font-size in REM units.
 * @param {Function} CSSUnitsToPixels - Converts any CSS units to pixels.
 * @param {Function} setRootFontSize - Sets the new root font size.
 * @param {Function} resizilla - Calls handler on window resize and orientationchange events.
 */
function initializeMimeticPartial(
    document,
    getRootREMValue,
    CSSUnitsToPixels,
    setRootFontSize,
    resizilla,
    ) {
    // A resize object to store MIMETIC's resizilla's requirements.
    const resize = {};


    /**
     * The intializeMimetic function.
     * @param {object} config - The API parameters.
     */
    function initalizeMimeticFinal(config) {
        // Destructured API parameters.
        const {
            mobileWidth,
            scaleDelay,
            cutOffWidth,
        } = config;


        // Store the scaleDelay for kill and revive.
        resize.scaleDelay = scaleDelay;


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
            mobileWidthPX,
            cutOffWidthPX,
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
const setRootFontSizePartial = (resizeRootFontSize) => {
    const windowRef = window;
    const documentRef = windowRef.document;
    let lastOuterWidth;


    return ({
        rootFontSize,
        initialOuterWidth,
        relativeDesignWidth,
        mobileWidth,
        cutOffWidth,
        preserveDevicePixelRatio,
        onScale,
        onZoom,
        onResize,
        enableScale,
        mobileWidthPX,
        cutOffWidthPX,
        lateDetectionDelay,
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
        const OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95
        ? 1 : outerClientRatio;

        // A calculated DPR safe for safari browsers.
        const safariSafeDPR = Number((OCRProximity).toFixed(5));

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
         * The minimum veiwport size to not react to.
         */
        const cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;


        /**
         * Mutate on next available frame.
         */
        resizeRootFontSize({
            innerWidth,
            outerWidth,
            relativeDesignWidth,
            cutOff,
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
        }, setRootFontSize);

        /**
         * Updated Outer browser dimensions.
         */
        lastOuterWidth = outerWidth;
    };
};

let wasLastBeyondMobileWidth = true;
let renderOnce;


/**
 * Directly mutates the root font size of a given Element.
 * @param
 */
const mutateRootFontSizePartial = rootElement => (
    rootFontSizeFinal,
    resizeWithoutZoom,
    hasScaledOrDPRIsDefault,
    isDevicePixelRatioDefault,
    isAboveDesignWidth,
    isBeyondCutoff,
    enableScale,
) => {
    if (hasScaledOrDPRIsDefault || renderOnce) {
        if (renderOnce) {
            renderOnce = false;
        }


        if (isBeyondCutoff) {
            // Set the rootElement's font size if scale is enabled.
            if (enableScale) {
                // eslint-disable-next-line
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
};

// Default root selector. Not an option.
const { rootSelector } = defaults;

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


const setCallbacks = (
    APIParameters,
    isBeyondCutoff,
    resizeWithoutZoom,
    onScale,
    onZoom,
    onResize,
) => {
    // Validates callbacks once.
    if (callbacksRequireValidation && isBeyondCutoff) {
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

let lastDevicePixelRatio;
let setRootFontSizeTimeoutId;
let lastOuterWidth;
/**
 * Calculate and apply the new font size to the root element.
 */
const resizeRootFontSize = (settings, setRootFontSizeTail) => {
    const {
        innerWidth,
        outerWidth,
        relativeDesignWidth,
        cutOff,
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
    } = settings;

    // Assigns lastOuterWidth with an inital value, never expected to be zero.
    if (!lastOuterWidth) {
        lastOuterWidth = outerWidth;
    }

    // Calculates the devicePixelRatio as if the default was 1.
    const normalizedDPR = (1 / defaultDPR) * calculatedDPR;

    // The preserved or non-preserved DPR via API settings.
    const evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR;

    // Truthy if the browser is resized without being zoomed.
    const resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio;

    // Check to see if the window is at the default zoom level.
    const isDevicePixelRatioDefault = defaultDPR === calculatedDPR;

    // Determine if the resize event was last with or without zoom.
    const resizeWithoutZoom2 = outerWidth === lastOuterWidth;

    const isAboveDesignWidth = innerWidth > relativeDesignWidth;

    const isBeyondCutoff = innerWidth > cutOff;

    const rootFontSizeFinal = rootFontSize * designWidthRatio * evalDPR;

    const hasScaledOrDPRIsDefault = resizeWithoutZoom || isDevicePixelRatioDefault;


    mutateRootFontSize(
        rootFontSizeFinal,
        resizeWithoutZoom,
        hasScaledOrDPRIsDefault,
        isDevicePixelRatioDefault,
        isAboveDesignWidth,
        isBeyondCutoff,
        enableScale,
    );


    clearTimeout(setRootFontSizeTimeoutId);


    if (resizeWithoutZoom2) {
        // setRootFontSizeTail to be independently conditional.
        if (setRootFontSizeTail) {
            setRootFontSizeTimeoutId = setTimeout(
                () => {
                    setRootFontSizeTail();
                }, lateDetectionDelay,
            );
        }
    }


    // The parameters passed to each callback as an object.
    const APIParameters = {
        viewportWidth,
        innerWidth,
        evalDPR,
        calculatedDPR,
        normalizedDPR,
    };


    setCallbacks(
        APIParameters,
        isBeyondCutoff,
        resizeWithoutZoom,
        onScale,
        onZoom,
        onResize,
    );

    // Store the last device pixel ratio for future comparision.
    lastDevicePixelRatio = calculatedDPR;

    // Re-assign the lastOuterWidth.
    lastOuterWidth = outerWidth;
};

/**
 * Sets up mimetic via partial application.
 * @param {Function} initializeMimetic - Initalizes MIMETIC function.
 */
const mimeticPartial = (initializeMimetic, defaults) => (configurationObj) => {
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
        },
    };
};

// Object Assign polyfill.
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
const getRootREMValue = basicCompose(
    pxToRem,
    getFontSize,
);


/*
 Called initally and on prototype.revivie() to
 setup and implement resizilla's event listeners.

 initalizeMimetic contains a kill method to remove
 resizilla's event listeners and a revive method to
 restart Mimetic's initalization.
*/
const initializeMimetic = initializeMimeticPartial(
    document,
    getRootREMValue,
    CSSUnitsToPixels,
    setRootFontSize,
    resizilla,
);


// The MIMETIC API.
const mimetic = mimeticPartial(initializeMimetic, defaults);

const { kill, revive } = mimetic();

describe('mimetic', () => {
    it('Should exist', () => {
        expect(mimetic).to.be.a('function');
    });

    it('Should contain a kill method', () => {
        expect(kill).to.be.a('function');
    });

    it('Should contain a revive method', () => {
        expect(revive).to.be.a('function');
    });
});

const preCalculatedValues = {
    "innerWidth": 1024,
    "outerWidth": 1024,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1,
    "calculatedDPR": 1,
    "rootFontSize": 1.5, // Root font size exagerated to x1.5 = '24px' 
    "enableScale": true,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 1024,
    "defaultDPR": 1
};


const emulated1080P = {
    "innerWidth": 1920,
    "outerWidth": 1920,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1.875,
    "calculatedDPR": 1,
    "rootFontSize": 1,
    "enableScale": true,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 1920,
    "defaultDPR": 1
};


const mobile = {
    "innerWidth": 300,
    "outerWidth": 300,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 0.2929, // innerWidth / relativeDesignWidth.
    "calculatedDPR": 1,
    "rootFontSize": 1,
    "enableScale": true,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 300,
    "defaultDPR": 1
};

const noScale = {
    "innerWidth": 1920,
    "outerWidth": 1920,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1.875,
    "calculatedDPR": 1,
    "rootFontSize": 1,
    "enableScale": false,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 1920,
    "defaultDPR": 1
};

const iPadPro = {
    "innerWidth": 1024,
    "outerWidth": 1024,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1,
    "calculatedDPR": 2,
    "rootFontSize": 1,
    "enableScale": true,
    "preserveDevicePixelRatio": true,
    "viewportWidth": 2048,
    "defaultDPR": 2
};



const getRootFontsize = (rootElement) => window.getComputedStyle(rootElement).getPropertyValue('font-size');

after(() => {
    // document.documentElement.removeAttribute('style');   
    document.documentElement.style.fontSize = '16px';	
});


let rootFontSize;
describe('resizeRootFontSize', () => {

    it('Should exist', () => {
        expect(resizeRootFontSize).to.be.a('function');
    });

    it('Should set a root font size of 24px given the preCalculatedValues for XGA', () => {
        resizeRootFontSize(preCalculatedValues);
        rootFontSize = getRootFontsize(document.documentElement);
        if(window.isNode){
            expect(rootFontSize).to.equal('1.5000rem');
        }else{
            expect(rootFontSize).to.equal('24px');    
        }
    });

    it('Should set a root font size of 30px given the preCalculatedValues for 1080p', () => {
        resizeRootFontSize(emulated1080P);
        rootFontSize = getRootFontsize(document.documentElement);
        if(window.isNode){
            expect(rootFontSize).to.equal('1.8750rem');
        }else{
            expect(rootFontSize).to.equal('30px');    
        }  
    });

    it('Should have no font size when below the cutOff threshold', () => {
        resizeRootFontSize(mobile);
        rootFontSize = getRootFontsize(document.documentElement);
        if(window.isNode){
            expect(rootFontSize).to.equal('');
        }else{
            expect(rootFontSize).to.equal('16px');    
        }  
    });

    it('Should not set the root font size to 30px as enableScale is disabled', () => {
        resizeRootFontSize(noScale);
        rootFontSize = getRootFontsize(document.documentElement);
        if(window.isNode){
            expect(rootFontSize).to.equal('');
        }else{
            expect(rootFontSize).to.equal('16px');    
        }
    });

    it('Should preserve the original devicePixelRatio when preserveDevicePixelRatio is enabled', () => {
        resizeRootFontSize(iPadPro);
        rootFontSize = getRootFontsize(document.documentElement);
        if(window.isNode){
            expect(rootFontSize).to.equal('2.0000rem');
        }else{
            expect(rootFontSize).to.equal('32px');    
        }
       
    });
});

// import setRootFontSizePartial from '../src/set-root-font-size-partial';


// // const { expect } = chai;


// describe('setRootFontSizePartial', () => {
//     it('Should exist', () => {
//         expect(setRootFontSizePartial).to.be.a('function');
//     });
// });

Object.defineProperty(exports, '__esModule', { value: true });

})));
