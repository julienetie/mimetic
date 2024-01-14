// Temporarily removed imports

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

// import defaults from './defaults'
const windowRef = window
const documentRef = windowRef.document
const raf = windowRef.requestAnimationFrame
const caf = windowRef.cancelAnimationFrame

// A very simple compose function.
const basicCompose = (a, b) => c => a(b(c))

// converts pixels to REM values.
const pxToRem = fontSizePx => parseInt(fontSizePx, 10) / 16

// Gets the element's root font size.
const getFontSize = element => windowRef.getComputedStyle(element.documentElement, null).getPropertyValue('font-size')

// Gets the root element.
const getRootElement = (element) => {
  const elements = {
    html: parent => parent.documentElement,
    body: parent => parent.body
  }

  if (element instanceof windowRef.Element) {
    if (element.nodeType === 1) {
      return element
    }
    throw new Error('rootElement is not a valid element')
  }
  return elements[element] ? elements[element](documentRef) : documentRef.querySelector(element)
}

/*
 Generates the supplied function as debounced
 By https://github.com/ehtb/onFrame
*/
const debounce = (func, frameLength = 10) => {
  let called = 0
  let frame

  const reset = function () {
    called = 0
    frame = null
  }

  const cancel = function () {
    caf(frame)
    reset()
  }

  const run = function (...args) {
    const context = this

    if (frame != null) {
      caf(frame)
      reset()
    }

    frame = raf(function tick () {
      if (++called === frameLength) {
        reset()

        func.apply(context, args)
      } else {
        frame = raf(tick)
      }
    })
  }

  run.cancel = cancel

  return run
}

// Delay
const delay = (callback, duration) => {
  let startTime = 0
  let terminate = false

  function loop (timestamp) {
    if (!startTime) {
      startTime = timestamp
    }

    if (timestamp > startTime + duration && !terminate) {
      if (callback) callback()
      terminate = true
    } else {
      raf(loop)
    }
  }

  raf(loop)
}

// import {
//   getFontSize,
//   getRootElement,
//   basicCompose,
//   pxToRem,
//   debounce
// } from './helpers'

const mimetic = (config) => {
  const windowRef = window
  const documentRef = windowRef.document
  const raf = windowRef.requestAnimationFrame
  const rootSelector = config.rootSelector || defaults.rootSelector
  const rootElement = getRootElement(rootSelector)
  const getFontSizeRem = basicCompose(
    pxToRem,
    getFontSize
  )
  const rootFontSize = getFontSizeRem(document)

  const resize = () => {
    const mobileWidth = !window.matchMedia('(min-width: 80em)').matches
    if (mobileWidth) {
      rootElement.removeAttribute('style')
      return
    }
    // Real time DOM measurments.
    const innerWidth = windowRef.innerWidth
    const outerWidth = windowRef.outerWidth
    const clientWidth = documentRef.documentElement.clientWidth
    const DPR = windowRef.devicePixelRatio

    // Ratio between the outer and client width.
    const outerClientRatio = outerWidth / clientWidth

    // A calulated DPR within the proximity of 0.05. for devices (eg.safari)
    // that have a fixed DPR.
    // @TODO check on large display devices with DPRs greater than 1.
    const OCRProximity = outerClientRatio < 1.05 && outerClientRatio > 0.95
      ? 1
      : outerClientRatio

    // A calculated DPR safe for safari browsers.
    const safariSafeDPR = Number((OCRProximity).toFixed(5))

    // Legacy internet explorer devicePixelRatio.
    const IEDPR = Number(windowRef.screen.deviceXDPI / windowRef.screen.logicalXDPI)

    // The devicePixelRatio with polyfilled support.
    const alt = DPR === 1 ? safariSafeDPR : DPR
    const calculatedDPR = Math.abs(IEDPR || alt)

    // The default device pixel ratio.
    const defaultDPR = Math.round(clientWidth * (calculatedDPR / outerWidth))

    // Calculates the devicePixelRatio as if the default was 1.
    const normalizedDPR = (1 / defaultDPR) * calculatedDPR

    // The preserved or non-preserved DPR via API settings.
    const preserveDevicePixelRatio = false

    const evalDPR = preserveDevicePixelRatio ? calculatedDPR : normalizedDPR
    /**
     * The window width compared to the design width.
     */
    const relativeDesignWidth = 1280
    const designWidthRatio = innerWidth / relativeDesignWidth

    const scaledFontSize = (rootFontSize * designWidthRatio * evalDPR) + 'rem'
    rootElement.style.fontSize = scaledFontSize
  }

  const debounceResize = debounce(() => {
    raf(resize)
    console.log('debounced resize')
  }, 20)

  window.addEventListener('resize', () => {
    raf(resize)
    debounceResize()
  })
  raf(resize)
}

export default mimetic
