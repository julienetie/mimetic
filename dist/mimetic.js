/**
 * mimetic
 * Version:  0.4.0
 * License:  MIT
 * Copyright Julien Etienne 2015 - 2016 All Rights Reserved.
 * github:  https://github.com/julienetie/mimetic.git
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */
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
(function (window) {


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/
(function(w){
  
  // This fix addresses an iOS bug, so return early if the UA claims it's something else.
  var ua = navigator.userAgent;
  if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
    return;
  }

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
    x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }
  
    function checkTilt( e ){
    aig = e.accelerationIncludingGravity;
    x = Math.abs( aig.x );
    y = Math.abs( aig.y );
    z = Math.abs( aig.z );
        
    // If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
      if( enabled ){
        disableZoom();
      }         
        }
    else if( !enabled ){
      restoreZoom();
        }
    }
  
  w.addEventListener( "orientationchange", restoreZoom, false );
  w.addEventListener( "devicemotion", checkTilt, false );

})( this );

/**
 *  request-frame - requestAnimationFrame & cancelAnimationFrame polyfill for
 *   optimal cross-browser development.
 *    Version:  v1.4.0
 *     License:  MIT
 *      Copyright Julien Etienne 2015 All Rights Reserved.
 *        github:  https://github.com/julienetie/request-frame
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */
(function (window) {

/**
 * @param  {String} type - request | cancel | native.
 * @return {Function} Timing function.
 */
function requestFrame(type) {
    // The only vendor prefixes required.
    var vendors = ['moz', 'webkit'],

        // Disassembled timing function abbreviations.
        aF = 'AnimationFrame',
        rqAF = 'Request' + aF,

        // Final assigned functions.
        assignedRequestAnimationFrame,
        assignedCancelAnimationFrame,

        // Initial time of the timing lapse.
        previousTime = 0,

        mozRAF = window.mozRequestAnimationFrame,
        mozCAF = window.mozCancelAnimationFrame,

        // Checks for firefox 4 - 10 function pair mismatch.
        hasMozMismatch = mozRAF && !mozCAF,

        func;

    // Date.now polyfill, mainly for legacy IE versions.
    if (!Date.now) {
        Date.now = function() {
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
        var webkitRAF = window.webkitRequestAnimationFrame,
            rAF = window.requestAnimationFrame,

            // CSS/ Device with max for iOS6 Devices.
            hasMobileDeviceWidth = screen.width <= 768 ? true : false,

            // Only supports webkit prefixed requestAnimtionFrane.
            requiresWebkitprefix = !(webkitRAF && rAF),

            // iOS6 webkit browsers don't support performance now.
            hasNoNavigationTiming = window.performance ? false : true,

            iOS6Notice = 'setTimeout is being used as a substitiue for' +
            'requestAnimationFrame due to a bug within iOS 6 builds',

            hasIOS6Bug = requiresWebkitprefix && hasMobileDeviceWidth &&
            hasNoNavigationTiming;

        function bugCheckresults(timingFnA, timingFnB, notice) {
            if (timingFnA || timingFnB) {
                console.warn(notice);
                return true;
            } else {
                return false;
            }
        }

        function displayResults() {
            if (hasIOS6Bug) {
                return bugCheckresults(webkitRAF, rAF, iOS6Notice);
            } else {
                return false;
            }
        }

        return displayResults();
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
        var immediateTime = Date.now(),
            lapsedTime = Math.max(previousTime + 16, immediateTime);
        return setTimeout(function() {
                callback(previousTime = lapsedTime);
            },
            lapsedTime - immediateTime);
    }

    /**
     * Queries the native function, prefixed function 
     * or use the setTimeoutWithTimestamp function.
     * @return {Function}
     */
    function queryRequestAnimationFrame() {
        if (Array.prototype.filter) {
            assignedRequestAnimationFrame = window['request' + aF] ||
                window[vendors.filter(function(vendor) {
                    if (window[vendor + rqAF] !== undefined)
                        return vendor;
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
            vendors.map(function(vendor) {
                return ['Cancel', 'CancelRequest'].map(
                    function(cancellationNamePrefix) {
                        cancellationNames.push(vendor +
                            cancellationNamePrefix + aF);
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
            var cancellationFunction;
            for (; i < prefixedNames.length; i++) {
                if (window[prefixedNames[i]]) {
                    cancellationFunction = window[prefixedNames[i]];
                    break;
                }
            }
            return cancellationFunction;
        }

        // Use truthly function
        assignedCancelAnimationFrame = window['cancel' + aF] ||
            prefixedCancelAnimationFrame(cancellationNames, 0) ||
            clearTimeoutWithId;

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
            func = getRequestFn();
            break;

        case 'cancel':
            func = getCancelFn();
            break;

        case 'native':
            setNativeFn();
            break;
        default:
            throw new Error('RequestFrame parameter is not a type.');
    }
    return func;
}


// Node.js/ CommonJS
if (typeof module === 'object' && typeof module.exports === 'object') {
module.exports = exports = requestFrame;
}

// AMD
else if (typeof define === 'function' && define.amd) {
define(function() {
  return requestFrame;
});
}

// Default to window as global
else if (typeof window === 'object') {
window.requestFrame = requestFrame;
}
/* global -module, -exports, -define */

}((typeof window === "undefined" ? {} : window)));

var request = requestFrame('request');
var cancel = requestFrame('cancel');
var self = this;
var store = {};


function requestTimeout(fn, delay) {
    var start = Date.now();

    function increment(d) {
        store.k = !store.k ? d : null;
        return store.k += 1;
    }

    function loop() {
        store.delta = Date.now() - start;
        store.callHandler = store.delta >= delay ? fn.call() : request(loop);
    }

    request(loop);
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

    if(optionsHandler.constructor === {}.constructor){
        options.handler = optionsHandler.handler;
        options.delay = optionsHandler.delay;
        options.incept = optionsHandler.incept;
        options.orientationChange = optionsHandler.orientationChange;
        options.useCapture = optionsHandler.useCapture;
    }else{
        options.handler = optionsHandler;
        options.delay = delay;
        options.incept = typeof options.incept === 'undefined' ? options.incept : incept;
    }


    function debounce(handler, delay, incept) {
        var timeout;

        return function() {
            var lastCall = function() {
                timeout = 0;
                if (!incept) {
                    handlerCallback(handler, delay, incept);
                }
            };

            store.instant = incept && !timeout;
            cancel(timeout);
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


    if(options.orientationChange){
        self.addEventListener('orientationchange', options.handler, options.useCapture);
    }
}


resizilla.destroy = function(type) {
    if(!type || type === 'all'){
        window.removeEventListener('resize', this.options.handler, this.options.useCapture);
        window.removeEventListener('orientationchange', this.options.handler, this.options.useCapture);
    }else{
        window.removeEventListener(type, this.options.handler, this.options.useCapture);
    }
};

// Node.js/ CommonJS
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = exports = resizilla;
}

// AMD
else if (typeof define === 'function' && define.amd) {
    define(function() {
        return resizilla;
    });
}

// Default to window as global
else if (typeof window === 'object') {
    window.resizilla = resizilla;
}
/* global -module, -exports, -define */

}((typeof window === "undefined" ? {} : window)));

(function(window, document, undefined) {
    'use strict';

    // unit  name  equivalence
    // cm  centimeters 1cm = 96px/2.54
    // mm  millimeters 1mm = 1/10th of 1cm
    // q quarter-millimeters 1q = 1/40th of 1cm
    // in  inches  1in = 2.54cm = 96px
    // pc  picas 1pc = 1/6th of 1in
    // pt  points  1pt = 1/72th of 1in
    // px  pixels  1px = 1/96th of 1in

    var options = {};

    // Design to this width
    options.designWidth = 1024;

    // Add tags to exclude here
    options.excludeTags = ['script', 'canvas'];

    // Interpolate tags to preserve animation state
    options.interpolateTags = []

    // Scale font-size
    options.mimeticFonts = true;

    // Scale line-height 
    options.mimeticLineHt = true;

    // Scale margin 
    options.mimeticMargin = true;

    // Scale padding  
    options.mimeticPadding = true;

    // For designs that exceed the overflow of the initial contiaining block.
    options.infinateCanvas = false;

    // Performance {0} vs cosmetic accuracy {4}
    options.fidelity = 3;

  var CSSUnits = [{
    unit: 'px',
    //  1 / 16
    REMFactor: 0.0625
  }, {
    unit: 'pt',
    // 96 / 72 / 16
    REMFactor: 0.08333333333
  }, {
    unit: 'em',
    // 1
    REMFactor: 1
  }, {
    unit: 'rem',
    // 1
    REMFactor: 1
  }];


  var CSSFixedUnits = [{
    unit: 'xx-small',
    // 9 / 16
    REMValue: 0.5625
  }, {
    unit: 'x-small',
    // 10 / 16
    REMValue: 0.625
  }, {
    unit: 'small',
    // 13 / 16
    REMValue: 0.8125
  }, {
    unit: 'normal',
    // 16 / 16
    REMValue: 1
  }, {
    unit: 'medium',
    // 16 / 16
    REMValue: 1
  }, {
    unit: 'large',
    // 18 / 16
    REMValue: 1.125
  }, {
    unit: 'x-large',
    // 24 / 16
    REMValue: 1.5
  }, {
    unit: 'xx-large',
    // 32 / 16
    REMValue: 2
  }];


  function mimeticFn(options, CSSUnits, CSSFixedUnits) {

    var
      i,
      designWidthRatio,
      tagNames = [],
      fontSizeArr = [],
      lineHtArr = [],
      marginArr = [],
      paddingArr = [],
      tmpMgVal = [],
      tmpPdVal = [];


    var allElements = document.getElementsByTagName('body')[0].getElementsByTagName('*');
    var allElementsArr = [].slice.call(allElements);


    function aliasValueToREM(value) {
      return CSSFixedUnits.filter(function(metricInfo) {
        return value === metricInfo.unit;
      }).shift().REMValue;
    }


    function unitsToREM(value) {
      var suffix = value.replace(/[^a-z]+/gi, '');
      var numberValue = value.replace(/[^\d\.]*/g, '');
      var remValue;

      var metricInfo = CSSUnits.filter(function(metricInfo) {
          return suffix === metricInfo.unit;
        })
        .shift();

      remValue = metricInfo ? numberValue * metricInfo.REMFactor : aliasValueToREM(value);
      return remValue;
    }


    function computedStyle(element, property) {
      return window.getComputedStyle(element, null).getPropertyValue(property);
    }

    function sanitizeShorthand(value) {
      var propValDef = value.split(' ');

      var newShorthandArr = propValDef.map(function(val) {
        return unitsToREM(val);
      });

      return newShorthandArr;
    }

    function setBoundaryProp(propType, tempPropVal, propArr, iterI, designWidthRatio) {
      tempPropVal = [];
      i = 0;
      while (i < propArr[iterI].length) {

        tempPropVal.push(parseFloat(designWidthRatio * propArr[iterI][i]).toFixed(2) + 'rem');
        if (i === propArr[iterI].length - 1) {
          return tempPropVal.join(' ');
        }
        i++;
      }

    }



    function processElements() {
      var remove = options.excludeTags;
      var cleanElements = allElementsArr.filter(function(element, i) {
        return remove.every(function(excludeValue) {
          return excludeValue !== element.nodeName.toLowerCase();
        });
      });

      cleanElements.forEach(function(element) {
        fontSizeArr.push(
          unitsToREM(
            computedStyle(
              element, 'font-size')
          )
        );

        lineHtArr.push(
          unitsToREM(
            computedStyle(
              element, 'line-height')
          )
        );

        marginArr.push(
          sanitizeShorthand(
            computedStyle(
              element, 'margin')
          )
        );

        paddingArr.push(
          sanitizeShorthand(
            computedStyle(
              element, 'padding')
          )
        );
      });

      return cleanElements;
    }





    function mimeticScale() {
      var cleanElements = processElements();
      var winWidth = window.innerWidth;

      for (var i = 0; i < cleanElements.length; i++) {
        if (winWidth > options.designWidth) {
          var designWidthRatio = winWidth / options.designWidth;
          // FONT SIZE
          cleanElements[i].style.fontSize = parseFloat(designWidthRatio * fontSizeArr[i]).toFixed(2) + 'rem';
          // LINE HEIGHT
          cleanElements[i].style.lineHeight = parseFloat(designWidthRatio * lineHtArr[i]).toFixed(3) + 'rem';
          // MARGIN
          cleanElements[i].style.margin = setBoundaryProp('margin', tmpMgVal, marginArr, i, designWidthRatio);
          // PADDING
          cleanElements[i].style.padding = setBoundaryProp('padding', tmpPdVal, paddingArr, i, designWidthRatio);
        } else {
          // When below 1025 the font-size property is removed from the style attribute
          // preventing rendering issues for downsizing. 
          var inlineStyle = cleanElements[i].getAttribute('style');
          var inlineStyleAsArray;
          if (inlineStyle) {
            var test = inlineStyle
              .split('; ')
              .filter(function(style) {
                // 1) exclude elements from being modified when within 1024, 
                // 2) animate using classes only, 
                // 3) ??? 
                return !['font-size', 'line-height', 'margin', 'padding'].some(function(property) {
                  return style.indexOf(property) >= 0;
                });
              }).join('; ');
            cleanElements[i].setAttribute('style', test);
          }
        }
      }
    }


    mimeticScale();
    resizilla(mimeticScale, 150, false);
  }

  window.addEventListener("DOMContentLoaded", function() {
    mimeticFn(options, CSSUnits, CSSFixedUnits);
  });
}(window, document, undefined));
