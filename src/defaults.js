/**
 * Default config properties if not defined.
 */
const defaults = {
  rootSelector: 'html', // The element used to manipulate em and rem units
  memisisBreakpoint: '64em', // The viewport width breakpoint to begin scaling
  scale: true, // Enable/ disable scaling
  loadEvent: 'DOMContentLoaded', // Load type
  resizeDelay: 20, // Debounce delay between calls on resize.
  calc: null, // Maniputate the font value manually using a function.
  relativeDesignWidth: 1024, // The width relative to the font size.

  onScale: null,
  onZoom: null,
  onResize: null
  //   preserveDevicePixelRatio: false, // Preserve the device pixel ratio on zoom.
  /**
     * This is important particularly when users maximises and reverts the browser
     * window. This delay determines the debounce threshold but also the trailing
     * edge call.
     */
  //   lateDetectionDelay: 500,
  /**
     * This is an experimental feature that will only activate MIMETIC for
     * non-mobile-like devices. There fore media queries for max & min width and height
     * will behave similarly to the depreciated max | min device-width / device-height
     * without the use of the depreciated syntax.
     */
//   deviceSplitting: false
}

export default defaults
