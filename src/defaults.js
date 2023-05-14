/*
Default config properties if not defined 
*/
const defaults = {
  /* 
  The element used to manipulate em and rem units */
  rootSelector: 'html',

  /* 
  The viewport width breakpoint to begin scaling */
  memisisBreakpoint: '64em',

  /* 
  Enable/ disable scaling */
  scale: true,

  /* 
  Load type */
  loadEvent: 'DOMContentLoaded',

  /* 
  Debounce delay between calls on resize */
  resizeDelay: 20,

  /* 
  Maniputate the font value manually using a function */
  calc: null,
  
  /* 
  The width relative to the font size */
  relativeDesignWidth: 1024,

  /*
  Callback triggered on scale */
  onScale: null,

  /* 
  Callback triggered on zoom */
  onZoom: null, 

  /* 
  Callback triggered on window resize */
  onResize: null, 
}

export default defaults
