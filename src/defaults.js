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
  onScale: null, // Callback triggered on scale
  onZoom: null, // Callback triggered on zoom
  onResize: null // Callback triggered on window resize
}

export default defaults
