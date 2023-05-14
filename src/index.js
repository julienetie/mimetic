import defaults from './defaults.js'
import {
  getFontSize,
  getRootElement,
  basicCompose,
  pxToRem,
  debounce
} from './helpers'

const { isArray } = Array

const isString = value => typeof value === 'string'
const isFunction = value => typeof value === 'function'
let lastDevicePixelRatio

const mimetic = (config = {}) => {
  const windowRef = window
  const documentRef = document

  const rootSelector = Object.hasOwn(config, 'rootSelector') ? config.rootSelector : defaults.rootSelector
  const memisisBreakpoint = Object.hasOwn(config, 'memisisBreakpoint') ? config.memisisBreakpoint : defaults.memisisBreakpoint
  const scale = Object.hasOwn(config, 'scale') ? config.scale : defaults.scale
  const loadEvent = Object.hasOwn(config, 'loadEvent') ? config.loadEvent : defaults.loadEvent
  const resizeDelay = Object.hasOwn(config, 'resizeDelay') ? config.resizeDelay : defaults.resizeDelay
  const calc = Object.hasOwn(config, 'calc') ? config.calc : defaults.calc
  const relativeDesignWidth = Object.hasOwn(config, 'relativeDesignWidth') ? config.relativeDesignWidth : defaults.relativeDesignWidth
  const onScale = Object.hasOwn(config, 'onScale') ? config.onScale : defaults.onScale
  const onZoom = Object.hasOwn(config, 'onZoom') ? config.onZoom : defaults.onZoom
  const onResize = Object.hasOwn(config, 'onResize') ? config.onResize : defaults.onResize

  // If scale is false, disable.
  if (!scale) return

  const rootElement = getRootElement(rootSelector)
  const getFontSizeRem = basicCompose(
    pxToRem,
    getFontSize
  )
  const rootFontSize = getFontSizeRem(document)

  const resize = () => {
    /*
    The memisisBreakpoint defines the breakpoint width or an array of breakpoint widths that enable or disables scaling */
    if (isString(memisisBreakpoint)) {
      if (!window.matchMedia(`(min-width: ${memisisBreakpoint})`).matches) {
        rootElement.removeAttribute('style')
        return
      }
    } else if (isArray(memisisBreakpoint) && memisisBreakpoint.every(isString)) {
      if (memisisBreakpoint.some(mediaQueryString => !window.matchMedia(mediaQueryString).matches)) {
        rootElement.removeAttribute('style')
        return
      }
    } else {
      console.error('Mimetic: memisisBreakpoint should be a string or an Array of strings')
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

    const resizeWithoutZoom = calculatedDPR === lastDevicePixelRatio

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
    const designWidthRatio = innerWidth / relativeDesignWidth

    const scaledFontValue = rootFontSize * designWidthRatio * evalDPR
    const x = calc ? calc(scaledFontValue, rootFontSize, designWidthRatio, evalDPR) : scaledFontValue
    const scaledFontSize = x + 'rem'
    rootElement.style.fontSize = scaledFontSize

    // The parameters passed to each callback as an object.
    const callbackParams = {
      viewportWidth: clientWidth * calculatedDPR,
      innerWidth,
      evalDPR,
      calculatedDPR,
      normalizedDPR,
    }

    // Action onScale during resize without zoom.
    if (isFunction(onScale) && resizeWithoutZoom) {
      onScale(callbackParams)
    }

    // Action onZoom during resize without scale.
    if (isFunction(onZoom) && !resizeWithoutZoom) {
      onZoom(callbackParams)
    }

    // Action onResize during either zoom or scale.
    if (isFunction(onResize)) {
      onResize(callbackParams)
    }

    lastDevicePixelRatio = calculatedDPR
  }

  const debounceResize = debounce(() => {
    window.requestAnimationFrame(resize)
    console.log('debounced resize')
  }, resizeDelay)

  const actionMimetic = () => {
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(resize)
      debounceResize()
    })
    window.requestAnimationFrame(resize)
  }

  // Initalize mimetic on load.
  window.addEventListener(loadEvent, () => actionMimetic())
}

export { mimetic }
