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


export default defaults;
