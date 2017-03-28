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
        loadEvent: 'DOMContentLoaded', // Load type
        mobileWidth: 640, // Width before disabling for mobile phone devices.
        scaleDelay: 33, // Miliseconds between calls on resize.
        preserveDevicePixelRatio: false, // Preserve the device pixel ratio on zoom. @TODO
        rootSelector: 'html', // Use the HTML element as the root element. 
        onScale: (viewPortWidth, clientWidth) => {}, // On Scale @TODO
        onZoom: (devicePixelRatio) => {}, // On Zoom @TODO
        onResize: (viewPortWidth, clientWidth, devicePixelRatio) => {}, // On Resize, @TODO
        cutOffWidth: 0, // The minimum width to disable resizing.
        relativeDesignWidth: 1024 // The width relative to the font size.
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
     * Only fire wasLastBeyondMobileWidth tthe desired content has loaded.
     * Default = DOMContentLoaded.
     */
    const loadEventOption = config.loadEvent === 'load' ? 'load' : 'DOMContentLoaded';


    /**
     * 
     */
    window.addEventListener(loadEventOption, () => initializeMimetic(config));


    /** 
     * Simple compose.
     */
    const compose = (a, b) => {
        return function(c) {
            return a(b(c));
        };
    };


    /**
     * Sets and gets the root element.
     */
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
     * Gets the documents root font size.
     */
    const getFontSize = (doc) => window.getComputedStyle(doc.documentElement, null).getPropertyValue('font-size');


    /** 
     * converts pixels to REM values.
     */
    const pxToRem = (fontSizePx) => parseInt(fontSizePx) / 16;



    /** 
     * Calculate and apply the new font size to the root element.
     */
    let wasLastBeyondMobileWidth = true;
    let lastDevicePixelRatio;
    const resizeFonts = (preCalculatedValues) => {
        const {
            timestamp,
            windowWidth,
            windowOuterWidth,
            devicePixelRatio,
            isDevicePixelRatioDefault,
            relativeDesignWidth,
            cutOff,
            rootElement,
            rootElementStyle,
            designWidthRatio,
            rootFontSize
        } = preCalculatedValues;

        const dpr = windowWidth === windowOuterWidth ? 1 : devicePixelRatio;
        const currentDevicePixelRatio = devicePixelRatio.toFixed(3);

        if (currentDevicePixelRatio === lastDevicePixelRatio || isDevicePixelRatioDefault || runOnce('init')) {
            const isAboveDesignWidth = windowWidth > relativeDesignWidth;

            if (windowWidth > cutOff) {
                /** 
                 * Set the rootElement's font size.
                 */
                rootElementStyle.fontSize = (rootFontSize * designWidthRatio * dpr).toFixed(6) + 'rem';


                /** 
                 * Indicate that the viewport has exceeded the mobileWidth.
                 */
                wasLastBeyondMobileWidth = true;
            } else if (wasLastBeyondMobileWidth) {
                /** 
                 * Prevent odd behaviour when refreshed.
                 */
                rootElement.removeAttribute("style");

                /** 
                 * Reset as within mobileWidth.
                 */
                wasLastBeyondMobileWidth = false;
            }
        }

        /** 
         * Set the last ratio from the current.
         */
        lastDevicePixelRatio = currentDevicePixelRatio;
    };



    /** 
     * Set Root Font Size.
     */
    // Values to curry 
    // let wasLastBeyondMobileWidth = true;
    // let currentDevicePixelRatio;
    // let lastDevicePixelRatio;
    let newDevicePixelRatio;
    let requestId;
    var varInitialOuterWidth;
    var varInitialOuterHeight;

    const setRootFontSize = (settings) => {
        const {
            window,
            rootElement,
            rootElementStyle,
            rootFontSize,
            initialOuterHeight,
            initialOuterWidth,
            relativeDesignWidth,
            mobileWidth,
            cutOffWidth
        } = settings;

        console.log(relativeDesignWidth, mobileWidth)

        /**
         * Cancel previous requestAnimationFrame.
         */
        cancelAnimationFrame(requestId);


        /** 
         * Set variable inital values if not yet set.
         */
        if (varInitialOuterWidth === undefined) {
            varInitialOuterWidth = initialOuterWidth;
            varInitialOuterHeight = initialOuterHeight;
        }


        /** 
         * Get Real time values.
         */
        const windowWidth = window.innerWidth;
        const windowOuterWidth = window.outerWidth;
        const windowOuterHeight = window.outerHeight;
        const windowResize = windowOuterWidth !== varInitialOuterWidth && windowOuterHeight !== varInitialOuterHeight;
        const clientWidth = parseInt(document.documentElement.clientWidth * devicePixelRatio);
        const defaultDevicePixelRatio = parseInt(clientWidth / screen.width) || devicePixelRatio;


        /**
         * The window width compared to the design width.
         */
        const designWidthRatio = windowWidth / relativeDesignWidth;


        /**
         * Check to see if the window is at the default zoom level.
         */
        const isDevicePixelRatioDefault = defaultDevicePixelRatio === devicePixelRatio;

        const cutOff = cutOffWidth > mobileWidth ? cutOffWidth : mobileWidth;


        /**
         * Mutate on next available frame.
         */
        requestId = requestAnimationFrame((timestamp) => resizeFonts({
            timestamp,
            windowWidth,
            windowOuterWidth,
            devicePixelRatio,
            isDevicePixelRatioDefault,
            relativeDesignWidth,
            cutOff,
            rootElement,
            rootElementStyle,
            designWidthRatio,
            rootFontSize
        }));


        /** 
         * Horrible mutation.
         */
        varInitialOuterWidth = windowOuterWidth;
        varInitialOuterHeight = windowOuterWidth;
    }


    /**
     * Initialize Mimetic.  
     */
    function initializeMimetic(config) {
        const { loadEvent, mobileWidth, rootSelector, scaleDelay } = config;


        /** 
         * Use the rootSelector as the root element.
         */
        const rootElement = getRootElement(rootSelector);


        /** 
         * Obtains Root font size as REM value from a given PX value string.
         */
        const getRootREMValue = compose(pxToRem, getFontSize);


        /** 
         * Get root font size.
         */
        const rootFontSize = getRootREMValue(document);


        // @TODO remove config, only use what is needed.
        /** 
         * Provide parameters to setRootFontSize.
         */
        const settings = Object.assign({
            initialOuterHeight: window.outerHeight,
            initialOuterWidth: window.outerWidth,
            rootFontSize,
            rootElement,
            rootElementStyle: rootElement.style,
            window
        }, config);


        /** 
         * Set Root font size.
         */
        setRootFontSize(settings);


        /**
         * On resize set Root font size and action callbacks.
         */
        resizilla(() => setRootFontSize(settings), scaleDelay, false);
    }
}

export default Mimetic;
