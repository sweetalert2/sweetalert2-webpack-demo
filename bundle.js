/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v5.2.0
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Sweetalert2 = factory());
}(this, function () { 'use strict';

  var swalPrefix = 'swal2-';

  var prefix = function(items) {
    var result = {};
    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }
    return result;
  };

  var swalClasses = prefix([
    'container',
    'in',
    'modal',
    'overlay',
    'close',
    'content',
    'spacer',
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
    'validationerror',
    'progresssteps',
    'activeprogressstep',
    'progresscircle',
    'progressline'
  ]);

  var iconTypes = prefix([
    'success',
    'warning',
    'info',
    'question',
    'error'
  ]);

  var defaultParams = {
    title: '',
    text: '',
    html: '',
    type: null,
    customClass: '',
    animation: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: null,
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6',
    confirmButtonClass: null,
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#aaa',
    cancelButtonClass: null,
    buttonsStyling: true,
    reverseButtons: false,
    focusCancel: false,
    showCloseButton: false,
    showLoaderOnConfirm: false,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
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
    onClose: null
  };

  var sweetHTML = '<div class="' + swalClasses.modal + '" style="display: none" tabIndex="-1">' +
      '<ul class="' + swalClasses.progresssteps + '"></ul>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.error + '">' +
        '<span class="x-mark"><span class="line left"></span><span class="line right"></span></span>' +
      '</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.success + '">' +
        '<span class="line tip"></span> <span class="line long"></span>' +
        '<div class="placeholder"></div> <div class="fix"></div>' +
      '</div>' +
      '<img class="' + swalClasses.image + '">' +
      '<h2></h2>' +
      '<div class="' + swalClasses.content + '"></div>' +
      '<input class="' + swalClasses.input + '">' +
      '<input type="file" class="' + swalClasses.file + '">' +
      '<div class="' + swalClasses.range + '">' +
        '<output></output>' +
        '<input type="range">' +
      '</div>' +
      '<select class="' + swalClasses.select + '"></select>' +
      '<div class="' + swalClasses.radio + '"></div>' +
      '<label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">' +
        '<input type="checkbox">' +
      '</label>' +
      '<textarea class="' + swalClasses.textarea + '"></textarea>' +
      '<div class="' + swalClasses.validationerror + '"></div>' +
      '<hr class="' + swalClasses.spacer + '">' +
      '<button type="button" class="' + swalClasses.confirm + '">OK</button>' +
      '<button type="button" class="' + swalClasses.cancel + '">Cancel</button>' +
      '<span class="' + swalClasses.close + '">&times;</span>' +
    '</div>';

  var sweetContainer;

  var existingSweetContainers = document.getElementsByClassName(swalClasses.container);

  if (existingSweetContainers.length) {
    sweetContainer = existingSweetContainers[0];
  } else {
    sweetContainer = document.createElement('div');
    sweetContainer.className = swalClasses.container;
    sweetContainer.innerHTML = sweetHTML;
  }

  var extend = function(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }

    return a;
  };


  /*
   * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
   */
  var colorLuminance = function(hex, lum) {
    // Validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // Convert to decimal and change luminosity
    var rgb = '#';
    for (var i = 0; i < 3; i++) {
      var c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ('00' + c).substr(c.length);
    }

    return rgb;
  };

  // Remember state in cases where opening and handling a modal will fiddle with it.
  var states = {
    previousWindowKeyDown: null,
    previousActiveElement: null,
    previousBodyPadding: null
  };

  /*
   * Add modal + overlay to DOM
   */
  var init = function() {
    if (typeof document === 'undefined') {
      console.error('SweetAlert2 requires document to initialize');
      return;
    } else if (document.getElementsByClassName(swalClasses.container).length) {
      return;
    }

    document.body.appendChild(sweetContainer);

    var modal = getModal();
    var input = getChildByClass(modal, swalClasses.input);
    var file = getChildByClass(modal, swalClasses.file);
    var range = modal.querySelector('.' + swalClasses.range + ' input');
    var select = getChildByClass(modal, swalClasses.select);
    var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
    var textarea = getChildByClass(modal, swalClasses.textarea);

    input.oninput = function() {
      sweetAlert.resetValidationError();
    };

    input.onkeyup = function(event) {
      event.stopPropagation();
      if (event.keyCode === 13) {
        sweetAlert.clickConfirm();
      }
    };

    file.onchange = function() {
      sweetAlert.resetValidationError();
    };

    range.oninput = function() {
      sweetAlert.resetValidationError();
      range.previousSibling.value = range.value;
    };

    range.onchange = function() {
      sweetAlert.resetValidationError();
      range.previousSibling.value = range.value;
    };

    select.onchange = function() {
      sweetAlert.resetValidationError();
    };

    checkbox.onchange = function() {
      sweetAlert.resetValidationError();
    };

    textarea.oninput = function() {
      sweetAlert.resetValidationError();
    };

    return modal;
  };

  /*
   * Manipulate DOM
   */
  var elementByClass = function(className) {
    return sweetContainer.querySelector('.' + className);
  };

  var getModal = function() {
    return document.body.querySelector('.' + swalClasses.modal) || init();
  };

  var getIcons = function() {
    var modal = getModal();
    return modal.querySelectorAll('.' + swalClasses.icon);
  };

  var getSpacer = function() {
    return elementByClass(swalClasses.spacer);
  };

  var getProgressSteps = function() {
    return elementByClass(swalClasses.progresssteps);
  };

  var getValidationError = function() {
    return elementByClass(swalClasses.validationerror);
  };

  var getConfirmButton = function() {
    return elementByClass(swalClasses.confirm);
  };

  var getCancelButton = function() {
    return elementByClass(swalClasses.cancel);
  };

  var getCloseButton = function() {
    return elementByClass(swalClasses.close);
  };

  var getFocusableElements = function(focusCancel) {
    var buttons = [getConfirmButton(), getCancelButton()];
    if (focusCancel) {
      buttons.reverse();
    }
    return buttons.concat(Array.prototype.slice.call(
      getModal().querySelectorAll('button:not([class^=' + swalPrefix + ']), input:not([type=hidden]), textarea, select')
    ));
  };

  var hasClass = function(elem, className) {
    return elem.classList.contains(className);
  };

  var focusInput = function(input) {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915/1331425
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  var addClass = function(elem, className) {
    if (!elem || !className) {
      return;
    }
    var classes = className.split(/\s+/);
    classes.forEach(function(className) {
      elem.classList.add(className);
    });
  };

  var removeClass = function(elem, className) {
    if (!elem || !className) {
      return;
    }
    var classes = className.split(/\s+/);
    classes.forEach(function(className) {
      elem.classList.remove(className);
    });
  };

  var getChildByClass = function(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };

  var show = function(elem, display) {
    if (!display) {
      display = 'block';
    }
    elem.style.opacity = '';
    elem.style.display = display;
  };

  var hide = function(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };

  var empty = function(elem) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  };

  // borrowed from jqeury $(elem).is(':visible') implementation
  var isVisible = function(elem) {
    return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
  };

  var removeStyleProperty = function(elem, property) {
    if (elem.style.removeProperty) {
      elem.style.removeProperty(property);
    } else {
      elem.style.removeAttribute(property);
    }
  };

  var fireClick = function(node) {
    // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
    // Then fixed for today's Chrome browser.
    if (typeof MouseEvent === 'function') {
      // Up-to-date approach
      var mevt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
      });
      node.dispatchEvent(mevt);
    } else if (document.createEvent) {
      // Fallback
      var evt = document.createEvent('MouseEvents');
      evt.initEvent('click', false, false);
      node.dispatchEvent(evt);
    } else if (document.createEventObject) {
      node.fireEvent('onclick');
    } else if (typeof node.onclick === 'function') {
      node.onclick();
    }
  };

  var stopEventPropagation = function(e) {
    // In particular, make sure the space bar doesn't scroll the main window.
    if (typeof e.stopPropagation === 'function') {
      e.stopPropagation();
      e.preventDefault();
    } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
      window.event.cancelBubble = true;
    }
  };

  var animationEndEvent = (function() {
    var testEl = document.createElement('div'),
      transEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd oanimationend',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
      };
    for (var i in transEndEventNames) {
      if (transEndEventNames.hasOwnProperty(i) &&
        testEl.style[i] !== undefined) {
        return transEndEventNames[i];
      }
    }

    return false;
  })();


  // Reset the page to its previous state
  var resetPrevState = function() {
    var modal = getModal();
    window.onkeydown = states.previousWindowKeyDown;
    if (states.previousActiveElement && states.previousActiveElement.focus) {
      states.previousActiveElement.focus();
    }
    clearTimeout(modal.timeout);
  };

  // Measure width of scrollbar
  // https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
  var measureScrollbar = function() {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // JavaScript Debounce Function
  // https://davidwalsh.name/javascript-debounce-function
  var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var modalParams = extend({}, defaultParams);
  var queue = [];
  var swal2Observer;

  /*
   * Set type, text and actions on modal
   */
  var setParameters = function(params) {
    var modal = getModal();

    for (var param in params) {
      if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
        console.warn('SweetAlert2: Unknown parameter "' + param + '"');
      }
    }

    // set modal width and margin-left
    modal.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width;

    modal.style.padding = params.padding + 'px';
    modal.style.background = params.background;

    var $title = modal.querySelector('h2');
    var $content = modal.querySelector('.' + swalClasses.content);
    var $confirmBtn = getConfirmButton();
    var $cancelBtn = getCancelButton();
    var $closeButton = modal.querySelector('.' + swalClasses.close);

    // Title
    $title.innerHTML = params.title.split('\n').join('<br>');

    // Content
    var i;
    if (params.text || params.html) {
      if (typeof params.html === 'object') {
        $content.innerHTML = '';
        if (0 in params.html) {
          for (i = 0; i in params.html; i++) {
            $content.appendChild(params.html[i].cloneNode(true));
          }
        } else {
          $content.appendChild(params.html.cloneNode(true));
        }
      } else {
        $content.innerHTML = params.html || (params.text.split('\n').join('<br>'));
      }
      show($content);
    } else {
      hide($content);
    }

    // Close button
    if (params.showCloseButton) {
      show($closeButton);
    } else {
      hide($closeButton);
    }

    // Custom Class
    modal.className = swalClasses.modal;
    if (params.customClass) {
      addClass(modal, params.customClass);
    }

    // Progress steps
    var progressStepsContainer = getProgressSteps();
    var currentProgressStep = parseInt(params.currentProgressStep === null? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
    if (params.progressSteps.length) {
      show(progressStepsContainer);
      empty(progressStepsContainer);
      if (currentProgressStep >= params.progressSteps.length) {
        console.warn(
          'SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
          '(currentProgressStep like JS arrays starts from 0)'
        );
      }
      params.progressSteps.forEach(function(step, index) {
        var circle = document.createElement('li');
        addClass(circle, swalClasses.progresscircle);
        circle.innerHTML = step;
        if (index === currentProgressStep) {
          addClass(circle, swalClasses.activeprogressstep);
        }
        progressStepsContainer.appendChild(circle);
        if (index !== params.progressSteps.length - 1) {
          var line = document.createElement('li');
          addClass(line, swalClasses.progressline);
          line.style.width = params.progressStepsDistance;
          progressStepsContainer.appendChild(line);
        }
      });
    } else {
      hide(progressStepsContainer);
    }

    // Icon
    var icons = getIcons();
    for (i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
    if (params.type) {
      var validType = false;
      for (var iconType in iconTypes) {
        if (params.type === iconType) {
          validType = true;
          break;
        }
      }
      if (!validType) {
        console.error('SweetAlert2: Unknown alert type: ' + params.type);
        return false;
      }
      var $icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
      show($icon);

      // Animate icon
      switch (params.type) {
        case 'success':
          addClass($icon, 'animate');
          addClass($icon.querySelector('.tip'), 'animate-success-tip');
          addClass($icon.querySelector('.long'), 'animate-success-long');
          break;
        case 'error':
          addClass($icon, 'animate-error-icon');
          addClass($icon.querySelector('.x-mark'), 'animate-x-mark');
          break;
        case 'warning':
          addClass($icon, 'pulse-warning');
          break;
        default:
          break;
      }

    }

    // Custom image
    var $customImage = modal.querySelector('.' + swalClasses.image);
    if (params.imageUrl) {
      $customImage.setAttribute('src', params.imageUrl);
      show($customImage);

      if (params.imageWidth) {
        $customImage.setAttribute('width', params.imageWidth);
      } else {
        $customImage.removeAttribute('width');
      }

      if (params.imageHeight) {
        $customImage.setAttribute('height', params.imageHeight);
      } else {
        $customImage.removeAttribute('height');
      }

      $customImage.className = swalClasses.image;
      if (params.imageClass) {
        addClass($customImage, params.imageClass);
      }
    } else {
      hide($customImage);
    }

    // Cancel button
    if (params.showCancelButton) {
      $cancelBtn.style.display = 'inline-block';
    } else {
      hide($cancelBtn);
    }

    // Confirm button
    if (params.showConfirmButton) {
      removeStyleProperty($confirmBtn, 'display');
    } else {
      hide($confirmBtn);
    }

    // Buttons spacer
    var spacer = getSpacer();
    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(spacer);
    } else {
      show(spacer);
    }

    // Edit text on cancel and confirm buttons
    $confirmBtn.innerHTML = params.confirmButtonText;
    $cancelBtn.innerHTML = params.cancelButtonText;

    // Set buttons to selected background colors
    if (params.buttonsStyling) {
      $confirmBtn.style.backgroundColor = params.confirmButtonColor;
      $cancelBtn.style.backgroundColor = params.cancelButtonColor;
    }

    // Add buttons custom classes
    $confirmBtn.className = swalClasses.confirm;
    addClass($confirmBtn, params.confirmButtonClass);
    $cancelBtn.className = swalClasses.cancel;
    addClass($cancelBtn, params.cancelButtonClass);

    // Buttons styling
    if (params.buttonsStyling) {
      addClass($confirmBtn, 'styled');
      addClass($cancelBtn, 'styled');
    } else {
      removeClass($confirmBtn, 'styled');
      removeClass($cancelBtn, 'styled');

      $confirmBtn.style.backgroundColor = $confirmBtn.style.borderLeftColor = $confirmBtn.style.borderRightColor = '';
      $cancelBtn.style.backgroundColor = $cancelBtn.style.borderLeftColor = $cancelBtn.style.borderRightColor = '';
    }

    // CSS animation
    if (params.animation === true) {
      removeClass(modal, 'no-animation');
    } else {
      addClass(modal, 'no-animation');
    }
  };

  /*
   * Animations
   */
  var openModal = function(animation, onComplete) {
    var modal = getModal();
    if (animation) {
      addClass(modal, 'show-swal2');
      addClass(sweetContainer, 'fade');
      removeClass(modal, 'hide-swal2');
    } else {
      removeClass(modal, 'fade');
    }
    show(modal);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    sweetContainer.style.overflowY = 'hidden';
    if (animationEndEvent && !hasClass(modal, 'no-animation')) {
      modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
        modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
        sweetContainer.style.overflowY = 'auto';
      });
    } else {
      sweetContainer.style.overflowY = 'auto';
    }

    addClass(sweetContainer, 'in');
    addClass(document.body, swalClasses.in);
    fixScrollbar();
    states.previousActiveElement = document.activeElement;
    if (onComplete !== null && typeof onComplete === 'function') {
      onComplete.call(this, modal);
    }
  };

  function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = document.body.style.paddingRight;
      document.body.style.paddingRight = measureScrollbar() + 'px';
    }
  }

  function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = states.previousBodyPadding;
      states.previousBodyPadding = null;
    }
  }

  function modalDependant() {
    if (arguments[0] === undefined) {
      console.error('SweetAlert2 expects at least 1 attribute!');
      return false;
    }

    var params = extend({}, modalParams);

    switch (typeof arguments[0]) {

      case 'string':
        params.title = arguments[0];
        params.text  = arguments[1] || '';
        params.type  = arguments[2] || '';

        break;

      case 'object':
        extend(params, arguments[0]);
        params.extraParams = arguments[0].extraParams;

        if (params.input === 'email' && params.inputValidator === null) {
          params.inputValidator = function(email) {
            return new Promise(function(resolve, reject) {
              var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
              if (emailRegex.test(email)) {
                resolve();
              } else {
                reject('Invalid email address');
              }
            });
          };
        }

        break;

      default:
        console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]);
        return false;
    }

    setParameters(params);

    // Modal interactions
    var modal = getModal();

    return new Promise(function(resolve, reject) {
      // Close on timer
      if (params.timer) {
        modal.timeout = setTimeout(function() {
          sweetAlert.closeModal(params.onClose);
          reject('timer');
        }, params.timer);
      }

      // Get input element by specified type or, if type isn't specified, by params.input
      var getInput = function(inputType) {
        inputType = inputType || params.input;
        switch (inputType) {
          case 'select':
          case 'textarea':
          case 'file':
            return getChildByClass(modal, swalClasses[inputType]);
          case 'checkbox':
            return modal.querySelector('.' + swalClasses.checkbox + ' input');
          case 'radio':
            return modal.querySelector('.' + swalClasses.radio + ' input:checked') ||
              modal.querySelector('.' + swalClasses.radio + ' input:first-child');
          case 'range':
            return modal.querySelector('.' + swalClasses.range + ' input');
          default:
            return getChildByClass(modal, swalClasses.input);
        }
      };

      // Get the value of the modal input
      var getInputValue = function() {
        var input = getInput();
        if (!input) {
          return null;
        }
        switch (params.input) {
          case 'checkbox':
            return input.checked ? 1 : 0;
          case 'radio':
            return input.checked ? input.value : null;
          case 'file':
            return input.files.length ? input.files[0] : null;
          default:
            return params.inputAutoTrim? input.value.trim() : input.value;
        }
      };

      // input autofocus
      if (params.input) {
        setTimeout(function() {
          var input = getInput();
          if (input) {
            focusInput(input);
          }
        }, 0);
      }

      var confirm = function(value) {
        if (params.showLoaderOnConfirm) {
          sweetAlert.showLoading();
        }

        if (params.preConfirm) {
          params.preConfirm(value, params.extraParams).then(
            function(preConfirmValue) {
              sweetAlert.closeModal(params.onClose);
              resolve(preConfirmValue || value);
            },
            function(error) {
              sweetAlert.hideLoading();
              if (error) {
                sweetAlert.showValidationError(error);
              }
            }
          );
        } else {
          sweetAlert.closeModal(params.onClose);
          resolve(value);
        }
      };

      // Mouse interactions
      var onButtonEvent = function(event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var confirmBtn = getConfirmButton();
        var cancelBtn = getCancelButton();
        var targetedConfirm = confirmBtn === target || confirmBtn.contains(target);
        var targetedCancel = cancelBtn === target || cancelBtn.contains(target);

        switch (e.type) {
          case 'mouseover':
          case 'mouseup':
            if (params.buttonsStyling) {
              if (targetedConfirm) {
                confirmBtn.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
              } else if (targetedCancel) {
                cancelBtn.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
              }
            }
            break;
          case 'mouseout':
            if (params.buttonsStyling) {
              if (targetedConfirm) {
                confirmBtn.style.backgroundColor = params.confirmButtonColor;
              } else if (targetedCancel) {
                cancelBtn.style.backgroundColor = params.cancelButtonColor;
              }
            }
            break;
          case 'mousedown':
            if (params.buttonsStyling) {
              if (targetedConfirm) {
                confirmBtn.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
              } else if (targetedCancel) {
                cancelBtn.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
              }
            }
            break;
          case 'click':
            // Clicked 'confirm'
            if (targetedConfirm && sweetAlert.isVisible()) {
              if (params.input) {
                var inputValue = getInputValue();

                if (params.inputValidator) {
                  sweetAlert.disableInput();
                  params.inputValidator(inputValue, params.extraParams).then(
                    function() {
                      sweetAlert.enableInput();
                      confirm(inputValue);
                    },
                    function(error) {
                      sweetAlert.enableInput();
                      if (error) {
                        sweetAlert.showValidationError(error);
                      }
                    }
                  );
                } else {
                  confirm(inputValue);
                }

              } else {
                confirm(true);
              }

            // Clicked 'cancel'
            } else if (targetedCancel && sweetAlert.isVisible()) {
              sweetAlert.closeModal(params.onClose);
              reject('cancel');
            }

            break;
          default:
        }
      };

      var $buttons = modal.querySelectorAll('button');
      var i;
      for (i = 0; i < $buttons.length; i++) {
        $buttons[i].onclick     = onButtonEvent;
        $buttons[i].onmouseover = onButtonEvent;
        $buttons[i].onmouseout  = onButtonEvent;
        $buttons[i].onmousedown = onButtonEvent;
      }

      // Closing modal by close button
      getCloseButton().onclick = function() {
        sweetAlert.closeModal(params.onClose);
        reject('close');
      };

      // Closing modal by overlay click
      sweetContainer.onclick = function(e) {
        if (e.target !== sweetContainer) {
          return;
        }
        if (params.allowOutsideClick) {
          sweetAlert.closeModal(params.onClose);
          reject('overlay');
        }
      };

      var $confirmButton = getConfirmButton();
      var $cancelButton = getCancelButton();

      // Reverse buttons if neede d
      if (params.reverseButtons) {
        $confirmButton.parentNode.insertBefore($cancelButton, $confirmButton);
      } else {
        $confirmButton.parentNode.insertBefore($confirmButton, $cancelButton);
      }

      // Focus handling
      function setFocus(index, increment) {
        var focusableElements = getFocusableElements(params.focusCancel);
        // search for visible elements and select the next possible match
        for (var i = 0; i < focusableElements.length; i++) {
          index = index + increment;

          // rollover to first item
          if (index === focusableElements.length) {
            index = 0;

          // go to last item
          } else if (index === -1) {
            index = focusableElements.length - 1;
          }

          // determine if element is visible
          var el = focusableElements[index];
          if (isVisible(el)) {
            return el.focus();
          }
        }
      }

      function handleKeyDown(event) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;

        if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
          // Don't do work on keys we don't care about.
          return;
        }

        var $targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var i = 0; i < focusableElements.length; i++) {
          if ($targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
          }
        }

        // TAB
        if (keyCode === 9) {
          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(btnIndex, 1);
          } else {
            // Cycle to the prev button
            setFocus(btnIndex, -1);
          }

          stopEventPropagation(e);

        } else {
          if (keyCode === 13 || keyCode === 32) {
            if (btnIndex === -1) {
              // ENTER/SPACE clicked outside of a button.
              if (params.focusCancel) {
                fireClick($cancelButton, e);
              } else {
                fireClick($confirmButton, e);
              }
            }
          } else if (keyCode === 27 && params.allowEscapeKey === true) {
            sweetAlert.closeModal(params.onClose);
            reject('esc');
          }
        }
      }

      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;

      // Loading state
      if (params.buttonsStyling) {
        $confirmButton.style.borderLeftColor = params.confirmButtonColor;
        $confirmButton.style.borderRightColor = params.confirmButtonColor;
      }

      /**
       * Show spinner instead of Confirm button and disable Cancel button
       */
      sweetAlert.showLoading = sweetAlert.enableLoading = function() {
        show(getSpacer());
        show($confirmButton, 'inline-block');
        addClass($confirmButton, 'loading');
        addClass(modal, 'loading');
        $confirmButton.disabled = true;
        $cancelButton.disabled = true;
      };

      /**
       * Show spinner instead of Confirm button and disable Cancel button
       */
      sweetAlert.hideLoading = sweetAlert.disableLoading = function() {
        if (!params.showConfirmButton) {
          hide($confirmButton);
          if (!params.showCancelButton) {
            hide(getSpacer());
          }
        }
        removeClass($confirmButton, 'loading');
        removeClass(modal, 'loading');
        $confirmButton.disabled = false;
        $cancelButton.disabled = false;
      };

      sweetAlert.enableButtons = function() {
        $confirmButton.disabled = false;
        $cancelButton.disabled = false;
      };

      sweetAlert.disableButtons = function() {
        $confirmButton.disabled = true;
        $cancelButton.disabled = true;
      };

      sweetAlert.enableConfirmButton = function() {
        $confirmButton.disabled = false;
      };

      sweetAlert.disableConfirmButton = function() {
        $confirmButton.disabled = true;
      };

      sweetAlert.enableInput = function() {
        var input = getInput();
        if (!input) {
          return false;
        }
        if (input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode;
          var radios = radiosContainer.querySelectorAll('input');
          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = false;
          }
        } else {
          input.disabled = false;
        }
      };

      sweetAlert.disableInput = function() {
        var input = getInput();
        if (!input) {
          return false;
        }
        if (input && input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode;
          var radios = radiosContainer.querySelectorAll('input');
          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
          }
        } else {
          input.disabled = true;
        }
      };

      // Set modal min-height to disable scrolling inside the modal
      sweetAlert.recalculateHeight = debounce(function() {
        var modal = getModal();
        var prevState = modal.style.display;
        modal.style.minHeight = '';
        show(modal);
        modal.style.minHeight = (modal.scrollHeight + 1) + 'px';
        modal.style.display = prevState;
      }, 50);

      // Show block with validation error
      sweetAlert.showValidationError = function(error) {
        var validationError = getValidationError();
        validationError.innerHTML = error;
        show(validationError);

        var input = getInput();
        focusInput(input);
        addClass(input, 'error');
      };

      // Hide block with validation error
      sweetAlert.resetValidationError = function() {
        var validationError = getValidationError();
        hide(validationError);
        sweetAlert.recalculateHeight();

        var input = getInput();
        if (input) {
          removeClass(input, 'error');
        }
      };

      sweetAlert.getProgressSteps = function() {
        return params.progressSteps;
      };

      sweetAlert.setProgressSteps = function(progressSteps) {
        params.progressSteps = progressSteps;
        setParameters(params);
      };

      sweetAlert.showProgressSteps = function() {
        show(getProgressSteps());
      };

      sweetAlert.hideProgressSteps = function() {
        hide(getProgressSteps());
      };

      sweetAlert.enableButtons();
      sweetAlert.hideLoading();
      sweetAlert.resetValidationError();

      // inputs
      var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
      var input;
      for (i = 0; i < inputTypes.length; i++) {
        var inputClass = swalClasses[inputTypes[i]];
        var inputContainer = getChildByClass(modal, inputClass);
        input = getInput(inputTypes[i]);

        // set attributes
        if (input) {
          for (var j in input.attributes) {
            if (input.attributes.hasOwnProperty(j)) {
              var attrName = input.attributes[j].name;
              if (attrName !== 'type' && attrName !== 'value') {
                input.removeAttribute(attrName);
              }
            }
          }
          for (var attr in params.inputAttributes) {
            input.setAttribute(attr, params.inputAttributes[attr]);
          }
        }

        // set class
        inputContainer.className = inputClass;
        if (params.inputClass) {
          addClass(inputContainer, params.inputClass);
        }

        hide(inputContainer);
      }

      var populateInputOptions;
      switch (params.input) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
        case 'tel':
          input = getChildByClass(modal, swalClasses.input);
          input.value = params.inputValue;
          input.placeholder = params.inputPlaceholder;
          input.type = params.input;
          show(input);
          break;
        case 'file':
          input = getChildByClass(modal, swalClasses.file);
          input.placeholder = params.inputPlaceholder;
          input.type = params.input;
          show(input);
          break;
        case 'range':
          var range = getChildByClass(modal, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = params.inputValue;
          rangeInput.type = params.input;
          rangeOutput.value = params.inputValue;
          show(range);
          break;
        case 'select':
          var select = getChildByClass(modal, swalClasses.select);
          select.innerHTML = '';
          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = params.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }
          populateInputOptions = function(inputOptions) {
            for (var optionValue in inputOptions) {
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = inputOptions[optionValue];
              if (params.inputValue === optionValue) {
                option.selected = true;
              }
              select.appendChild(option);
            }
            show(select);
            select.focus();
          };
          break;
        case 'radio':
          var radio = getChildByClass(modal, swalClasses.radio);
          radio.innerHTML = '';
          populateInputOptions = function(inputOptions) {
            for (var radioValue in inputOptions) {
              var id = 1;
              var radioInput = document.createElement('input');
              var radioLabel = document.createElement('label');
              var radioLabelSpan = document.createElement('span');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;
              radioInput.id = swalClasses.radio + '-' + (id++);
              if (params.inputValue === radioValue) {
                radioInput.checked = true;
              }
              radioLabelSpan.innerHTML = inputOptions[radioValue];
              radioLabel.appendChild(radioInput);
              radioLabel.appendChild(radioLabelSpan);
              radioLabel.for = radioInput.id;
              radio.appendChild(radioLabel);
            }
            show(radio);
            var radios = radio.querySelectorAll('input');
            if (radios.length) {
              radios[0].focus();
            }
          };
          break;
        case 'checkbox':
          var checkbox = getChildByClass(modal, swalClasses.checkbox);
          var checkboxInput = getInput('checkbox');
          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(params.inputValue);
          var label = checkbox.getElementsByTagName('span');
          if (label.length) {
            checkbox.removeChild(label[0]);
          }
          label = document.createElement('span');
          label.innerHTML = params.inputPlaceholder;
          checkbox.appendChild(label);
          show(checkbox);
          break;
        case 'textarea':
          var textarea = getChildByClass(modal, swalClasses.textarea);
          textarea.value = params.inputValue;
          textarea.placeholder = params.inputPlaceholder;
          show(textarea);
          break;
        case null:
          break;
        default:
          console.error('SweetAlert2: Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got "' + params.input + '"');
          break;
      }

      if (params.input === 'select' || params.input === 'radio') {
        if (params.inputOptions instanceof Promise) {
          sweetAlert.showLoading();
          params.inputOptions.then(function(inputOptions) {
            sweetAlert.hideLoading();
            populateInputOptions(inputOptions);
          });
        } else if (typeof params.inputOptions === 'object') {
          populateInputOptions(params.inputOptions);
        } else {
          console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + typeof params.inputOptions);
        }
      }

      openModal(params.animation, params.onOpen);

      // Focus the first element (input or button)
      setFocus(-1, 1);

      // fix scroll
      sweetContainer.scrollTop = 0;

      // Observe changes inside the modal and adjust height
      if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
        swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
        swal2Observer.observe(modal, {childList: true, characterData: true, subtree: true});
      }
    });
  }

  // SweetAlert function
  function sweetAlert() {
    // Copy arguments to the local args variable
    var args = arguments;

    if (sweetAlert.isVisible()) {
      sweetAlert.close();
    }

    return modalDependant.apply(this, args);
  }

  /*
   * Global function to determine if swal2 modal is visible
   */
  sweetAlert.isVisible = function() {
    var modal = getModal();
    return isVisible(modal);
  };

  /*
   * Global function for chaining sweetAlert modals
   */
  sweetAlert.queue = function(steps) {
    queue = steps;
    var modal = getModal();
    var resetQueue = function() {
      queue = [];
      modal.removeAttribute('data-queue-step');
    };
    return new Promise(function(resolve, reject) {
      (function step(i, callback) {
        if (i < queue.length) {
          modal.setAttribute('data-queue-step', i);

          sweetAlert(queue[i]).then(function() {
            step(i+1, callback);
          }, function(dismiss) {
            resetQueue();
            reject(dismiss);
          });
        } else {
          resetQueue();
          resolve();
        }
      })(0);
    });
  };

  /*
   * Global function for getting the index of current modal in queue
   */
  sweetAlert.getQueueStep = function() {
    return getModal().getAttribute('data-queue-step');
  };

  /*
   * Global function for inserting a modal to the queue
   */
  sweetAlert.insertQueueStep = function(step, index) {
    if (index && index < queue.length) {
      return queue.splice(index, 0, step);
    }
    return queue.push(step);
  };

  /*
   * Global function for deleting a modal from the queue
   */
  sweetAlert.deleteQueueStep = function(index) {
    if (typeof queue[index] !== 'undefined') {
      queue.splice(index, 1);
    }
  };

  /*
   * Global function to close sweetAlert
   */
  sweetAlert.close = sweetAlert.closeModal = function(onComplete) {
    var modal = getModal();
    removeClass(modal, 'show-swal2');
    addClass(modal, 'hide-swal2');

    // Reset icon animations
    var $successIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.success);
    removeClass($successIcon, 'animate');
    removeClass($successIcon.querySelector('.tip'), 'animate-success-tip');
    removeClass($successIcon.querySelector('.long'), 'animate-success-long');

    var $errorIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.error);
    removeClass($errorIcon, 'animate-error-icon');
    removeClass($errorIcon.querySelector('.x-mark'), 'animate-x-mark');

    var $warningIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.warning);
    removeClass($warningIcon, 'pulse-warning');

    resetPrevState();

    // If animation is supported, animate
    if (animationEndEvent && !hasClass(modal, 'no-animation')) {
      modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
        modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
        if (hasClass(modal, 'hide-swal2')) {
          hide(modal);
          removeClass(sweetContainer, 'in');
          removeClass(document.body, swalClasses.in);
          undoScrollbar();
        }
      });
    } else {
      // Otherwise, hide immediately
      hide(modal);
      removeClass(sweetContainer, 'in');
      removeClass(document.body, swalClasses.in);
      undoScrollbar();
    }
    if (onComplete !== null && typeof onComplete === 'function') {
      onComplete.call(this, modal);
    }
  };

  /*
   * Global function to click 'Confirm' button
   */
  sweetAlert.clickConfirm = function() {
    getConfirmButton().click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  sweetAlert.clickCancel = function() {
    getCancelButton().click();
  };

  /**
   * Set default params for each popup
   * @param {Object} userParams
   */
  sweetAlert.setDefaults = function(userParams) {
    if (!userParams) {
      throw new Error('userParams is required');
    }
    if (typeof userParams !== 'object') {
      throw new Error('userParams has to be a object');
    }

    extend(modalParams, userParams);
  };

  /**
   * Reset default params for each popup
   */
  sweetAlert.resetDefaults = function() {
    modalParams = extend({}, defaultParams);
  };

  sweetAlert.version = '5.2.0';

  if (typeof Promise === 'function') {
    Promise.prototype.done = Promise.prototype.done || function() {
      return this.catch(function() {
        // Catch promise rejections silently.
        // https://github.com/limonte/sweetalert2/issues/177
      });
    };
  } else {
    console.warn('SweetAlert2: Please inlude Promise polyfill BEFORE including sweetalert2.js if IE10+ support needed.');
  }

  return sweetAlert;

}));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "body.swal2-in {\n  overflow-y: hidden; }\n\n.swal2-container {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container:not(.in) {\n    pointer-events: none; }\n  .swal2-container.fade {\n    transition: background-color .1s; }\n  .swal2-container.in {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-modal {\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative; }\n  .swal2-modal:focus {\n    outline: none; }\n  .swal2-modal.loading {\n    overflow-y: hidden; }\n  .swal2-modal h2 {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    line-height: 60px;\n    display: block; }\n  .swal2-modal .swal2-spacer {\n    height: 10px;\n    color: transparent;\n    border: 0; }\n  .swal2-modal .styled {\n    border: 0;\n    border-radius: 3px;\n    box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 0 5px;\n    padding: 10px 32px; }\n    .swal2-modal .styled:not(.loading)[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-modal .styled.loading {\n      box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: -2px 30px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal :not(.styled).loading::after {\n    display: inline-block;\n    content: '';\n    margin-left: 5px;\n    vertical-align: -1px;\n    height: 6px;\n    width: 6px;\n    border: 3px solid #999999;\n    border-right-color: transparent;\n    border-radius: 50%;\n    animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-modal .swal2-close {\n    font-size: 36px;\n    line-height: 36px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 13px;\n    cursor: pointer;\n    color: #cccccc;\n    transition: color .1s ease; }\n    .swal2-modal .swal2-close:hover {\n      color: #d55; }\n  .swal2-modal > .swal2-input,\n  .swal2-modal > .swal2-file,\n  .swal2-modal > .swal2-textarea,\n  .swal2-modal > .swal2-select,\n  .swal2-modal > .swal2-radio,\n  .swal2-modal > .swal2-checkbox {\n    display: none; }\n  .swal2-modal .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea,\n  .swal2-modal .swal2-select,\n  .swal2-modal .swal2-radio,\n  .swal2-modal .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    font-size: 18px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    transition: border-color box-shadow .3s; }\n    .swal2-modal .swal2-input.error,\n    .swal2-modal .swal2-file.error,\n    .swal2-modal .swal2-textarea.error {\n      border-color: #f06e57; }\n    .swal2-modal .swal2-input:focus,\n    .swal2-modal .swal2-file:focus,\n    .swal2-modal .swal2-textarea:focus {\n      outline: none;\n      box-shadow: 0 0 3px #c4e6f5;\n      border: 1px solid #b4dbed; }\n      .swal2-modal .swal2-input:focus::placeholder,\n      .swal2-modal .swal2-file:focus::placeholder,\n      .swal2-modal .swal2-textarea:focus::placeholder {\n        transition: opacity .3s .03s ease;\n        opacity: .8; }\n    .swal2-modal .swal2-input::placeholder,\n    .swal2-modal .swal2-file::placeholder,\n    .swal2-modal .swal2-textarea::placeholder {\n      color: #e6e6e6; }\n  .swal2-modal .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-modal .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-modal .swal2-range input,\n  .swal2-modal .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-modal .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-modal .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-modal .swal2-file {\n    font-size: 20px; }\n  .swal2-modal .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-modal .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-modal .swal2-radio {\n    border: 0; }\n    .swal2-modal .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-modal .swal2-radio input,\n    .swal2-modal .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-modal .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-modal .swal2-checkbox {\n    color: #545454; }\n    .swal2-modal .swal2-checkbox input,\n    .swal2-modal .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-modal .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-modal .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  box-sizing: content-box;\n  cursor: default;\n  user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error .line {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error .line.left {\n        transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error .line.right {\n        transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success::before, .swal2-icon.swal2-success::after {\n      content: '';\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      background: #fff;\n      transform: rotate(45deg); }\n    .swal2-icon.swal2-success::before {\n      border-radius: 120px 0 0 120px;\n      top: -7px;\n      left: -33px;\n      transform: rotate(-45deg);\n      transform-origin: 60px 60px; }\n    .swal2-icon.swal2-success::after {\n      border-radius: 0 120px 120px 0;\n      top: -11px;\n      left: 30px;\n      transform: rotate(-45deg);\n      transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .placeholder {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .fix {\n      width: 7px;\n      height: 90px;\n      background-color: #fff;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      transform: rotate(-45deg); }\n    .swal2-icon.swal2-success .line {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success .line.tip {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        transform: rotate(45deg); }\n      .swal2-icon.swal2-success .line.long {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7); }\n  45% {\n    transform: scale(1.05); }\n  80% {\n    transform: scale(0.95); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0.5);\n    opacity: 0; } }\n\n.show-swal2 {\n  animation: showSweetAlert 0.3s; }\n  .show-swal2.no-animation {\n    animation: none; }\n\n.hide-swal2 {\n  animation: hideSweetAlert 0.15s forwards; }\n  .hide-swal2.no-animation {\n    animation: none; }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg); } }\n\n.animate-success-tip {\n  animation: animate-success-tip 0.75s; }\n\n.animate-success-long {\n  animation: animate-success-long 0.75s; }\n\n.swal2-success.animate::after {\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@keyframes animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1; } }\n\n.animate-error-icon {\n  animation: animate-error-icon 0.5s; }\n\n@keyframes animate-x-mark {\n  0% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.animate-x-mark {\n  animation: animate-x-mark 0.5s; }\n\n@keyframes pulse-warning {\n  0% {\n    border-color: #f8d486; }\n  100% {\n    border-color: #f8bb86; } }\n\n.pulse-warning {\n  animation: pulse-warning 0.75s infinite alternate; }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/* Your stylesheet goes here */\n", ""]);

// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ },
/* 4 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sweetalert2.default)('Hi from webpack!');

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map