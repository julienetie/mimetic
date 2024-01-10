/*
 Default config properties if not provided.
*/
const defaults = {
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
  /*
    This is crucial, especially when users maximize and revert the browser window. This delay not
    only establishes the debounce threshold but also influences the trailing-edge call.
  */
  lateDetectionDelay: 500,
  mediaQueryCutOff: '(min-width: 40.063em)',
  /*
   This is an experimental feature that exclusively activates MIMETIC for non-mobile-like devices.
   Consequently, media queries for max and min width and height will behave similarly to the
   deprecated max and min device-width/device-height, but without the use of the deprecated syntax.
   */
  deviceSplitting: false
}

export default defaults
