/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });
  const element = document.documentElement,
    body = document.body;
  const calcScroll = () => {
    upElem.addEventListener('click', function (event) {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (this.hash !== '') {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash),
          hashElementTop = 0;
        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }
        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };
  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1,
      prevScrollTop,
      speed;
    if (to > from) {
      speed = 10;
    } else {
      speed = -10;
    }
    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (prevScrollTop === scrollTop || to > from && scrollTop >= to || to < from && scrollTop <= to) {
        clearInterval(move);
        history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
  calcScroll();
};
/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slide = () => {
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (slide);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = () => {
  const menu = document.querySelectorAll('.parent_menu_btn'),
    content = document.querySelectorAll('.menu-content');
  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
  }
  ;
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = 'block';
    menu.forEach(item => {
      item.classList.remove('active');
    });
    menu[i].classList.add('active');
  }
  ;
  menu.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      hideTabContent();
      showTabContent(index);
    });
  });
  hideTabContent();
  showTabContent();
};

// const menuLinks = document.querySelectorAll('.parent_menu_btn');
// const menuContents = document.querySelectorAll('.menu-content');
// const menuName = document.querySelectorAll('.parent_menu_name');

// // Добавляем обработчик события клика на каждую ссылку
// menuLinks.forEach(function (link, index) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();

//         menuLinks.forEach(function(item, index) {
//             item.addEventListener('click', function() {
//                 // Сбрасываем цвет фона для всех элементов
//                 menuLinks.forEach(function(item) {
//                     item.style.backgroundColor = '';
//                 });

//                 // Устанавливаем цвет фона для текущего элемента
//                 this.style.backgroundColor = 'black';
//                 menuName[index].style.color = '#fff';

//             });
//         });

//         // Удаляем класс 'active' у всех ссылок и блоков с содержанием
//         menuLinks.forEach(function (link) {
//             link.classList.remove('active');
//         });

//         menuContents.forEach(function (content) {
//             content.classList.remove('active');
//         });

//         // Добавляем класс 'active' только той ссылке и блоку, по которым был клик
//         link.classList.add('active');
//         menuContents[index].classList.add('active');
//     });
// });
// };

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slide */ "./src/js/modules/slide.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
// import hamburger from './modules/hamburger';



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_slide__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])('.pageup');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map