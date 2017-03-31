(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Mimetic = factory());
}(this, (function () { 'use strict';

/**
 * request-frame - requestAnimationFrame & cancelAnimationFrame polyfill for optimal cross-browser development.
 * @version v1.5.3
 * @license MIT
 * Copyright Julien Etienne 2015 All Rights Reserved.
 */
/**
 * @param  {String} type - request | cancel | native.
 * @return {Function} Timing function.
 */
function requestFrame(type) {
    // The only vendor prefixes required.
    var vendors = ['moz', 'webkit'];

    // Disassembled timing function abbreviations.
    var aF = 'AnimationFrame';
    var rqAF = 'Request' + aF;

    // Checks for firefox 4 - 10 function pair mismatch.
    var mozRAF = window.mozRequestAnimationFrame;
    var mozCAF = window.mozCancelAnimationFrame;
    var hasMozMismatch = mozRAF && !mozCAF;

    // Final assigned functions.
    var assignedRequestAnimationFrame;
    var assignedCancelAnimationFrame;

    // Initial time of the timing lapse.
    var previousTime = 0;

    var requestFrameMain;

    // Date.now polyfill, mainly for legacy IE versions.
    if (!Date.now) {
        Date.now = function () {
            return new Date().getTime();
        };
    }

    /**
     * hasIOS6RequestAnimationFrameBug.
     * @See {@Link https://gist.github.com/julienetie/86ac394ec41f1271ff0a}
     * - for Commentary.
     * @Copyright 2015 - Julien Etienne. 
     * @License: MIT.
     */
    function hasIOS6RequestAnimationFrameBug() {
        var webkitRAF = window.webkitRequestAnimationFrame;
        var rAF = window.requestAnimationFrame;

        // CSS/ Device with max for iOS6 Devices.
        var hasMobileDeviceWidth = screen.width <= 768 ? true : false;

        // Only supports webkit prefixed requestAnimtionFrane.
        var requiresWebkitprefix = !(webkitRAF && rAF);

        // iOS6 webkit browsers don't support performance now.
        var hasNoNavigationTiming = window.performance ? false : true;

        var iOS6Notice = 'setTimeout is being used as a substitiue for \n            requestAnimationFrame due to a bug within iOS 6 builds';

        var hasIOS6Bug = requiresWebkitprefix && hasMobileDeviceWidth && hasNoNavigationTiming;

        var bugCheckresults = function bugCheckresults(timingFnA, timingFnB, notice) {
            if (timingFnA || timingFnB) {
                console.warn(notice);
                return true;
            } else {
                return false;
            }
        };

        var displayResults = function displayResults(hasBug, hasBugNotice, webkitFn, nativeFn) {
            if (hasBug) {
                return bugCheckresults(webkitFn, nativeFn, hasBugNotice);
            } else {
                return false;
            }
        };

        return displayResults(hasIOS6Bug, iOS6Notice, webkitRAF, rAF);
    }

    /**
     * Native clearTimeout function.
     * @return {Function}
     */
    function clearTimeoutWithId(id) {
        clearTimeout(id);
    }

    /**
     * Based on a polyfill by Erik, introduced by Paul Irish & 
     * further improved by Darius Bacon.
     * @see  {@link http://www.paulirish.com/2011/
     * requestanimationframe-for-smart-animating}
     * @see  {@link https://github.com/darius/requestAnimationFrame/blob/
     * master/requestAnimationFrame.js}
     * @callback {Number} Timestamp.
     * @return {Function} setTimeout Function.
     */
    function setTimeoutWithTimestamp(callback) {
        var immediateTime = Date.now();
        var lapsedTime = Math.max(previousTime + 16, immediateTime);
        return setTimeout(function () {
            callback(previousTime = lapsedTime);
        }, lapsedTime - immediateTime);
    }

    /**
     * Queries the native function, prefixed function 
     * or use the setTimeoutWithTimestamp function.
     * @return {Function}
     */
    function queryRequestAnimationFrame() {
        if (Array.prototype.filter) {
            assignedRequestAnimationFrame = window['request' + aF] || window[vendors.filter(function (vendor) {
                if (window[vendor + rqAF] !== undefined) return vendor;
            }) + rqAF] || setTimeoutWithTimestamp;
        } else {
            return setTimeoutWithTimestamp;
        }
        if (!hasIOS6RequestAnimationFrameBug()) {
            return assignedRequestAnimationFrame;
        } else {
            return setTimeoutWithTimestamp;
        }
    }

    /**
     * Queries the native function, prefixed function 
     * or use the clearTimeoutWithId function.
     * @return {Function}
     */
    function queryCancelAnimationFrame() {
        var cancellationNames = [];
        if (Array.prototype.map) {
            vendors.map(function (vendor) {
                return ['Cancel', 'CancelRequest'].map(function (cancellationNamePrefix) {
                    cancellationNames.push(vendor + cancellationNamePrefix + aF);
                });
            });
        } else {
            return clearTimeoutWithId;
        }

        /**
         * Checks for the prefixed cancelAnimationFrame implementation.
         * @param  {Array} prefixedNames - An array of the prefixed names. 
         * @param  {Number} i - Iteration start point.
         * @return {Function} prefixed cancelAnimationFrame function.
         */
        function prefixedCancelAnimationFrame(prefixedNames, i) {
            var cancellationFunction = void 0;
            for (; i < prefixedNames.length; i++) {
                if (window[prefixedNames[i]]) {
                    cancellationFunction = window[prefixedNames[i]];
                    break;
                }
            }
            return cancellationFunction;
        }

        // Use truthly function
        assignedCancelAnimationFrame = window['cancel' + aF] || prefixedCancelAnimationFrame(cancellationNames, 0) || clearTimeoutWithId;

        // Check for iOS 6 bug
        if (!hasIOS6RequestAnimationFrameBug()) {
            return assignedCancelAnimationFrame;
        } else {
            return clearTimeoutWithId;
        }
    }

    function getRequestFn() {
        if (hasMozMismatch) {
            return setTimeoutWithTimestamp;
        } else {
            return queryRequestAnimationFrame();
        }
    }

    function getCancelFn() {
        return queryCancelAnimationFrame();
    }

    function setNativeFn() {
        if (hasMozMismatch) {
            window.requestAnimationFrame = setTimeoutWithTimestamp;
            window.cancelAnimationFrame = clearTimeoutWithId;
        } else {
            window.requestAnimationFrame = queryRequestAnimationFrame();
            window.cancelAnimationFrame = queryCancelAnimationFrame();
        }
    }

    /**
     * The type value "request" singles out firefox 4 - 10 and 
     * assigns the setTimeout function if plausible.
     */

    switch (type) {
        case 'request':
        case '':
            requestFrameMain = getRequestFn();
            break;

        case 'cancel':
            requestFrameMain = getCancelFn();
            break;

        case 'native':
            setNativeFn();
            break;
        default:
            throw new Error('RequestFrame parameter is not a type.');
    }
    return requestFrameMain;
}

/**
 * resizilla
 * Version:  0.6.0
 * License:  MIT
 * Copyright Julien Etienne 2015 - 2016 All Rights Reserved.
 * github:  https://github.com/julienetie/resizilla
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */
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

Copyright (c) 2015 Julien Etienne. MIT License */

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/

var request$1 = requestFrame('request');
var cancel$1 = requestFrame('cancel');
var self = window;
var store = {};

function requestTimeout(fn, delay) {
    var start = Date.now();

    function increment(d) {
        store.k = !store.k ? d : null;
        return store.k += 1;
    }

    function loop() {
        store.delta = Date.now() - start;
        store.callHandler = store.delta >= delay ? fn.call() : request$1(loop);
    }

    request$1(loop);
    return increment(0);
}

function handlerCallback(handler, delay, incept) {
    handler.apply(self, handler, delay, incept);
}

function resizilla(optionsHandler, delay, incept) {
    var options = {};
    resizilla.options = options;

    // Defaults
    options.orientationChange = true;
    options.useCapture = true;
    options.incept = false;

    if (optionsHandler.constructor === {}.constructor) {
        options.handler = optionsHandler.handler;
        options.delay = optionsHandler.delay;
        options.incept = optionsHandler.incept;
        options.orientationChange = optionsHandler.orientationChange;
        options.useCapture = optionsHandler.useCapture;
    } else {
        options.handler = optionsHandler;
        options.delay = delay;
        options.incept = typeof options.incept === 'undefined' ? options.incept : incept;
    }

    function debounce(handler, delay, incept) {
        var timeout;
        // console.log(delay)
        return function () {
            var lastCall = function lastCall() {
                timeout = 0;
                if (!incept) {
                    handlerCallback(handler, delay, incept);
                }
            };

            store.instant = incept && !timeout;
            cancel$1(timeout);
            timeout = requestTimeout(lastCall, delay);

            if (store.instant) {
                handlerCallback(handler, delay, incept);
            }
        };
    }

    function addWindowEvent(handler) {
        self.addEventListener('resize', handler, options.useCapture);
    }

    addWindowEvent(debounce(options.handler, options.delay, options.incept));

    if (options.orientationChange) {
        self.addEventListener('orientationchange', options.handler, options.useCapture);
    }
}

resizilla.destroy = function (type) {
    if (!type || type === 'all') {
        window.removeEventListener('resize', this.options.handler, this.options.useCapture);
        window.removeEventListener('orientationchange', this.options.handler, this.options.useCapture);
    } else {
        window.removeEventListener(type, this.options.handler, this.options.useCapture);
    }
};

function objectAssign() {
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
}

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

// @TODO remove run once and curry functions.
// ES5 15.2.3.9
// http://es5.github.com/#x15.2.3.9
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

/** 
 * Object Assign polyfill.
 */
objectAssign();

/** 
 * requestAnimationFrame polyfill
 */
var request = requestFrame('request');
var cancel = requestFrame('cancel');

/** 
 * CSS Units with pixel factor.
 */
var CSSUnits = [{
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

/** 
 * CSS Fixed units with pixel values.
 */
var CSSFixedUnits = [{
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

var aliasValueToPX = function aliasValueToPX(value) {
    return CSSFixedUnits.filter(function (metricInfo) {
        return value === metricInfo.unit;
    }).shift().PXValue;
};

var unitsToPX = function unitsToPX(value) {
    if (typeof value === 'number') {
        return value;
    }
    var suffix = value.replace(/[^a-z]+/gi, '');
    var numberValue = value.replace(/[^\d\.]*/g, '');

    var metricInfo = CSSUnits.filter(function (metricInfo) {
        return suffix === metricInfo.unit;
    }).shift();

    var PXValue = metricInfo ? numberValue * metricInfo.PXFactor : aliasValueToPX(value);
    return parseInt(PXValue);
};

var MimeticCurried = function MimeticCurried() {
    var _kill = false;

    return function (configurationObj) {
        /** 
         * Assing configuration as an object.
         */
        var configuration = configurationObj ? configurationObj : {};

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

        /** 
         * Merge configuration into defaults.
         */
        var overriddenDefaults = Object.assign(defaults, configuration);

        /** 
         * Prevent config mutations.
         */
        var config = Object.freeze(overriddenDefaults);

        /**
         * Only fire wasLastBeyondMobileWidth tthe desired content has loaded.
         * Default = DOMContentLoaded.
         */
        var loadEventOption = config.loadEvent === 'load' ? 'load' : 'DOMContentLoaded';

        /**
         * 
         */
        window.addEventListener(loadEventOption, function () {
            return initializeMimetic(config);
        });

        /** 
         * Simple compose.
         */
        var compose = function compose(a, b) {
            return function (c) {
                return a(b(c));
            };
        };

        /**
         * Sets and gets the root element.
         */
        var getRootElement = function getRootElement(element) {
            var elements = {
                html: function html(parent) {
                    return parent.documentElement;
                },
                body: function body(parent) {
                    return parent.body;
                }
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

        /** 
         * Gets the documents root font size.
         */
        var getFontSize = function getFontSize(doc) {
            return window.getComputedStyle(doc.documentElement, null).getPropertyValue('font-size');
        };

        /** 
         * converts pixels to REM values.
         */
        var pxToRem = function pxToRem(fontSizePx) {
            return parseInt(fontSizePx) / 16;
        };

        var isCallBackDefined = function isCallBackDefined(callback) {
            return typeof callback === 'function';
        };

        /** 
         * Calculate and apply the new font size to the root element.
         */
        var wasLastBeyondMobileWidth = true;
        var lastDevicePixelRatio = void 0;
        var hasScaleCallback = false;
        var hasZoomCallback = false;
        var hasResizeCallback = false;
        var resizeFonts = function resizeFonts(preCalculatedValues) {
            var timestamp = preCalculatedValues.timestamp,
                windowWidth = preCalculatedValues.windowWidth,
                windowOuterWidth = preCalculatedValues.windowOuterWidth,
                isDevicePixelRatioDefault = preCalculatedValues.isDevicePixelRatioDefault,
                relativeDesignWidth = preCalculatedValues.relativeDesignWidth,
                cutOff = preCalculatedValues.cutOff,
                rootElement = preCalculatedValues.rootElement,
                rootElementStyle = preCalculatedValues.rootElementStyle,
                designWidthRatio = preCalculatedValues.designWidthRatio,
                devicePixelRatioRound = preCalculatedValues.devicePixelRatioRound,
                rootFontSize = preCalculatedValues.rootFontSize,
                enableScale = preCalculatedValues.enableScale,
                preserveDevicePixelRatio = preCalculatedValues.preserveDevicePixelRatio,
                onScale = preCalculatedValues.onScale,
                onZoom = preCalculatedValues.onZoom,
                onResize = preCalculatedValues.onResize,
                clientWidth = preCalculatedValues.clientWidth,
                defaultDevicePixelRatio = preCalculatedValues.defaultDevicePixelRatio;

            /** 
             * Evaluated devicePixelRatio
             */

            var ddd = 1 / defaultDevicePixelRatio * devicePixelRatioRound;
            var evalDevicePixelRatio = preserveDevicePixelRatio ? devicePixelRatioRound : ddd;
            var resizeWithoutZoom = devicePixelRatioRound === lastDevicePixelRatio;

            if (resizeWithoutZoom || isDevicePixelRatioDefault || once('init')) {
                var isAboveDesignWidth = windowWidth > relativeDesignWidth;

                if (windowWidth > cutOff) {
                    /** 
                     * Set the rootElement's font size.
                     */
                    if (enableScale) {
                        rootElementStyle.fontSize = (rootFontSize * designWidthRatio * evalDevicePixelRatio).toFixed(6) + 'rem';
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

            // console.log('resizeWithoutZoom', resizeWithoutZoom)
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
            if (resizeWithoutZoom && hasScaleCallback) {
                onScale(clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound);
            }

            if (!resizeWithoutZoom && hasZoomCallback) {
                onZoom({ clientWidth: clientWidth, windowWidth: windowWidth, evalDevicePixelRatio: evalDevicePixelRatio, devicePixelRatioRound: devicePixelRatioRound, ddd: ddd });
            }

            if (hasResizeCallback) {
                onResize(clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound);
            }

            /** 
             * Set the last ratio from the current.
             */
            lastDevicePixelRatio = devicePixelRatioRound;
        };

        /** 
         * Set Root Font Size.
         */
        var setRootFontSizeCurried = function setRootFontSizeCurried() {
            var requestId;
            var outerWidth;
            var outerHeight;
            return function (settings) {
                /** 
                 * Destructured settings.
                 */
                var window = settings.window,
                    rootElement = settings.rootElement,
                    rootElementStyle = settings.rootElementStyle,
                    rootFontSize = settings.rootFontSize,
                    initialOuterHeight = settings.initialOuterHeight,
                    initialOuterWidth = settings.initialOuterWidth,
                    relativeDesignWidth = settings.relativeDesignWidth,
                    mobileWidth = settings.mobileWidth,
                    cutOffWidth = settings.cutOffWidth,
                    enableScale = settings.enableScale,
                    preserveDevicePixelRatio = settings.preserveDevicePixelRatio,
                    onScale = settings.onScale,
                    onZoom = settings.onZoom,
                    onResize = settings.onResize,
                    mobileWidthPX = settings.mobileWidthPX,
                    cutOffWidthPX = settings.cutOffWidthPX;

                /** 
                 * Get Real time values.
                 */

                var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
                    return p.toString() === "[object SafariRemoteNotification]";
                }(!window['safari'] || safari.pushNotification);
                var windowWidth = window.innerWidth;
                var windowOuterWidth = window.outerWidth;
                var windowOuterHeight = window.outerHeight;
                var cliWidth = document.documentElement.clientWidth;
                var safarIDPR = Number(windowOuterWidth / cliWidth);
                var iEDPR = Number(screen.deviceXDPI / screen.logicalXDPI);

                var devicePixelRatioRound = Math.abs(iEDPR ? iEDPR : isSafari ? safarIDPR : devicePixelRatio);
                var windowResize = windowOuterWidth !== outerWidth && windowOuterHeight !== outerHeight;
                var clientWidth = parseInt(cliWidth * devicePixelRatioRound);
                var defaultDevicePixelRatio = Math.round(cliWidth * devicePixelRatioRound / windowOuterWidth);

                console.log(devicePixelRatioRound, isSafari);
                /**
                 * Cancel previous requestAnimationFrame.
                 */
                cancel(requestId);

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
                var designWidthRatio = windowWidth / relativeDesignWidth;

                /**
                 * Check to see if the window is at the default zoom level.
                 */
                var isDevicePixelRatioDefault = defaultDevicePixelRatio === devicePixelRatioRound;

                /** 
                 * The minimum veiwport size to not react to.
                 */
                var cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;

                /**
                 * Mutate on next available frame.
                 */
                requestId = request(function (timestamp) {
                    return resizeFonts({
                        timestamp: timestamp,
                        windowWidth: windowWidth,
                        windowOuterWidth: windowOuterWidth,
                        isDevicePixelRatioDefault: isDevicePixelRatioDefault,
                        relativeDesignWidth: relativeDesignWidth,
                        cutOff: cutOff,
                        rootElement: rootElement,
                        rootElementStyle: rootElementStyle,
                        designWidthRatio: designWidthRatio,
                        devicePixelRatioRound: devicePixelRatioRound,
                        rootFontSize: rootFontSize,
                        enableScale: enableScale,
                        preserveDevicePixelRatio: preserveDevicePixelRatio,
                        onScale: onScale,
                        onZoom: onZoom,
                        onResize: onResize,
                        clientWidth: clientWidth,
                        defaultDevicePixelRatio: defaultDevicePixelRatio
                    });
                });

                /**
                 * Updated Outer browser dimensions.
                 */
                outerWidth = windowOuterWidth;
                outerHeight = windowOuterWidth;
            };
        };

        /**
         * Initialize Mimetic.  
         */
        function initializeMimetic(config) {
            var loadEvent = config.loadEvent,
                mobileWidth = config.mobileWidth,
                rootSelector = config.rootSelector,
                scaleDelay = config.scaleDelay,
                cutOffWidth = config.cutOffWidth;

            /** 
             * Use the rootSelector as the root element.
             */

            var rootElement = getRootElement(rootSelector);

            /** 
             * Obtains Root font size as REM value from a given PX value string.
             */
            var getRootREMValue = compose(pxToRem, getFontSize);

            /** 
             * Get root font size.
             */
            var rootFontSize = getRootREMValue(document);

            /** 
             * Mobile width in pixels.
             */
            var mobileWidthPX = unitsToPX(mobileWidth);

            /** 
             * Cut odd width in pixels.
             */
            var cutOffWidthPX = unitsToPX(cutOffWidth);

            // @TODO remove config, only use what is needed.
            /** 
             * Provide parameters to setRootFontSize.
             */
            var settings = Object.assign({
                initialOuterHeight: window.outerHeight,
                initialOuterWidth: window.outerWidth,
                rootFontSize: rootFontSize,
                rootElement: rootElement,
                rootElementStyle: rootElement.style,
                window: window,
                mobileWidthPX: mobileWidthPX,
                cutOffWidthPX: cutOffWidthPX
            }, config);

            /** 
             * Sets variables for setRootFontSize.
             */
            var setRootFontSize = setRootFontSizeCurried();

            /** 
             * Set Root font size.
             */
            setRootFontSize(settings);

            /**
             * On resize set Root font size and action callbacks.
             */

            resizilla(function () {
                if (!_kill) {
                    setRootFontSize(settings);
                }
            }, scaleDelay, false);
        }
        return {
            kill: function kill() {
                return _kill = true;
            },
            revivie: function revivie() {
                return _kill = false;
            }
        };
    };
};

var Mimetic = MimeticCurried();

return Mimetic;

})));
