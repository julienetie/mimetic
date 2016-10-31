/*
  Browsers manually tested: 
  - IE11+
  - Edge+
  - FF 18+ 
  - CH 33+
  - OP 18+
  - SF 6.2+
*/


import resizilla from '../libs/resizilla';
import requestFrame from 'request-frame';
import isPlainObject from '../libs/is-plain-object';
import objectAssign from '../libs/object-assign';
import runOnce from 'run-once';
import { debounce } from '../libs/volve';

let autoInitialization = true;
let newSettings;

/**
 * Polyfills
 */
objectAssign();


let DPR = !!window.webkitURL && !window.chrome ? false : true;
/**
 * Auto initate if main function is not called.
 */
window.addEventListener("DOMContentLoaded", () => {
  if (autoInitialization) {
    mimeticScale();
  } else {
    mimeticScale(newSettings);
  }
});


/**
 * Mimetic runs before DOMContentLoaded if called
 * and passes options to override the defautls.
 * @param {Object} - Options object.
 */
export default function mimetic(optionOverrides) {
  if (isPlainObject(optionOverrides)) {
    if (optionOverrides.disable) {
      resizilla.destroy('all');
      return;
    }
  }

  newSettings = optionOverrides;
  autoInitialization = false;
}


const mimeticScale = (options) => {
  const defaults = {};
  const initalStyles = {};
  const request = requestFrame('request');
  const cancel = requestFrame('cancel');
  const html = document.firstElementChild || document.getElementsByTagName('html').item(0);
  const intialDevicePixelRatio = window.devicePixelRatio || 1;
  let canReszie = false;

  initalStyles.requestFrameId;

  defaults.designWidth = 1024;
  defaults.mobileWidth = 640;
  defaults.delay = 17;
  defaults.transformType = 'incremental'; // incremental | resizeStop | suspended    incremental = default
  defaults.rootElement = 'html'; // 'html' | 'body'                         html = default
  defaults.bezierCurve = null; // TBA
  defaults.autostart = true; // true 
  defaults.disable = false; // false 


  /**
   * Creates setting by overriding defaults with options.
   */
  const settings = Object.assign(defaults, options);


  /**
   * Quick one time references.
   */
  const designWidth = settings.designWidth;
  const mobileWidth = settings.mobileWidth;
  const delay = settings.delay;

  /* 
    Transform Type

    TBA.
  */
  const transformType = settings.transformType;

  /*
    Root Element

    Only when using REM units, the HTML tag becomes
    the root font-sie element. The body element is 
    only effective as the root font size when the 
    em unit is used. Therefore can be used as a 
    fallback if changing the HTML element is found 
    to not be feasable.
  */
  const rootElement = settings.rootElement !== 'body' ? html : document.body;

  /* 
    Bezier Curve

    TBA.
  */
  const bezierCurve = settings.bezierCurve;
  const autostart = settings.autostart;
  const disable = settings.disable;


  function getFontSize(element) {
    if (element.nodeType === element.ELEMENT_NODE) {
      return window.getComputedStyle(document.body, null).fontSize
    }
  }



  const aliasValueToREM = (value) => {
    return CSSFixedUnits.filter(function(metricInfo) {
      return value === metricInfo.unit;
    }).shift().REMValue;
  }


  const unitsToREM = (value) => {
    const REMFactor = 0.0625;
    return value.replace(/[^\d\.]*/g, '') * REMFactor;
  }

  const initalRootFontSizePx = getFontSize(rootElement);

  var initialOuterWidth;
  var initialOuterHeight;
  /**
   * Eliminate measuring from the root font size if expected as 16px.
   */
  const measureInitialValues = () => {
      initialOuterWidth = window.outerWidth;
      initialOuterHeight = window.outerHeight;
    if (initalRootFontSizePx === '16px') {
      initalStyles.rootFontSizeREM = 1;
    } else {
      initalStyles.rootFontSizeREM = unitsToREM(getFontSize(rootElement));
    }
  }

  var info = document.getElementById('info');
  /**
   * Mutate the root REM value.
   */
  let once = true;
  const mutateREMStyles = () => {
    const windowWidth = window.innerWidth;
    const windowOuterWidth = window.outerWidth;
    const windowOuterHeight = window.outerHeight;
    const windowResize = windowOuterWidth !== initialOuterWidth && windowOuterHeight !== initialOuterHeight;
    //canReszie , windowResize
    if (true || runOnce('mutateREMStyles')) {

      const designWidthRatio = windowWidth / designWidth;

      /**
       * Cancel previous requestAnimationFrame.
       */
      cancel(initalStyles.requestFrameId);

      /**
       * Mutate on next available frame.
       */
      initalStyles.requestFrameId = request(() => {
        if (windowWidth > mobileWidth) {
            if(!DPR){
              rootElement.style.fontSize = (initalStyles.rootFontSizeREM * designWidthRatio * (window.outerWidth / window.innerWidth) / intialDevicePixelRatio).toFixed(6)  + 'rem';
            }else{
              rootElement.style.fontSize = (initalStyles.rootFontSizeREM * designWidthRatio * DPR / intialDevicePixelRatio ).toFixed(6)  + 'rem';
            }
          //       info.innerHTML = `root:  ${initalStyles.rootFontSizeREM} dwr:  ${designWidthRatio} dpr:  ${} ${DPR}`;
          // rootElement.style.fontSize = (initalStyles.rootFontSizeREM * designWidthRatio * (DPR || window.outerWidth / window.innerWidth) ).toFixed(6)  + 'rem';
          once = true
        } else if (once) {
          rootElement.removeAttribute("style");
          once = false;
        }
      });
     initialOuterWidth = windowOuterWidth;
     initialOuterHeight = windowOuterWidth;
    }
  }

  if (autostart) {
    /** 
     * Assign rootFontSizeREM.
     */
    measureInitialValues();


    /** 
     * Trigger render of new REM values.
     */
    mutateREMStyles();


    /**
     * Render on resize.
     */
    // html.addEventListener('mouseleave', () => {
    //   canReszie = true;
    // })


    // window.addEventListener('blur', () => {
    //     canReszie = true; 
    // })


    // html.addEventListener('mouseenter', () => {
    //   // mutateREMStyles();
    //   canReszie = false;
    // })


    // window.addEventListener('focus', () => {
    //     // mutateREMStyles();
    //     canReszie = false;
    // })


    resizilla(mutateREMStyles, delay, false);
  }
}


/* TODO

  - some sort of local storage to save the size after transition end. 
  - stupid amount of options.
*/ 