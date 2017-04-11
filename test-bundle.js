(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.mimeticTest = global.mimeticTest || {})));
}(this, (function (exports) { 'use strict';

/** 
 * Default config properties if not defined.
 */
var defaults = {
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

var _chai = chai;
var expect = _chai.expect;

var defaultsKeys = Object.keys(defaults);

describe('defaults', function () {
    it('Should consist of properties', function () {
        expect(defaultsKeys).to.have.length.above(1);
    });
});

// Checks if string or number is a number.


// A very simple compose function.


// converts pixels to REM values.


// Checks callback type.
var isCallBackDefined = function isCallBackDefined(callback) {
    return typeof callback === 'function';
};

// Gets the element's root font size.


// Gets the root element.

var wasLastBeyondMobileWidth = true;
var lastDevicePixelRatio = void 0;
var hasScaleCallback = false;
var hasZoomCallback = false;
var hasResizeCallback = false;
var APIParameters = void 0;
var callbacksRequireValidation = true;
var initalRenderOnce = true;

/** 
 * Calculate and apply the new font size to the root element.
 */
var resizeRootFontSize = function resizeRootFontSize(_ref) {
    var innerWidth = _ref.innerWidth,
        outerWidth = _ref.outerWidth,
        isDevicePixelRatioDefault = _ref.isDevicePixelRatioDefault,
        relativeDesignWidth = _ref.relativeDesignWidth,
        cutOff = _ref.cutOff,
        rootElement = _ref.rootElement,
        designWidthRatio = _ref.designWidthRatio,
        calculatedDPR = _ref.calculatedDPR,
        rootFontSize = _ref.rootFontSize,
        enableScale = _ref.enableScale,
        preserveDevicePixelRatio = _ref.preserveDevicePixelRatio,
        onScale = _ref.onScale,
        onZoom = _ref.onZoom,
        onResize = _ref.onResize,
        viewportWidth = _ref.viewportWidth,
        defaultDPR = _ref.defaultDPR;

    console.log({
        innerWidth: innerWidth,
        outerWidth: outerWidth,
        isDevicePixelRatioDefault: isDevicePixelRatioDefault,
        relativeDesignWidth: relativeDesignWidth,
        cutOff: cutOff,
        rootElement: rootElement,
        designWidthRatio: designWidthRatio,
        calculatedDPR: calculatedDPR,
        rootFontSize: rootFontSize,
        enableScale: enableScale,
        preserveDevicePixelRatio: preserveDevicePixelRatio,
        onScale: onScale,
        onZoom: onZoom,
        onResize: onResize,
        viewportWidth: viewportWidth,
        defaultDPR: defaultDPR
    });
    // Calculates the devicePixelRatio as if the default was 1.
    var normalizedDPR = 1 / defaultDPR * calculatedDPR;

    // The preserved or non-preserved DPR via API settings.
    var evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR;

    // Truthy if the browser is resized without being zoomed.
    var resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio;

    if (resizeWithoutZoom || isDevicePixelRatioDefault || initalRenderOnce) {
        if (initalRenderOnce) {
            initalRenderOnce = false;
        }
        var isAboveDesignWidth = innerWidth > relativeDesignWidth;

        if (innerWidth > cutOff) {
            /** 
             * Set the rootElement's font size.
             */
            if (enableScale) {
                rootElement.style.fontSize = (rootFontSize * designWidthRatio * evalDPR).toFixed(6) + 'rem';
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
    APIParameters = {
        viewportWidth: viewportWidth,
        innerWidth: innerWidth,
        evalDPR: evalDPR,
        calculatedDPR: calculatedDPR,
        normalizedDPR: normalizedDPR
    };

    // Validates callbacks once.
    if (callbacksRequireValidation && innerWidth > cutOff) {
        callbacksRequireValidation = false;
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
    lastDevicePixelRatio = calculatedDPR;
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
var optionNames = 'handler,delay,incept,useCapture,orientationchange'.split(',');

// Default options that correspond with the optionNames.

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
 * CSS Fixed units with pixel values.
 */

/** 
 * CSS Units with pixel factor.
 */

/**
 * Sets up intializeMimetic via partial application.
 * @param {Function} getRootElement - Gets the root font element.
 * @param {Function} getRootREMValue - Gets the root font-size in REM units.
 * @param {Function} CSSUnitsToPixels - Converts any CSS units to pixels.
 * @param {Function} setRootFontSize - Sets the new root font size.
 * @param {Function} resizilla - Calls handler on window resize and orientationchange events.
 */

/** 
 * Set Root Font Size.
 */
var setRootFontSizePartial = function setRootFontSizePartial(resizeRootFontSize) {
  var windowRef = window;
  var documentRef = windowRef.document;
  var requestId = void 0;
  var lastOuterWidth = void 0;
  var lastOuterHeight = void 0;

  return function (_ref) {
    var rootElement = _ref.rootElement,
        rootFontSize = _ref.rootFontSize,
        initialOuterHeight = _ref.initialOuterHeight,
        initialOuterWidth = _ref.initialOuterWidth,
        relativeDesignWidth = _ref.relativeDesignWidth,
        mobileWidth = _ref.mobileWidth,
        cutOffWidth = _ref.cutOffWidth,
        enableScale = _ref.enableScale,
        preserveDevicePixelRatio = _ref.preserveDevicePixelRatio,
        onScale = _ref.onScale,
        onZoom = _ref.onZoom,
        onResize = _ref.onResize,
        mobileWidthPX = _ref.mobileWidthPX,
        cutOffWidthPX = _ref.cutOffWidthPX;

    // Real time DOM measurments.
    var innerWidth = windowRef.innerWidth;
    var outerWidth = windowRef.outerWidth;
    var outerHeight = windowRef.outerHeight;
    var clientWidth = documentRef.documentElement.clientWidth;
    var DPR = windowRef.devicePixelRatio;

    // Ratio between the outer and client width.
    var outerClientRatio = outerWidth / clientWidth;

    // A calulated DPR within the proximity of 0.05. for devices (eg.safari) that have a fixed DPR.
    // @TODO check on large display devices with DPRs greater than 1. 
    var OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95 ? 1 : outerClientRatio;

    // A calculated DPR safe for safari browsers.
    var safariSafeDPR = Number(OCRProximity.toFixed(5));

    // Legacy internet explorer devicePixelRatio.
    var IEDPR = Number(screen.deviceXDPI / screen.logicalXDPI);

    // The devicePixelRatio with polyfilled support.
    var calculatedDPR = Math.abs(IEDPR ? IEDPR : DPR === 1 ? safariSafeDPR : DPR);

    // The real viewport width. 
    var viewportWidth = parseInt(clientWidth * calculatedDPR);

    // The default device pixel ratio. 
    var defaultDPR = Math.round(clientWidth * calculatedDPR / outerWidth);

    /** 
     * Set variable inital values if not yet set.
     */
    if (lastOuterWidth === undefined) {
      lastOuterWidth = initialOuterWidth;
      lastOuterHeight = initialOuterHeight;
    }

    /**
     * The window width compared to the design width.
     */
    var designWidthRatio = innerWidth / relativeDesignWidth;

    /**
     * Check to see if the window is at the default zoom level.
     */
    var isDevicePixelRatioDefault = defaultDPR === calculatedDPR;

    /** 
     * The minimum veiwport size to not react to.
     */
    var cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;

    /**
     * Mutate on next available frame.
     */
    resizeRootFontSize({
      innerWidth: innerWidth,
      outerWidth: outerWidth,
      isDevicePixelRatioDefault: isDevicePixelRatioDefault,
      relativeDesignWidth: relativeDesignWidth,
      cutOff: cutOff,
      rootElement: rootElement,
      designWidthRatio: designWidthRatio,
      calculatedDPR: calculatedDPR,
      rootFontSize: rootFontSize,
      enableScale: enableScale,
      preserveDevicePixelRatio: preserveDevicePixelRatio,
      onScale: onScale,
      onZoom: onZoom,
      onResize: onResize,
      viewportWidth: viewportWidth,
      defaultDPR: defaultDPR
    });

    /**
     * Updated Outer browser dimensions.
     */
    lastOuterWidth = outerWidth;
    lastOuterHeight = outerWidth;
  };
};

/**
 * Sets up mimetic via partial application.
 * @param {Function} initializeMimetic - Initalizes MIMETIC function.
 */

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

var _chai$1 = chai;
var expect$1 = _chai$1.expect;


var preCalculatedValues = {
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

var emulated1080P = {
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

var getRootFontsize = function getRootFontsize(rootElement) {
    return window.getComputedStyle(rootElement).getPropertyValue('font-size');
};

var rootFontSize = void 0;
describe('resizeRootFontSize', function () {

    it('Should exist', function () {
        expect$1(resizeRootFontSize).to.be.a('function');
    });

    it('Should have a root font size of 24px given the preCalculatedValues for XGA', function () {
        resizeRootFontSize(preCalculatedValues);
        rootFontSize = getRootFontsize(document.documentElement);
        console.log(rootFontSize);
        expect$1(rootFontSize).to.equal('24px');
    });

    it('Should have a root font size of 30px given the preCalculatedValues for 1080p', function () {
        resizeRootFontSize(emulated1080P);
        rootFontSize = getRootFontsize(document.documentElement);
        console.log(rootFontSize);
        expect$1(rootFontSize).to.equal('30px');
    });
});

var _chai$2 = chai;
var expect$2 = _chai$2.expect;


describe('setRootFontSizePartial', function () {
    it('Should exist', function () {
        expect$2(setRootFontSizePartial).to.be.a('function');
    });
});

Object.defineProperty(exports, '__esModule', { value: true });

})));
