/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_params_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__ = __webpack_require__(10);





let modalParams = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__utils_params_js__["a" /* default */])
let queue = []
let swal2Observer

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)')
}

/*
 * Set type, text and actions on modal
 */
const setParameters = (params) => {
  // If a custom element is set, determine if it is valid
  if ((typeof params.target === 'string' && !document.querySelector(params.target)) || (typeof params.target !== 'string' && !params.target.appendChild)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["b" /* warn */])('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }

  let modal
  const oldModal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()
  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target
  // If the model target has changed, refresh the modal
  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
    modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["b" /* init */](params)
  } else {
    modal = oldModal || __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["b" /* init */](params)
  }

  for (let param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["b" /* warn */])(`Unknown parameter "${param}"`)
    }
  }

  // Set modal width
  modal.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width

  modal.style.padding = params.padding + 'px'
  modal.style.background = params.background
  const successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background
  }

  const title = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["c" /* getTitle */]()
  const content = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["d" /* getContent */]()
  const buttonsWrapper = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["e" /* getButtonsWrapper */]()
  const confirmButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["f" /* getConfirmButton */]()
  const cancelButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["g" /* getCancelButton */]()
  const closeButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["h" /* getCloseButton */]()

  // Title
  if (params.titleText) {
    title.innerText = params.titleText
  } else {
    title.innerHTML = params.title.split('\n').join('<br />')
  }

  // Content
  if (params.text || params.html) {
    if (typeof params.html === 'object') {
      content.innerHTML = ''
      if (0 in params.html) {
        for (let i = 0; i in params.html; i++) {
          content.appendChild(params.html[i].cloneNode(true))
        }
      } else {
        content.appendChild(params.html.cloneNode(true))
      }
    } else if (params.html) {
      content.innerHTML = params.html
    } else if (params.text) {
      content.textContent = params.text
    }
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](content)
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](content)
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](closeButton)
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](closeButton)
  }

  // Custom Class
  modal.className = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].modal
  if (params.customClass) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](modal, params.customClass)
  }

  // Progress steps
  let progressStepsContainer = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["l" /* getProgressSteps */]()
  let currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10)
  if (params.progressSteps.length) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](progressStepsContainer)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["m" /* empty */](progressStepsContainer)
    if (currentProgressStep >= params.progressSteps.length) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["b" /* warn */])(
        'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
        '(currentProgressStep like JS arrays starts from 0)'
      )
    }
    params.progressSteps.forEach((step, index) => {
      let circle = document.createElement('li')
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](circle, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].progresscircle)
      circle.innerHTML = step
      if (index === currentProgressStep) {
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](circle, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].activeprogressstep)
      }
      progressStepsContainer.appendChild(circle)
      if (index !== params.progressSteps.length - 1) {
        let line = document.createElement('li')
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](line, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].progressline)
        line.style.width = params.progressStepsDistance
        progressStepsContainer.appendChild(line)
      }
    })
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](progressStepsContainer)
  }

  // Icon
  const icons = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["n" /* getIcons */]()
  for (let i = 0; i < icons.length; i++) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](icons[i])
  }
  if (params.type) {
    let validType = false
    for (let iconType in __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["b" /* iconTypes */]) {
      if (params.type === iconType) {
        validType = true
        break
      }
    }
    if (!validType) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])(`Unknown alert type: ${params.type}`)
      return false
    }
    const icon = modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].icon}.${__WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["b" /* iconTypes */][params.type]}`)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](icon)

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](icon, 'swal2-animate-success-icon')
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip')
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long')
          break
        case 'error':
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](icon, 'swal2-animate-error-icon')
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark')
          break
        default:
          break
      }
    }
  }

  // Custom image
  const image = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["o" /* getImage */]()
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl)
    image.setAttribute('alt', params.imageAlt)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](image)

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth)
    } else {
      image.removeAttribute('width')
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight)
    } else {
      image.removeAttribute('height')
    }

    image.className = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].image
    if (params.imageClass) {
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](image, params.imageClass)
    }
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](image)
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block'
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](cancelButton)
  }

  // Confirm button
  if (params.showConfirmButton) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["p" /* removeStyleProperty */](confirmButton, 'display')
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](confirmButton)
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](buttonsWrapper)
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](buttonsWrapper)
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText
  cancelButton.innerHTML = params.cancelButtonText

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel)
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel)

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor
    cancelButton.style.backgroundColor = params.cancelButtonColor
  }

  // Add buttons custom classes
  confirmButton.className = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].confirm
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](confirmButton, params.confirmButtonClass)
  cancelButton.className = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].cancel
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](cancelButton, params.cancelButtonClass)

  // Buttons styling
  if (params.buttonsStyling) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](confirmButton, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].styled)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](cancelButton, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].styled)
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](confirmButton, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].styled)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](cancelButton, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].styled)

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = ''
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = ''
  }

  // CSS animation
  if (params.animation === true) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].noanimation)
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].noanimation)
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["b" /* warn */])(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://limonte.github.io/sweetalert2/#ajax-request'
    )
  }
}

/*
 * Animations
 */
const openModal = (animation, onComplete) => {
  const container = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["r" /* getContainer */]()
  const modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()

  if (animation) {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].show)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](container, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].fade)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].hide)
  } else {
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].fade)
  }
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](modal)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden'
  if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["s" /* animationEndEvent */] && !__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["t" /* hasClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].noanimation)) {
    modal.addEventListener(__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["s" /* animationEndEvent */], function swalCloseEventFinished () {
      modal.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["s" /* animationEndEvent */], swalCloseEventFinished)
      container.style.overflowY = 'auto'
    })
  } else {
    container.style.overflowY = 'auto'
  }

  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](document.documentElement, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].shown)
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].shown)
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](container, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].shown)
  fixScrollbar()
  iOSfix()
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousActiveElement = document.activeElement
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal)
    })
  }
}

const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousBodyPadding = document.body.style.paddingRight
    document.body.style.paddingRight = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["v" /* measureScrollbar */]() + 'px'
  }
}

const undoScrollbar = () => {
  if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousBodyPadding !== null) {
    document.body.style.paddingRight = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousBodyPadding
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousBodyPadding = null
  }
}

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
const iOSfix = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  if (iOS && !__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["t" /* hasClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = (offset * -1) + 'px'
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].iosfix)
  }
}

const undoIOSfix = () => {
  if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["t" /* hasClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}

// SweetAlert entry point
const sweetAlert = (...args) => {
  if (args[0] === undefined) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])('SweetAlert2 expects at least 1 attribute!')
    return false
  }

  let params = Object.assign({}, modalParams)

  switch (typeof args[0]) {
    case 'string':
      [params.title, params.html, params.type] = args
      break

    case 'object':
      Object.assign(params, args[0])
      params.extraParams = args[0].extraParams

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = (email) => {
          return new Promise((resolve, reject) => {
            const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            if (emailRegex.test(email)) {
              resolve()
            } else {
              reject('Invalid email address')
            }
          })
        }
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = (url) => {
          return new Promise((resolve, reject) => {
            // taken from https://stackoverflow.com/a/3809435/1331425
            const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/
            if (urlRegex.test(url)) {
              resolve()
            } else {
              reject('Invalid URL')
            }
          })
        }
      }
      break

    default:
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])('Unexpected type of argument! Expected "string" or "object", got ' + typeof args[0])
      return false
  }

  setParameters(params)

  const container = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["r" /* getContainer */]()
  const modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()

  return new Promise((resolve, reject) => {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(() => {
        sweetAlert.closeModal(params.onClose)
        if (params.useRejections) {
          reject('timer')
        } else {
          resolve({dismiss: 'timer'})
        }
      }, params.timer)
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    const getInput = (inputType) => {
      inputType = inputType || params.input
      if (!inputType) {
        return null
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */][inputType])
        case 'checkbox':
          return modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].checkbox} input`)
        case 'radio':
          return modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].radio} input:checked`) ||
            modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].radio} input:first-child`)
        case 'range':
          return modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].range} input`)
        default:
          return __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].input)
      }
    }

    // Get the value of the modal input
    const getInputValue = () => {
      const input = getInput()
      if (!input) {
        return null
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0
        case 'radio':
          return input.checked ? input.value : null
        case 'file':
          return input.files.length ? input.files[0] : null
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value
      }
    }

    // input autofocus
    if (params.input) {
      setTimeout(() => {
        const input = getInput()
        if (input) {
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["x" /* focusInput */](input)
        }
      }, 0)
    }

    const confirm = (value) => {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading()
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(
          (preConfirmValue) => {
            sweetAlert.closeModal(params.onClose)
            resolve(preConfirmValue || value)
          },
          (error) => {
            sweetAlert.hideLoading()
            if (error) {
              sweetAlert.showValidationError(error)
            }
          }
        )
      } else {
        sweetAlert.closeModal(params.onClose)
        if (params.useRejections) {
          resolve(value)
        } else {
          resolve({value: value})
        }
      }
    }

    // Mouse interactions
    const onButtonEvent = (event) => {
      const e = event || window.event
      const target = e.target || e.srcElement
      const confirmButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["f" /* getConfirmButton */]()
      const cancelButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["g" /* getCancelButton */]()
      const targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target))
      const targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target))

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["c" /* colorLuminance */])(params.confirmButtonColor, -0.1)
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["c" /* colorLuminance */])(params.cancelButtonColor, -0.1)
            }
          }
          break
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor
            }
          }
          break
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["c" /* colorLuminance */])(params.confirmButtonColor, -0.2)
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["c" /* colorLuminance */])(params.cancelButtonColor, -0.2)
            }
          }
          break
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons()
            if (params.input) {
              const inputValue = getInputValue()

              if (params.inputValidator) {
                sweetAlert.disableInput()
                params.inputValidator(inputValue, params.extraParams).then(
                  () => {
                    sweetAlert.enableButtons()
                    sweetAlert.enableInput()
                    confirm(inputValue)
                  },
                  (error) => {
                    sweetAlert.enableButtons()
                    sweetAlert.enableInput()
                    if (error) {
                      sweetAlert.showValidationError(error)
                    }
                  }
                )
              } else {
                confirm(inputValue)
              }
            } else {
              confirm(true)
            }

          // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons()
            sweetAlert.closeModal(params.onClose)
            if (params.useRejections) {
              reject('cancel')
            } else {
              resolve({dismiss: 'cancel'})
            }
          }
          break
        default:
      }
    }

    const buttons = modal.querySelectorAll('button')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent
      buttons[i].onmouseover = onButtonEvent
      buttons[i].onmouseout = onButtonEvent
      buttons[i].onmousedown = onButtonEvent
    }

    // Closing modal by close button
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["h" /* getCloseButton */]().onclick = () => {
      sweetAlert.closeModal(params.onClose)
      if (params.useRejections) {
        reject('close')
      } else {
        resolve({dismiss: 'close'})
      }
    }

    // Closing modal by overlay click
    container.onclick = (e) => {
      if (e.target !== container) {
        return
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose)
        if (params.useRejections) {
          reject('overlay')
        } else {
          resolve({dismiss: 'overlay'})
        }
      }
    }

    const buttonsWrapper = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["e" /* getButtonsWrapper */]()
    const confirmButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["f" /* getConfirmButton */]()
    const cancelButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["g" /* getCancelButton */]()

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton)
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton)
    }

    // Focus handling
    const setFocus = (index, increment) => {
      const focusableElements = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["y" /* getFocusableElements */](params.focusCancel)
      // search for visible elements and select the next possible match
      for (let i = 0; i < focusableElements.length; i++) {
        index = index + increment

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0

        // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1
        }

        // determine if element is visible
        const el = focusableElements[index]
        if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["z" /* isVisible */](el)) {
          return el.focus()
        }
      }
    }

    const handleKeyDown = (event) => {
      const e = event || window.event
      const keyCode = e.keyCode || e.which

      if ([9, 13, 32, 27, 37, 38, 39, 40].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return
      }

      const targetElement = e.target || e.srcElement

      const focusableElements = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["y" /* getFocusableElements */](params.focusCancel)
      let btnIndex = -1 // Find the button - note, this is a nodelist, not an array.
      for (let i = 0; i < focusableElements.length; i++) {
        if (targetElement === focusableElements[i]) {
          btnIndex = i
          break
        }
      }

      // TAB
      if (keyCode === 9) {
        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1)
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1)
        }
        e.stopPropagation()
        e.preventDefault()

      // ARROWS - switch focus between buttons
      } else if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["z" /* isVisible */](cancelButton)) {
          cancelButton.focus()
        // and vice versa
        } else if (document.activeElement === cancelButton && __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["z" /* isVisible */](confirmButton)) {
          confirmButton.focus()
        }

      // ESC
      } else if (keyCode === 27 && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose)
        if (params.useRejections) {
          reject('esc')
        } else {
          resolve({dismiss: 'esc'})
        }
      }
    }

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["u" /* states */].previousWindowKeyDown = window.onkeydown
      window.onkeydown = handleKeyDown
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor
      confirmButton.style.borderRightColor = params.confirmButtonColor
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = () => {
      if (!params.showConfirmButton) {
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](confirmButton)
        if (!params.showCancelButton) {
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["e" /* getButtonsWrapper */]())
        }
      }
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](buttonsWrapper, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].loading)
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].loading)
      modal.removeAttribute('aria-busy')
      confirmButton.disabled = false
      cancelButton.disabled = false
    }

    sweetAlert.getTitle = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["c" /* getTitle */]()
    sweetAlert.getContent = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["d" /* getContent */]()
    sweetAlert.getInput = () => getInput()
    sweetAlert.getImage = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["o" /* getImage */]()
    sweetAlert.getButtonsWrapper = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["e" /* getButtonsWrapper */]()
    sweetAlert.getConfirmButton = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["f" /* getConfirmButton */]()
    sweetAlert.getCancelButton = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["g" /* getCancelButton */]()

    sweetAlert.enableButtons = () => {
      confirmButton.disabled = false
      cancelButton.disabled = false
    }

    sweetAlert.disableButtons = () => {
      confirmButton.disabled = true
      cancelButton.disabled = true
    }

    sweetAlert.enableConfirmButton = () => {
      confirmButton.disabled = false
    }

    sweetAlert.disableConfirmButton = () => {
      confirmButton.disabled = true
    }

    sweetAlert.enableInput = () => {
      const input = getInput()
      if (!input) {
        return false
      }
      if (input.type === 'radio') {
        const radiosContainer = input.parentNode.parentNode
        const radios = radiosContainer.querySelectorAll('input')
        for (let i = 0; i < radios.length; i++) {
          radios[i].disabled = false
        }
      } else {
        input.disabled = false
      }
    }

    sweetAlert.disableInput = () => {
      const input = getInput()
      if (!input) {
        return false
      }
      if (input && input.type === 'radio') {
        const radiosContainer = input.parentNode.parentNode
        const radios = radiosContainer.querySelectorAll('input')
        for (let i = 0; i < radios.length; i++) {
          radios[i].disabled = true
        }
      } else {
        input.disabled = true
      }
    }

    // Set modal min-height to disable scrolling inside the modal
    sweetAlert.recalculateHeight = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["A" /* debounce */](() => {
      const modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()
      if (!modal) {
        return
      }
      const prevState = modal.style.display
      modal.style.minHeight = ''
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](modal)
      modal.style.minHeight = (modal.scrollHeight + 1) + 'px'
      modal.style.display = prevState
    }, 50)

    // Show block with validation error
    sweetAlert.showValidationError = (error) => {
      const validationError = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["B" /* getValidationError */]()
      validationError.innerHTML = error
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](validationError)

      const input = getInput()
      if (input) {
        input.setAttribute('aria-invalid', true)
        input.setAttribute('aria-describedBy', __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].validationerror)
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["x" /* focusInput */](input)
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](input, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].inputerror)
      }
    }

    // Hide block with validation error
    sweetAlert.resetValidationError = () => {
      const validationError = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["B" /* getValidationError */]()
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](validationError)
      sweetAlert.recalculateHeight()

      const input = getInput()
      if (input) {
        input.removeAttribute('aria-invalid')
        input.removeAttribute('aria-describedBy')
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](input, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].inputerror)
      }
    }

    sweetAlert.getProgressSteps = () => {
      return params.progressSteps
    }

    sweetAlert.setProgressSteps = (progressSteps) => {
      params.progressSteps = progressSteps
      setParameters(params)
    }

    sweetAlert.showProgressSteps = () => {
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["l" /* getProgressSteps */]())
    }

    sweetAlert.hideProgressSteps = () => {
      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["l" /* getProgressSteps */]())
    }

    sweetAlert.enableButtons()
    sweetAlert.hideLoading()
    sweetAlert.resetValidationError()

    // inputs
    const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']
    let input
    for (let i = 0; i < inputTypes.length; i++) {
      const inputClass = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */][inputTypes[i]]
      const inputContainer = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, inputClass)
      input = getInput(inputTypes[i])

      // set attributes
      if (input) {
        for (let j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            const attrName = input.attributes[j].name
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName)
            }
          }
        }
        for (let attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr])
        }
      }

      // set class
      inputContainer.className = inputClass
      if (params.inputClass) {
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](inputContainer, params.inputClass)
      }

      __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["j" /* hide */](inputContainer)
    }

    let populateInputOptions
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].input)
        input.value = params.inputValue
        input.placeholder = params.inputPlaceholder
        input.type = params.input
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](input)
        break
      case 'file':
        input = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].file)
        input.placeholder = params.inputPlaceholder
        input.type = params.input
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](input)
        break
      case 'range':
        const range = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].range)
        const rangeInput = range.querySelector('input')
        const rangeOutput = range.querySelector('output')
        rangeInput.value = params.inputValue
        rangeInput.type = params.input
        rangeOutput.value = params.inputValue
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](range)
        break
      case 'select':
        const select = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].select)
        select.innerHTML = ''
        if (params.inputPlaceholder) {
          const placeholder = document.createElement('option')
          placeholder.innerHTML = params.inputPlaceholder
          placeholder.value = ''
          placeholder.disabled = true
          placeholder.selected = true
          select.appendChild(placeholder)
        }
        populateInputOptions = (inputOptions) => {
          for (let optionValue in inputOptions) {
            const option = document.createElement('option')
            option.value = optionValue
            option.innerHTML = inputOptions[optionValue]
            if (params.inputValue === optionValue) {
              option.selected = true
            }
            select.appendChild(option)
          }
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](select)
          select.focus()
        }
        break
      case 'radio':
        const radio = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].radio)
        radio.innerHTML = ''
        populateInputOptions = (inputOptions) => {
          for (let radioValue in inputOptions) {
            const radioInput = document.createElement('input')
            const radioLabel = document.createElement('label')
            const radioLabelSpan = document.createElement('span')
            radioInput.type = 'radio'
            radioInput.name = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].radio
            radioInput.value = radioValue
            if (params.inputValue === radioValue) {
              radioInput.checked = true
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue]
            radioLabel.appendChild(radioInput)
            radioLabel.appendChild(radioLabelSpan)
            radioLabel.for = radioInput.id
            radio.appendChild(radioLabel)
          }
          __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](radio)
          const radios = radio.querySelectorAll('input')
          if (radios.length) {
            radios[0].focus()
          }
        }
        break
      case 'checkbox':
        const checkbox = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].checkbox)
        const checkboxInput = getInput('checkbox')
        checkboxInput.type = 'checkbox'
        checkboxInput.value = 1
        checkboxInput.id = __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].checkbox
        checkboxInput.checked = Boolean(params.inputValue)
        let label = checkbox.getElementsByTagName('span')
        if (label.length) {
          checkbox.removeChild(label[0])
        }
        label = document.createElement('span')
        label.innerHTML = params.inputPlaceholder
        checkbox.appendChild(label)
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](checkbox)
        break
      case 'textarea':
        const textarea = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["w" /* getChildByClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].textarea)
        textarea.value = params.inputValue
        textarea.placeholder = params.inputPlaceholder
        __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](textarea)
        break
      case null:
        break
      default:
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`)
        break
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading()
        params.inputOptions.then((inputOptions) => {
          sweetAlert.hideLoading()
          populateInputOptions(inputOptions)
        })
      } else if (typeof params.inputOptions === 'object') {
        populateInputOptions(params.inputOptions)
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])('Unexpected type of inputOptions! Expected object or Promise, got ' + typeof params.inputOptions)
      }
    }

    openModal(params.animation, params.onOpen)

    if (!params.allowEnterKey) {
      if (document.activeElement) {
        document.activeElement.blur()
      }
    } else if (params.focusCancel && __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["z" /* isVisible */](cancelButton)) {
      cancelButton.focus()
    } else if (params.focusConfirm && __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["z" /* isVisible */](confirmButton)) {
      confirmButton.focus()
    } else {
      setFocus(-1, 1)
    }

    // fix scroll
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["r" /* getContainer */]().scrollTop = 0

    // Observe changes inside the modal and adjust height
    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight)
      swal2Observer.observe(modal, {childList: true, characterData: true, subtree: true})
    }
  })
}

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = () => {
  return !!__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()
}

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = (steps) => {
  queue = steps
  const resetQueue = () => {
    queue = []
    document.body.removeAttribute('data-swal2-queue-step')
  }
  let queueResult = []
  return new Promise((resolve, reject) => {
    (function step (i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i)

        sweetAlert(queue[i]).then(
          (result) => {
            queueResult.push(result)
            step(i + 1, callback)
          },
          (dismiss) => {
            resetQueue()
            reject(dismiss)
          }
        )
      } else {
        resetQueue()
        resolve(queueResult)
      }
    })(0)
  })
}

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = () => document.body.getAttribute('data-swal2-queue-step')

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = (step, index) => {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step)
  }
  return queue.push(step)
}

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = (index) => {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1)
  }
}

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = (onComplete) => {
  const container = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["r" /* getContainer */]()
  const modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()
  if (!modal) {
    return
  }
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].show)
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].hide)
  clearTimeout(modal.timeout)

  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["C" /* resetPrevState */]()

  const removeModalAndResetState = () => {
    if (container.parentNode) {
      container.parentNode.removeChild(container)
    }
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](document.documentElement, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].shown)
    __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["q" /* removeClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].shown)
    undoScrollbar()
    undoIOSfix()
  }

  // If animation is supported, animate
  if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["s" /* animationEndEvent */] && !__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["t" /* hasClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].noanimation)) {
    modal.addEventListener(__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["s" /* animationEndEvent */], function swalCloseEventFinished () {
      modal.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["s" /* animationEndEvent */], swalCloseEventFinished)
      if (__WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["t" /* hasClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].hide)) {
        removeModalAndResetState()
      }
    })
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState()
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal)
    })
  }
}

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["f" /* getConfirmButton */]().click()

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = () => __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["g" /* getCancelButton */]().click()

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = () => {
  let modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()
  if (!modal) {
    sweetAlert('')
  }
  modal = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["a" /* getModal */]()
  const buttonsWrapper = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["e" /* getButtonsWrapper */]()
  const confirmButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["f" /* getConfirmButton */]()
  const cancelButton = __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["g" /* getCancelButton */]()

  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](buttonsWrapper)
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["i" /* show */](confirmButton, 'inline-block')
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](buttonsWrapper, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].loading)
  __WEBPACK_IMPORTED_MODULE_3__utils_dom_js__["k" /* addClass */](modal, __WEBPACK_IMPORTED_MODULE_1__utils_classes_js__["a" /* swalClasses */].loading)
  confirmButton.disabled = true
  cancelButton.disabled = true

  modal.setAttribute('aria-busy', true)
  modal.focus()
}

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = (paramName) => {
  return __WEBPACK_IMPORTED_MODULE_0__utils_params_js__["a" /* default */].hasOwnProperty(paramName) || paramName === 'extraParams'
}

  /**
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = (userParams) => {
  if (!userParams || typeof userParams !== 'object') {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["a" /* error */])('the argument for setDefaults() is required and has to be a object')
  }

  for (let param in userParams) {
    if (!sweetAlert.isValidParameter(param)) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_utils_js__["b" /* warn */])(`Unknown parameter "${param}"`)
      delete userParams[param]
    }
  }

  Object.assign(modalParams, userParams)
}

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = () => {
  modalParams = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__utils_params_js__["a" /* default */])
}

sweetAlert.noop = () => { }

sweetAlert.version = ''

sweetAlert.default = sweetAlert

/* harmony default export */ __webpack_exports__["a"] = (sweetAlert);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const swalPrefix = 'swal2-'
/* unused harmony export swalPrefix */


const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}
/* unused harmony export prefix */


const swalClasses = prefix([
  'container',
  'shown',
  'iosfix',
  'modal',
  'overlay',
  'fade',
  'show',
  'hide',
  'noanimation',
  'close',
  'title',
  'content',
  'buttonswrapper',
  'confirm',
  'cancel',
  'icon',
  'image',
  'input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'textarea',
  'inputerror',
  'validationerror',
  'progresssteps',
  'activeprogressstep',
  'progresscircle',
  'progressline',
  'loading',
  'styled'
])
/* harmony export (immutable) */ __webpack_exports__["a"] = swalClasses;


const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])
/* harmony export (immutable) */ __webpack_exports__["b"] = iconTypes;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const consolePrefix = 'SweetAlert2:'
/* unused harmony export consolePrefix */


/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
const colorLuminance = (hex, lum) => {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // Convert to decimal and change luminosity
  let rgb = '#'
  for (let i = 0; i < 3; i++) {
    let c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}
/* harmony export (immutable) */ __webpack_exports__["c"] = colorLuminance;


const uniqueArray = (arr) => {
  const result = []
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}
/* harmony export (immutable) */ __webpack_exports__["d"] = uniqueArray;


/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${message}`)
}
/* harmony export (immutable) */ __webpack_exports__["b"] = warn;


/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}
/* harmony export (immutable) */ __webpack_exports__["a"] = error;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert2_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert2_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sweetalert2_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sweetalert2__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__sweetalert2__["a" /* default */]);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sweetalert2All = __webpack_require__(3);

var _sweetalert2All2 = _interopRequireDefault(_sweetalert2All);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sweetalert2All2.default)({
  title: 'Hi from webpack!',
  text: 'SweetAlert2 version: ' + _sweetalert2All2.default.version,
  imageUrl: 'https://webpack.js.org/assets/icon-square-big.svg',
  imageWidth: 300
}).catch(_sweetalert2All2.default.noop);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "body.swal2-shown {\n  overflow-y: hidden; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\n.swal2-container {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-fade {\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-modal {\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  max-width: 100%; }\n  .swal2-modal:focus {\n    outline: none; }\n  .swal2-modal.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-modal .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-buttonswrapper {\n    margin-top: 15px; }\n    .swal2-modal .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm {\n      box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: 7.5px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      animation: rotate-loading 1.5s linear 0s infinite normal;\n      user-select: none; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      vertical-align: -1px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 15px 5px 0;\n    padding: 10px 32px; }\n    .swal2-modal .swal2-styled:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-modal .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-modal .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 38px;\n    height: 40px;\n    font-size: 36px;\n    line-height: 40px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    transition: color .1s ease; }\n    .swal2-modal .swal2-close:hover {\n      color: #d55; }\n  .swal2-modal > .swal2-input,\n  .swal2-modal > .swal2-file,\n  .swal2-modal > .swal2-textarea,\n  .swal2-modal > .swal2-select,\n  .swal2-modal > .swal2-radio,\n  .swal2-modal > .swal2-checkbox {\n    display: none; }\n  .swal2-modal .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea,\n  .swal2-modal .swal2-select,\n  .swal2-modal .swal2-radio,\n  .swal2-modal .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 18px;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    transition: border-color .3s, box-shadow .3s; }\n    .swal2-modal .swal2-input.swal2-inputerror,\n    .swal2-modal .swal2-file.swal2-inputerror,\n    .swal2-modal .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-modal .swal2-input:focus,\n    .swal2-modal .swal2-file:focus,\n    .swal2-modal .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-modal .swal2-input::placeholder,\n    .swal2-modal .swal2-file::placeholder,\n    .swal2-modal .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-modal .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-modal .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-modal .swal2-range input,\n  .swal2-modal .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-modal .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-modal .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-modal .swal2-file {\n    font-size: 20px; }\n  .swal2-modal .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-modal .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-modal .swal2-radio {\n    border: 0; }\n    .swal2-modal .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-modal .swal2-radio input,\n    .swal2-modal .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-modal .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-modal .swal2-checkbox {\n    color: #545454; }\n    .swal2-modal .swal2-checkbox input,\n    .swal2-modal .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-modal .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-modal .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  box-sizing: content-box;\n  cursor: default;\n  user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        transform: rotate(-45deg);\n        transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        transform: rotate(-45deg);\n        transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7); }\n  45% {\n    transform: scale(1.05); }\n  80% {\n    transform: scale(0.95); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  animation: showSweetAlert .3s; }\n  .swal2-show.swal2-noanimation {\n    animation: none; }\n\n.swal2-hide {\n  animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    animation: none; }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@keyframes animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  animation: animate-error-icon .5s; }\n\n@keyframes animate-x-mark {\n  0% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  animation: animate-x-mark .5s; }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../postcss-loader/lib/index.js!../../sass-loader/lib/loader.js!./sweetalert2.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../postcss-loader/lib/index.js!../../sass-loader/lib/loader.js!./sweetalert2.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(2);




// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null
}
/* harmony export (immutable) */ __webpack_exports__["u"] = states;


/*
 * Add modal + overlay to DOM
 */
const init = (params) => {
  // Clean up the old modal if it exists
  const c = getContainer()
  if (c) {
    c.parentNode.removeChild(c)
  }

  if (typeof document === 'undefined') {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* error */])('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].container
  container.innerHTML = sweetHTML

  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target
  targetElement.appendChild(container)

  const modal = getModal()
  const input = getChildByClass(modal, __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].input)
  const file = getChildByClass(modal, __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].file)
  const range = modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].range} input`)
  const rangeOutput = modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].range} output`)
  const select = getChildByClass(modal, __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].select)
  const checkbox = modal.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].checkbox} input`)
  const textarea = getChildByClass(modal, __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].textarea)

  input.oninput = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
  }

  input.onkeydown = (event) => {
    setTimeout(() => {
      if (event.keyCode === 13 && params.allowEnterKey) {
        event.stopPropagation()
        __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].clickConfirm()
      }
    }, 0)
  }

  file.onchange = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
  }

  range.oninput = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
    rangeOutput.value = range.value
  }

  range.onchange = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
    range.previousSibling.value = range.value
  }

  select.onchange = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
  }

  checkbox.onchange = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
  }

  textarea.oninput = () => {
    __WEBPACK_IMPORTED_MODULE_0__sweetalert2_js__["a" /* default */].resetValidationError()
  }

  return modal
}
/* harmony export (immutable) */ __webpack_exports__["b"] = init;


/*
 * Manipulate DOM
 */

const sweetHTML = `
 <div role="dialog" aria-labelledby="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].title}" aria-describedby="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].content}" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].modal}" tabindex="-1">
   <ul class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].progresssteps}"></ul>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_1__classes_js__["b" /* iconTypes */].error}">
     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>
   </div>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_1__classes_js__["b" /* iconTypes */].question}">?</div>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_1__classes_js__["b" /* iconTypes */].warning}">!</div>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_1__classes_js__["b" /* iconTypes */].info}">i</div>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_1__classes_js__["b" /* iconTypes */].success}">
     <div class="swal2-success-circular-line-left"></div>
     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
     <div class="swal2-success-circular-line-right"></div>
   </div>
   <img class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].image}" />
   <h2 class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].title}" id="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].title}"></h2>
   <div id="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].content}" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].content}"></div>
   <input class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].input}" />
   <input type="file" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].file}" />
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].range}">
     <output></output>
     <input type="range" />
   </div>
   <select class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].select}"></select>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].radio}"></div>
   <label for="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].checkbox}" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].checkbox}">
     <input type="checkbox" />
   </label>
   <textarea class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].textarea}"></textarea>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].validationerror}" id="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].validationerror}"></div>
   <div class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].buttonswrapper}">
     <button type="button" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].confirm}">OK</button>
     <button type="button" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].cancel}">Cancel</button>
   </div>
   <button type="button" class="${__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].close}">×</button>
 </div>
`.replace(/(^|\n)\s*/g, '')

const getContainer = () => document.body.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].container)
/* harmony export (immutable) */ __webpack_exports__["r"] = getContainer;


const getModal = () => getContainer() ? getContainer().querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].modal) : null
/* harmony export (immutable) */ __webpack_exports__["a"] = getModal;


const getIcons = () => {
  const modal = getModal()
  return modal.querySelectorAll('.' + __WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].icon)
}
/* harmony export (immutable) */ __webpack_exports__["n"] = getIcons;


const elementByClass = (className) => getContainer() ? getContainer().querySelector('.' + className) : null
/* unused harmony export elementByClass */


const getTitle = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].title)
/* harmony export (immutable) */ __webpack_exports__["c"] = getTitle;


const getContent = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].content)
/* harmony export (immutable) */ __webpack_exports__["d"] = getContent;


const getImage = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].image)
/* harmony export (immutable) */ __webpack_exports__["o"] = getImage;


const getButtonsWrapper = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].buttonswrapper)
/* harmony export (immutable) */ __webpack_exports__["e"] = getButtonsWrapper;


const getProgressSteps = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].progresssteps)
/* harmony export (immutable) */ __webpack_exports__["l"] = getProgressSteps;


const getValidationError = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].validationerror)
/* harmony export (immutable) */ __webpack_exports__["B"] = getValidationError;


const getConfirmButton = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].confirm)
/* harmony export (immutable) */ __webpack_exports__["f"] = getConfirmButton;


const getCancelButton = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].cancel)
/* harmony export (immutable) */ __webpack_exports__["g"] = getCancelButton;


const getCloseButton = () => elementByClass(__WEBPACK_IMPORTED_MODULE_1__classes_js__["a" /* swalClasses */].close)
/* harmony export (immutable) */ __webpack_exports__["h"] = getCloseButton;


const getFocusableElements = () => {
  const focusableElementsWithTabindex = Array.from(
    getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
  .sort((a, b) => {
    a = parseInt(a.getAttribute('tabindex'))
    b = parseInt(b.getAttribute('tabindex'))
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
    return 0
  })

  const otherFocusableElements = Array.prototype.slice.call(
    getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]')
  )

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* uniqueArray */])(focusableElementsWithTabindex.concat(otherFocusableElements))
}
/* harmony export (immutable) */ __webpack_exports__["y"] = getFocusableElements;


const hasClass = (elem, className) => {
  if (elem.classList) {
    return elem.classList.contains(className)
  }
  return false
}
/* harmony export (immutable) */ __webpack_exports__["t"] = hasClass;


const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    const val = input.value
    input.value = ''
    input.value = val
  }
}
/* harmony export (immutable) */ __webpack_exports__["x"] = focusInput;


const addClass = (elem, className) => {
  if (!elem || !className) {
    return
  }
  const classes = className.split(/\s+/).filter(Boolean)
  classes.forEach((className) => {
    elem.classList.add(className)
  })
}
/* harmony export (immutable) */ __webpack_exports__["k"] = addClass;


const removeClass = (elem, className) => {
  if (!elem || !className) {
    return
  }
  const classes = className.split(/\s+/).filter(Boolean)
  classes.forEach((className) => {
    elem.classList.remove(className)
  })
}
/* harmony export (immutable) */ __webpack_exports__["q"] = removeClass;


const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["w"] = getChildByClass;


const show = (elem, display) => {
  if (!display) {
    display = 'block'
  }
  elem.style.opacity = ''
  elem.style.display = display
}
/* harmony export (immutable) */ __webpack_exports__["i"] = show;


const hide = (elem) => {
  elem.style.opacity = ''
  elem.style.display = 'none'
}
/* harmony export (immutable) */ __webpack_exports__["j"] = hide;


const empty = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild)
  }
}
/* harmony export (immutable) */ __webpack_exports__["m"] = empty;


// borrowed from jqeury $(elem).is(':visible') implementation
const isVisible = (elem) => elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length
/* harmony export (immutable) */ __webpack_exports__["z"] = isVisible;


const removeStyleProperty = (elem, property) => {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property)
  } else {
    elem.style.removeAttribute(property)
  }
}
/* harmony export (immutable) */ __webpack_exports__["p"] = removeStyleProperty;


const animationEndEvent = (() => {
  const testEl = document.createElement('div')
  const transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  }
  for (const i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) &&
      testEl.style[i] !== undefined) {
      return transEndEventNames[i]
    }
  }

  return false
})()
/* harmony export (immutable) */ __webpack_exports__["s"] = animationEndEvent;


// Reset previous window keydown handler and focued element
const resetPrevState = () => {
  window.onkeydown = states.previousWindowKeyDown
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    let x = window.scrollX
    let y = window.scrollY
    states.previousActiveElement.focus()
    if (x && y) { // IE has no scrollX/scrollY support
      window.scrollTo(x, y)
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["C"] = resetPrevState;


// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
const measureScrollbar = () => {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
  if (supportsTouch) {
    return 0
  }
  const scrollDiv = document.createElement('div')
  scrollDiv.style.width = '50px'
  scrollDiv.style.height = '50px'
  scrollDiv.style.overflow = 'scroll'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}
/* harmony export (immutable) */ __webpack_exports__["v"] = measureScrollbar;


// JavaScript Debounce Function
// Simplivied version of https://davidwalsh.name/javascript-debounce-function
const debounce = (func, wait) => {
  let timeout
  return () => {
    const later = () => {
      timeout = null
      func()
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
/* harmony export (immutable) */ __webpack_exports__["A"] = debounce;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onOpen: null,
  onClose: null,
  useRejections: true
});


/***/ })
/******/ ]);