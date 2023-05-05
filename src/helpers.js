const windowRef = window
const documentRef = windowRef.document

// Checks if string or number is a number.
export const isNumber = value => Number(value) === value

// A very simple compose function.
export const basicCompose = (a, b) => c => a(b(c))

// converts pixels to REM values.
export const pxToRem = fontSizePx => parseInt(fontSizePx, 10) / 16

// Is Function.
export const isFunction = value => typeof value === 'function'

// Gets the element's root font size.
export const getFontSize = element => windowRef.getComputedStyle(element.documentElement, null).getPropertyValue('font-size')

// Gets the root element.
export const getRootElement = (element) => {
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

/**
 * Generates the supplied function as debounced
 * By https://github.com/ehtb/onFrame
 */
export const debounce = (func, frameLength = 10) => {
  let called = 0
  let frame

  const reset = function () {
    called = 0
    frame = null
  }

  const cancel = function () {
    cancelAnimationFrame(frame)
    reset()
  }

  const run = function (...args) {
    const context = this

    if (frame != null) {
      cancelAnimationFrame(frame)
      reset()
    }

    frame = requestAnimationFrame(function tick () {
      if (++called === frameLength) {
        reset()

        func.apply(context, args)
      } else {
        frame = requestAnimationFrame(tick)
      }
    })
  }

  run.cancel = cancel

  return run
}

// Delay
export const delay = (callback, duration) => {
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
      requestAnimationFrame(loop)
    }
  }

  requestAnimationFrame(loop)
}
