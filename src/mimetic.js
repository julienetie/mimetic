import requestFrame from 'request-frame';
import resizilla from '../libs/resizilla';
import objectAssign from '../libs/object-assign';
// @TODO remove run once and curry functions.
import runOnce from 'run-once';


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
const request = requestFrame('request');
const cancel = requestFrame('cancel');


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


const aliasValueToPX = (value) => {
    return CSSFixedUnits.filter(function(metricInfo) {
        return value === metricInfo.unit;
    }).shift().PXValue;
}


const unitsToPX = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    const suffix = value.replace(/[^a-z]+/gi, '');
    const numberValue = value.replace(/[^\d\.]*/g, '');

    const metricInfo = CSSUnits.filter(function(metricInfo) {
            return suffix === metricInfo.unit;
        })
        .shift();

    const PXValue = metricInfo ? numberValue * metricInfo.PXFactor : aliasValueToPX(value);
    return parseInt(PXValue);
}

// A browser that supports atleast some webkit legacy
// const supportsLegacyWebkit = (obj) => Object.keys(obj).some((k) => ~k.indexOf("webkit"));

// Legacy support (Safari 9 and below) will not change.
const supportsLegacySafari = () => Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;


const MimeticCurried = () => {
    var kill = false;

    return (configurationObj) => {
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
                devicePixelRatioRound,
                rootFontSize,
                enableScale,
                preserveDevicePixelRatio,
                onScale,
                onZoom,
                onResize,
                clientWidth,
                defaultDevicePixelRatio
            } = preCalculatedValues;

            /** 
             * Evaluated devicePixelRatio
             */

            const ddd = (1 / defaultDevicePixelRatio) * devicePixelRatioRound;
            const evalDevicePixelRatio = preserveDevicePixelRatio ? devicePixelRatioRound : ddd;
            const resizeWithoutZoom = devicePixelRatioRound === lastDevicePixelRatio;

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

            // console.log('resizeWithoutZoom', resizeWithoutZoom)
            /** 
             * Callbacks.
             */
            if (runOnce('callbacks')) {
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
                onZoom({ clientWidth, windowWidth, evalDevicePixelRatio, devicePixelRatioRound, ddd });
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
                    onResize,
                    mobileWidthPX,
                    cutOffWidthPX
                } = settings;


                /** 
                 * Get Real time values.
                 */
                const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
                const windowWidth = window.innerWidth;
                const windowOuterWidth = window.outerWidth;
                const windowOuterHeight = window.outerHeight;
                const cliWidth = document.documentElement.clientWidth;
                const safarIDPR = Number(windowOuterWidth / cliWidth);
                const iEDPR = Number(screen.deviceXDPI / screen.logicalXDPI);

                const devicePixelRatioRound = Math.abs(iEDPR ? iEDPR : isSafari ? safarIDPR : devicePixelRatio);
                const windowResize = windowOuterWidth !== outerWidth && windowOuterHeight !== outerHeight;
                const clientWidth = parseInt(cliWidth * devicePixelRatioRound);
                const defaultDevicePixelRatio = Math.round(cliWidth * devicePixelRatioRound / windowOuterWidth);

                console.log(devicePixelRatioRound, isSafari)
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
                const isDevicePixelRatioDefault = defaultDevicePixelRatio === devicePixelRatioRound;


                /** 
                 * The minimum veiwport size to not react to.
                 */
                const cutOff = cutOffWidthPX > mobileWidthPX ? cutOffWidthPX : mobileWidthPX;


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
                    devicePixelRatioRound,
                    rootFontSize,
                    enableScale,
                    preserveDevicePixelRatio,
                    onScale,
                    onZoom,
                    onResize,
                    clientWidth,
                    defaultDevicePixelRatio
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
            const { loadEvent, mobileWidth, rootSelector, scaleDelay, cutOffWidth } = config;


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



            /** 
             * Mobile width in pixels.
             */
            const mobileWidthPX = unitsToPX(mobileWidth);


            /** 
             * Cut odd width in pixels.
             */
            const cutOffWidthPX = unitsToPX(cutOffWidth);


            
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
                window,
                mobileWidthPX,
                cutOffWidthPX
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

            resizilla(() => {
                if (!kill) {
                    setRootFontSize(settings);
                }
            }, scaleDelay, false);

        }
        return {
            kill: () => kill = true,
            revivie: () => kill = false
        }
    }
}

const Mimetic = MimeticCurried();

export default Mimetic;
