import requestFrame from 'request-frame';
import resizilla from '../libs/resizilla';
import objectAssign from '../libs/object-assign';
// @TODO remove run once and curry functions.
import runOnce from 'run-once';

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

/** 
 * Object Assign polyfill.
 */
objectAssign();

/** 
 * requestAnimationFrame polyfill
 */
const request = requestFrame('request');
const cancel = requestFrame('cancel');

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
        scaleDelay: 16, // Miliseconds between calls on resize.
        preserveDevicePixelRatio: false, // Preserve the device pixel ratio on zoom.
        rootSelector: 'html', // Use the HTML element as the root element. 
        onScale: undefined,
        onZoom: undefined,
        onResize: undefined,
        cutOffWidth: 0, // The minimum width to disable resizing.
        relativeDesignWidth: 1024, // The width relative to the font size.
        enableScale: true
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


    const isCallBackDefined = (callback) => typeof callback === 'function';


    /** 
     * Calculate and apply the new font size to the root element.
     */
    let wasLastBeyondMobileWidth = true;
    let lastDevicePixelRatio;
    let hasScaleCallback = false;
    let hasZoomCallback = false;
    let hasResizeCallback = false;
    const resizeFonts = (preCalculatedValues) => {
        const {
            timestamp,
            windowWidth,
            windowOuterWidth,
            isDevicePixelRatioDefault,
            relativeDesignWidth,
            cutOff,
            rootElement,
            rootElementStyle,
            designWidthRatio,
            devicePixelRatioConst,
            rootFontSize,
            enableScale,
            preserveDevicePixelRatio,
            onScale,
            onZoom,
            onResize,
            clientWidth
        } = preCalculatedValues;

        /** 
         * Evaluated devicePixelRatio
         */
        const evalDevicePixelRatio = windowWidth === windowOuterWidth || !preserveDevicePixelRatio ? 1 : devicePixelRatioConst;

        const currentDevicePixelRatio = devicePixelRatioConst.toFixed(3);

        const resizeWithoutZoom = currentDevicePixelRatio === lastDevicePixelRatio;

        if (resizeWithoutZoom || isDevicePixelRatioDefault || runOnce('init')) {
            const isAboveDesignWidth = windowWidth > relativeDesignWidth;

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


        /** 
         * Callbacks.
         */
        if (!runOnce('callbacks')) {

            if (resizeWithoutZoom && hasScaleCallback) {
                onScale(clientWidth, windowWidth, devicePixelRatioConst);
            } else if (hasZoomCallback) {
                onZoom(clientWidth, windowWidth, devicePixelRatioConst);
            }

            if (hasResizeCallback) {
                onResize(clientWidth, windowWidth, devicePixelRatioConst);
            }

        } else {
            /** 
             * Validates callbacks once.
             */
            hasScaleCallback = isCallBackDefined(onScale);
            hasZoomCallback = isCallBackDefined(onZoom);
            hasResizeCallback = isCallBackDefined(onResize);
        }


        /** 
         * Set the last ratio from the current.
         */
        lastDevicePixelRatio = currentDevicePixelRatio;
    };



    /** 
     * Set Root Font Size.
     */
    const setRootFontSizeCurried = () => {
        var requestId;
        var outerWidth;
        var outerHeight;
        return (settings) => {
            /** 
             * Destructured settings.
             */
            const {
                window,
                rootElement,
                rootElementStyle,
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
                onResize
            } = settings;


            /** 
             * Get Real time values.
             */
            const windowWidth = window.innerWidth;
            const windowOuterWidth = window.outerWidth;
            const windowOuterHeight = window.outerHeight;
            const devicePixelRatioConst = window.devicePixelRatio;
            const windowResize = windowOuterWidth !== outerWidth && windowOuterHeight !== outerHeight;
            const clientWidth = parseInt(document.documentElement.clientWidth * devicePixelRatioConst);
            const defaultDevicePixelRatio = 1 //parseInt(clientWidth / screen.width) || devicePixelRatioConst;


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
            const designWidthRatio = windowWidth / relativeDesignWidth;


            /**
             * Check to see if the window is at the default zoom level.
             */
            const isDevicePixelRatioDefault = defaultDevicePixelRatio === devicePixelRatioConst;


            /** 
             * The minimum veiwport size to not react to.
             */
            const cutOff = cutOffWidth > mobileWidth ? cutOffWidth : mobileWidth;


            /**
             * Mutate on next available frame.
             */
            requestId = request((timestamp) => resizeFonts({
                timestamp,
                windowWidth,
                windowOuterWidth,
                isDevicePixelRatioDefault,
                relativeDesignWidth,
                cutOff,
                rootElement,
                rootElementStyle,
                designWidthRatio,
                devicePixelRatioConst,
                rootFontSize,
                enableScale,
                preserveDevicePixelRatio,
                onScale,
                onZoom,
                onResize,
                clientWidth
            }));

            /**
             * Updated Outer browser dimensions.
             */
            outerWidth = windowOuterWidth;
            outerHeight = windowOuterWidth;
        }
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
         * Sets variables for setRootFontSize.
         */
        const setRootFontSize = setRootFontSizeCurried();


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
