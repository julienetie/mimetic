(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.mimetic = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

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

    var call = function call(parameters) {
        callback(parameters);
    };

    return function (parameters) {
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

var objectAssignPolyfill = function objectAssignPolyfill() {
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
var windowGlobal = typeof window !== 'undefined' ? window : (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global;

// A list of option names to make naming and renaming simple.
var optionNames = 'handler,delay,incept,useCapture,orientationchange'.split(',');

// Default options that correspond with the optionNames.
var defaults$$1 = [function () {}, 16, false, false, true];

/** 
 * Each option name is paired with the option value
 * @return {Object}
 */
var convertPairsToLiterals = function convertPairsToLiterals(value, i) {
    return defineProperty({}, optionNames[i], value);
};

/** 
 * Adds the window event with the provided options.
 * Returns the same handler for removeEventListeners.
 * @return {Function}
 */
var addWindowEvent = function addWindowEvent(handler, delay, incept, windowObject, useCapture) {
    var debounced = debounce(handler, delay, incept);
    windowObject.addEventListener('resize', debounced, useCapture);
    return debounced;
};

var destroyPartial = function destroyPartial(directHandler, useCapture, windowObject) {
    var destroyAPI = function destroyAPI(type) {
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
var resizillaPartial = function resizillaPartial(defaults$$1, windowObject) {

    /** 
     * The API
     * @param {Function} handler - The callback to execute on resize
     * @param {Number} delay - Debounce delay in milliseconds
     * @param {Boolean} incept - Debounce style
     * @param {Boolean} useCapture - Bubbling/ capture options for events
     * @param {Boolean} orientationChange - respond on orientation change
     */
    return function resizillaFinal() {
        for (var _len = arguments.length, APIParameters = Array(_len), _key = 0; _key < _len; _key++) {
            APIParameters[_key] = arguments[_key];
        }

        // The unchosen excess defaults.
        var excessDefaults = defaults$$1.slice(APIParameters.length, defaults$$1.length);

        // Concatenate the API options with the excess defaults.
        var optionValues = [].concat(APIParameters, toConsumableArray(excessDefaults));

        // Final options as an object.
        var mergedOptions = Object.assign.apply(Object, toConsumableArray(optionValues.map(convertPairsToLiterals)));

        // Destructured options.
        var handler = mergedOptions.handler,
            delay = mergedOptions.delay,
            incept = mergedOptions.incept,
            useCapture = mergedOptions.useCapture,
            orientationChange = mergedOptions.orientationChange;

        // A direct reference to the added handler.

        var directHandler = addWindowEvent(handler, delay, incept, windowObject, useCapture);

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
var resizilla = resizillaPartial(defaults$$1, windowGlobal);

var objectAssignPolyfill$1 = function objectAssignPolyfill() {
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

var objectFreezePolyfill = function objectFreezePolyfill() {
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
    var resize = {};

    /**
     * The intializeMimetic function.
     * @param {object} config - The API parameters.
     */
    function initalizeMimeticFinal(config) {
        // Destructured API parameters.
        var scaleDelay = config.scaleDelay,
            cutOffWidth = config.cutOffWidth;

        // Store the scaleDelay for kill and revive.

        resize.scaleDelay = scaleDelay;

        // The intial root font size.
        var rootFontSize = getRootREMValue(document);

        // // mobileWidth in pixels.
        // const mobileWidthPX = CSSUnitsToPixels(mobileWidth);


        // Cut off width in pixels.
        // const cutOffWidthPX = CSSUnitsToPixels(cutOffWidth);


        // Provide parameters to setRootFontSize. @TODO remove config, only use what is needed.
        var settings = Object.assign({
            initialOuterHeight: window.outerHeight,
            initialOuterWidth: window.outerWidth,
            rootFontSize: rootFontSize
        }, config);

        // Store the settings for kill and revive.
        resize.settings = settings;

        // Immediately set the root font size according to MIMETIC.
        var setRootFontSizeScope = function setRootFontSizeScope() {
            return setRootFontSize(settings);
        };
        resize.setRootFontSizeScope = setRootFontSizeScope;
        setRootFontSizeScope();

        // On window resize set the root font size according to MIMETIC.
        resize.resizilla = resizilla(function () {
            setRootFontSize(settings, setRootFontSizeScope);
        }, scaleDelay, false);
    }

    /**
     * Remove both event listeners set via resizilla.
     */
    initalizeMimeticFinal.prototype.kill = function () {
        return resize.resizilla.destroy();
    };

    /**
     * Re-instate resizilla.
     */
    initalizeMimeticFinal.prototype.revive = function revive() {
        resize.resizilla = resizilla(function () {
            setRootFontSize(resize.settings, resize.setRootFontSizeScope);
        }, resize.scaleDelay, false);
    };

    return initalizeMimeticFinal;
}

/**
 * Set Root Font Size.
 */
var setRootFontSizePartial = function setRootFontSizePartial(resizeRootFontSize) {
  var windowRef = window;
  var documentRef = windowRef.document;
  var lastOuterWidth = void 0;

  return function (_ref, setRootFontSize) {
    var rootFontSize = _ref.rootFontSize,
        initialOuterWidth = _ref.initialOuterWidth,
        relativeDesignWidth = _ref.relativeDesignWidth,
        preserveDevicePixelRatio = _ref.preserveDevicePixelRatio,
        onScale = _ref.onScale,
        onZoom = _ref.onZoom,
        onResize = _ref.onResize,
        enableScale = _ref.enableScale,
        lateDetectionDelay = _ref.lateDetectionDelay,
        mediaQueryCutOff = _ref.mediaQueryCutOff,
        deviceSplitting = _ref.deviceSplitting;

    // Real time DOM measurments.
    var innerWidth = windowRef.innerWidth;
    var outerWidth = windowRef.outerWidth;
    var clientWidth = documentRef.documentElement.clientWidth;
    var DPR = windowRef.devicePixelRatio;

    // Ratio between the outer and client width.
    var outerClientRatio = outerWidth / clientWidth;

    // A calulated DPR within the proximity of 0.05. for devices (eg.safari)
    // that have a fixed DPR.
    // @TODO check on large display devices with DPRs greater than 1.
    var OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95 ? 1 : outerClientRatio;

    // A calculated DPR safe for safari browsers.
    var safariSafeDPR = Number(OCRProximity.toFixed(5));

    // Legacy internet explorer devicePixelRatio.
    var IEDPR = Number(windowRef.screen.deviceXDPI / windowRef.screen.logicalXDPI);

    // The devicePixelRatio with polyfilled support.
    var alt = DPR === 1 ? safariSafeDPR : DPR;
    var calculatedDPR = Math.abs(IEDPR || alt);

    // The real viewport width.
    var viewportWidth = parseInt(clientWidth * calculatedDPR, 10);

    // The default device pixel ratio.
    var defaultDPR = Math.round(clientWidth * (calculatedDPR / outerWidth));

    /**
     * Set variable inital values if not yet set.
     */
    if (lastOuterWidth === undefined) {
      lastOuterWidth = initialOuterWidth;
    }

    /**
     * The window width compared to the design width.
     */
    var designWidthRatio = innerWidth / relativeDesignWidth;

    /**
     * The minimum veiwport size to not react to.
     */
    // const cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;


    /**
     * Mutate on next available frame.
     */
    resizeRootFontSize({
      innerWidth: innerWidth,
      outerWidth: outerWidth,
      relativeDesignWidth: relativeDesignWidth,
      designWidthRatio: designWidthRatio,
      calculatedDPR: calculatedDPR,
      rootFontSize: rootFontSize,
      enableScale: enableScale,
      preserveDevicePixelRatio: preserveDevicePixelRatio,
      onScale: onScale,
      onZoom: onZoom,
      onResize: onResize,
      viewportWidth: viewportWidth,
      defaultDPR: defaultDPR,
      lateDetectionDelay: lateDetectionDelay,
      mediaQueryCutOff: mediaQueryCutOff,
      deviceSplitting: deviceSplitting
    }, setRootFontSize);

    /**
     * Updated Outer browser dimensions.
     */
    lastOuterWidth = outerWidth;
  };
};

var renderOnce = true;

/**
 * Directly mutates the root font size of a given Element.
 * @param
 */
var mutateRootFontSizePartial = function mutateRootFontSizePartial(rootElement) {
    return function (rootFontSizeFinal, resizeWithoutZoom, hasScaledOrDPRIsDefault, isBeyondCutoff, enableScale, isMobileLikeDevice) {
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
};

/**
 * Default config properties if not defined.
 */
var defaults$2 = {
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

var windowRef = window;
var documentRef = windowRef.document;

// Checks if string or number is a number.


// A very simple compose function.
var basicCompose = function basicCompose(a, b) {
    return function (c) {
        return a(b(c));
    };
};

// converts pixels to REM values.
var pxToRem = function pxToRem(fontSizePx) {
    return parseInt(fontSizePx, 10) / 16;
};

// Is Function.
var isFunction = function isFunction(value) {
    return typeof value === 'function';
};

// Gets the element's root font size.
var getFontSize = function getFontSize(element) {
    return windowRef.getComputedStyle(element.documentElement, null).getPropertyValue('font-size');
};

// Gets the root element.
var getRootElement = function getRootElement(element) {
    var elements = {
        html: function html(parent) {
            return parent.documentElement;
        },
        body: function body(parent) {
            return parent.body;
        }
    };

    if (element instanceof windowRef.Element) {
        if (element.nodeType === 1) {
            return element;
        }
        throw new Error('rootElement is not a valid element');
    }
    return elements[element] ? elements[element](documentRef) : documentRef.querySelector(element);
};

var rootSelector = defaults$2.rootSelector;

// The root font element.

var rootElement = getRootElement(rootSelector);

/**
 * Mutate root font size with pre-sets.
 * @param {HTMLElement} rootElement - Root element option.
 * @param {Boolean} rootElement - Enable scale option.
 * @return {Function} mutateRootFontSize.
 */
var mutateRootFontSize = mutateRootFontSizePartial(rootElement);

var callbacksRequireValidation = true;
var hasScaleCallback = false;
var hasZoomCallback = false;
var hasResizeCallback = false;

var setCallbacks = function setCallbacks(APIParameters, isBeyondCutoff, resizeWithoutZoom, onScale, onZoom, onResize) {
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

var isMobileLikeDeviceTail = function isMobileLikeDeviceTail() {
    var widthGreaterThanHeight = window.screen.width > window.screen.height;
    var noInnerDimensions = window.outerWidth === 0 && window.outerHeight === 0;

    var msLandscape = (screen.msOrientation || '').indexOf('landscape') === 0 ? 90 : (screen.msOrientation || '').indexOf('portrait') === 0 ? 0 : false;
    var screenOrientationAngle = void 0;
    if (window.screen.orientation !== undefined) {
        screenOrientationAngle = window.screen.orientation.angle;
    }

    var otherOrientation = window.orientation === undefined ? screenOrientationAngle : window.orientation;
    var clientOrientation = msLandscape === false ? otherOrientation : msLandscape;
    var positiveOrientation = Math.abs(clientOrientation);

    var isDeviceMobileLike = noInnerDimensions || !widthGreaterThanHeight && positiveOrientation !== 90 || widthGreaterThanHeight && positiveOrientation === 90 && devicePixelRatio !== 1 || !widthGreaterThanHeight;

    return isDeviceMobileLike;
};

var lastDevicePixelRatio = void 0;
var setRootFontSizeTimeoutId = void 0;
var lastOuterWidth = void 0;
var isMobileLikeDevice = void 0;
var lastScreenWidth = void 0;
/**
 * Calculate and apply the new font size to the root element.
 */
var resizeRootFontSize = function resizeRootFontSize(settings, setRootFontSizeTail) {
    var innerWidth = settings.innerWidth,
        outerWidth = settings.outerWidth,
        relativeDesignWidth = settings.relativeDesignWidth,
        designWidthRatio = settings.designWidthRatio,
        calculatedDPR = settings.calculatedDPR,
        rootFontSize = settings.rootFontSize,
        enableScale = settings.enableScale,
        preserveDevicePixelRatio = settings.preserveDevicePixelRatio,
        onScale = settings.onScale,
        onZoom = settings.onZoom,
        onResize = settings.onResize,
        viewportWidth = settings.viewportWidth,
        defaultDPR = settings.defaultDPR,
        lateDetectionDelay = settings.lateDetectionDelay,
        mediaQueryCutOff = settings.mediaQueryCutOff,
        deviceSplitting = settings.deviceSplitting;

    // Assigns lastOuterWidth with an inital value, never expected to be zero.

    if (!lastOuterWidth) {
        lastOuterWidth = outerWidth;
    }

    // Current screen width.
    var screenWidth = window.screen.width;

    // Calculates the devicePixelRatio as if the default was 1.
    var normalizedDPR = 1 / defaultDPR * calculatedDPR;

    // The preserved or non-preserved DPR via API settings.
    var evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR;

    // Truthy if the browser is resized without being zoomed.
    var resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio;

    // Check to see if the window is at the default zoom level.
    var isDevicePixelRatioDefault = defaultDPR === calculatedDPR;

    // Determine if the resize event was last with or without zoom.
    var resizeWithoutZoom2 = outerWidth === lastOuterWidth;

    var isAboveDesignWidth = innerWidth > relativeDesignWidth;

    var rootFontSizeFinal = rootFontSize * designWidthRatio * evalDPR;

    var hasScaledOrDPRIsDefault = resizeWithoutZoom || isDevicePixelRatioDefault;

    var isBeyondCutoff = deviceSplitting ? true : window.matchMedia(mediaQueryCutOff).matches;

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
            setRootFontSizeTimeoutId = setTimeout(function () {
                setRootFontSizeTail();
            }, lateDetectionDelay);
        }
    }
    console.log('isBeyondCutoff', isBeyondCutoff);

    // The parameters passed to each callback as an object.
    var APIParameters = {
        viewportWidth: viewportWidth,
        innerWidth: innerWidth,
        evalDPR: evalDPR,
        calculatedDPR: calculatedDPR,
        normalizedDPR: normalizedDPR
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
var mimeticPartial = function mimeticPartial(initializeMimetic, defaults) {
    return function (configurationObj) {
        // Assing configuration as an object.
        var configuration = configurationObj || {};

        // Merge configuration into defaults.
        var overriddenDefaults = Object.assign(defaults, configuration);

        // Prevent config mutations.
        var config = Object.freeze(overriddenDefaults);

        // Default load to DOMContentLoaded if not opted.
        var loadEventOption = config.loadEvent === 'load' ? 'load' : 'DOMContentLoaded';

        // Initalize mimetic on load.
        window.addEventListener(loadEventOption, function () {
            return initializeMimetic(config);
        });

        // Return kill and revive methods.
        return {
            kill: function kill() {
                initializeMimetic.prototype.kill();
            },
            revive: function revive() {
                initializeMimetic.prototype.revive();
            }
        };
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
var setRootFontSize = setRootFontSizePartial(resizeRootFontSize);

// Gets the root element value in REM units.
var getRootREMValue = basicCompose(pxToRem, getFontSize);

/*
 Called initally and on prototype.revivie() to
 setup and implement resizilla's event listeners.

 initalizeMimetic contains a kill method to remove
 resizilla's event listeners and a revive method to
 restart Mimetic's initalization.
*/
var initializeMimetic = initializeMimeticPartial(document, getRootREMValue,
// CSSUnitsToPixels,
setRootFontSize, resizilla);

// The MIMETIC API.
var mimetic = mimeticPartial(initializeMimetic, defaults$2);

return mimetic;

})));
