import requestFrame from 'request-frame';
import resizilla from '../libs/resizilla';
import isPlainObject from '../libs/is-plain-object';
import objectAssign from '../libs/object-assign';
import runOnce from 'run-once';
import { debounce } from '../libs/volve';

/*
  Browser support: 
  Safari IOS 7+ 
  IE Mobile 11

  Internet Explorer 9+
  Edge
  Chrome
  Opera
  Firefox
 */


let autoInitialization = true;
let newSettings;

/**
 * Polyfills
 */
objectAssign();

// Yes webkit but not modern chrome.  Has devicePixelRatio        
let devicePixelRatioType = window.webkitURL && !window.chrome ? 'safari-like' : 'supported';
devicePixelRatioType = window.devicePixelRatio ? devicePixelRatioType : 'not-supported';
/**
 * Auto initate if main function is not called.
 */
// window.addEventListener("DOMContentLoaded", () => {
//     if (autoInitialization) {
//         mimeticScale();
//     } else {
//         mimeticScale(newSettings);
//     }d
// });


/**
 * Mimetic runs before DOMContentLoaded if called
 * and passes options to override the defautls.
 * @param {Object} - Options object.
 */
function mimetic(optionOverrides) {
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
    defaults.delay = 16;
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
    let lastClientWidth;
    let clientWidth;
    let newdevicePixelRatio;
    let lastDevicePixelRatio;
    let newDevicePixelRatio;
    const mutateREMStyles = () => {
        console.info('mutateREMStyles');
        const windowWidth = window.innerWidth;
        const windowOuterWidth = window.outerWidth;
        const windowOuterHeight = window.outerHeight;
        const windowResize = windowOuterWidth !== initialOuterWidth && windowOuterHeight !== initialOuterHeight;
        clientWidth = parseInt(document.documentElement.clientWidth * devicePixelRatio);
        const defaultDevicePixelRatio = parseInt(clientWidth / screen.width) || devicePixelRatio;

        newdevicePixelRatio = devicePixelRatio.toFixed(3);

        if (lastClientWidth === undefined) {
            lastClientWidth = clientWidth;
        }
        //canReszie , windowResize
        if (true || runOnce('mutateREMStyles')) {

            const designWidthRatio = windowWidth / designWidth;


            const isDevicePixelRatioDefault = defaultDevicePixelRatio === devicePixelRatio;
            /**
             * Cancel previous requestAnimationFrame.
             */
            cancel(initalStyles.requestFrameId);

            /**
             * Mutate on next available frame.
             */
            initalStyles.requestFrameId = request(() => {
                const dpr = windowWidth === windowOuterWidth ? 1 : window.devicePixelRatio;

                // console.log(newdevicePixelRatio, lastDevicePixelRatio);

                if (newdevicePixelRatio === lastDevicePixelRatio || isDevicePixelRatioDefault || runOnce('init')) {
                    const isAboveDesignWidth = windowWidth > designWidth;

                    if (windowWidth > mobileWidth) {
                        // console.info('Scale fonts, large screen')
                        switch (devicePixelRatioType) {
                            case 'supported':
                                // console.log('supported')
                                rootElement.style.fontSize = isAboveDesignWidth ? (initalStyles.rootFontSizeREM * designWidthRatio * dpr).toFixed(6) + 'rem' : initalStyles.rootFontSizeREM + 'rem';
                                break;
                            case 'safari-like':
                                // console.log('safari-like')
                                rootElement.style.fontSize = isAboveDesignWidth ? (initalStyles.rootFontSizeREM * designWidthRatio * (window.outerWidth / window.innerWidth) / intialDevicePixelRatio).toFixed(6) + 'rem' : initalStyles.rootFontSizeREM + 'rem';
                                break;
                            case 'not-supported':
                            default:
                                if (canReszie) {
                                    // console.log('not-supported')
                                    rootElement.style.fontSize = isAboveDesignWidth ? (initalStyles.rootFontSizeREM * designWidthRatio).toFixed(6) + 'rem' : initalStyles.rootFontSizeREM + 'rem';
                                }
                        }

                        once = true;
                        // lastClientWidth = clientWidth;
                    } else if (once) {
                        console.info('No scale, mobile width')
                            // rootElement.removeAttribute("style");
                        once = false;
                    }

                }
                lastDevicePixelRatio = newdevicePixelRatio;
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

        if (devicePixelRatioType === 'not-supported') {
            /**
             * Render on resize.
             */
            html.addEventListener('mouseleave', () => {
                console.log('mouseleave')
                canReszie = true;
            })


            // window.addEventListener('blur', () => {
            //   canReszie = true;
            // })


            html.addEventListener('mouseenter', () => {
                console.log('mouseenter')
                    // mutateREMStyles();
                canReszie = false;
            })


            // window.addEventListener('focus', () => {
            //   // mutateREMStyles();
            //   canReszie = false;
            // })

        }



        resizilla(mutateREMStyles, delay, false);
    }
}



/*

MIMETIC AS A VIEWPORT ENGINE

Step 1: 
    
    Preferably place the script inline within the <head> of your HTML.
    Or load the srouce within the head. As Mimetic is a stylistic feature 
    and prime dependency it should be loaded before the main content. 
    Despite placing, Mimetic will execute after DOMContentLoaded "by default". 

Step 2: Initalize.
  
    Mimetic();

Optional:
  
    Pass in options to customise Mimetic's behavior:

    Mimetic({
      mobileWidth: '40em',
      preserveDevicePixelRatio: false
    });


MIMETIC AS A ZOOM DETECTION LIBRARY

    Mimetic({
      scale: false,
      onZoom: (zoomLevel)=> console.log(zoomLevel)
    });




Kill Mimetic 

    const mimetic = Mimetic();

    mimetic.kill();

Revive Mimetic after kill.

    mimetic.revivie();
*/




const Mimetic = (configurationObj) => {
    /** 
     * Assing configuration as an object.
     */
    const configuration = configurationObj ? configurationObj : {};


    /** 
     * Default config properties if not defined.
     */
    const defaults = {
        loadEvent: 'DOMContentLoaded', // Load type @@@@@
        mobileWidth: 640, // Width before disabling for mobile phone devices.
        scaleDelay: 33, // Miliseconds between calls on resize.
        preserveDevicePixelRatio: false, // Preserve the device pixel ratio on zoom.
        rootElement: 'html', // Use the HTML element as the root element.
        onScale: (viewPortWidth, clientWidth) => {}, // On Scale 
        onZoom: (devicePixelRatio) => {}, // On Zoom
        onResize: (viewPortWidth, clientWidth, devicePixelRatio) => {} // On Resize
    }


    /** 
     * Merge configuration into defaults.
     */
    const overriddenDefaults = Object.assign(defaults, configuration);


    /** 
     * Prevent config mutations.
     */
    const config = Object.freeze(overriddenDefaults);


    /**
     * Only fire once tthe desired content has loaded.
     * Default = DOMContentLoaded.
     */
    const loadEventOption = config.loadEvent === 'load' ? 'load' : 'DOMContentLoaded';
    window.addEventListener(loadEventOption, () => initializeMimetic(config));


    const unitsToPX = (value) => {
        //
    }

    const getRootElement = (element) => {
        const elements = {
            html: (parent) => parent.documentElement,
            body: (parent) => parent.body
        }

        if (element instanceof Element) {
            if (element.nodeType === 1) {
                return element;
            } else {
                // @TODO Throw new error.
            }
        }
        return elements.hasOwnProperty(element) ? elements[element](document) : document.querySelector(element);
    }

    /**
     * Initialize Mimetic.  
     */
    function initializeMimetic(config) {
        const { loadEvent, mobileWidth } = config;
        // console.log(loadEvent, mobileWidth);
        console.log(getRootElement('body'));
    }


}

export default Mimetic;
