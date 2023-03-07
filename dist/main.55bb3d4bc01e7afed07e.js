/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/element_creator.js":
/*!****************************************!*\
  !*** ./src/scripts/element_creator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "divPacker": () => (/* binding */ divPacker)
/* harmony export */ });
const createElement = (tagName, className=null, idName=null, text=null, src=null, alt=null)=>{
    if(tagName === 'input'){
        return elementCreator.formElementCreator(tagName, className, idName, text);
    }else if(tagName !== 'img'){
        return elementCreator.creator(tagName, className, idName, text);
    }
    else{
        return elementCreator.imageElementCreator(tagName, className, idName, text, src, alt);
    }
}

const divPacker = (values, className=null, idName=null)=>{
    const element = document.createElement('div');
    if(className !== null){
        element.classList.add(className);
    }
    if(idName !== null){
        element.setAttribute('id', `${idName}`);
    }
    values.forEach(value=>{
        const [tagName, className, idName, text, src, alt] = value;
        element.appendChild(createElement(tagName, className, idName, text, src, alt));
    });
    return element;
}

const elementCreator = (()=>{
    const creator = (tagName, className, idName, text)=>{
        const element = document.createElement(tagName);
        if(className !== null){
            element.classList.add(className);
        }
        if(idName !== null){
            element.setAttribute('id', `${idName}`);
        }
        if(tagName !== 'input'){
            if(tagName === 'span'){
                if(text !== null){
                    element.innerHTML = text;
                }
            }else{
                if(text !== null){
                    element.textContent = text;
            }
        }
        }else{
            element.type = text;
        }
        return element;
    }

    const imageElementCreator = (tagName, className, idName, text, src, alt)=>{
        // const element = document.createElement(tagName);
        // if(alt !== null){
        //     element.alt = alt;
        // }
        // if(src !== null){
        //     element.src = src;
        // }
        // return element;
        const element = creator(tagName, className, idName, text);
        if(alt !== null){
            element.alt = alt;
        }
        if(src !== null){
            element.src = src;
        }
        return element;
    }

    const formElementCreator = (tagName, className, idName, type)=>{
        const element = creator(tagName, className, idName, type);
        return element;
    }

    return {creator, imageElementCreator, formElementCreator};
})();



/***/ }),

/***/ "./src/scripts/inputContainer.js":
/*!***************************************!*\
  !*** ./src/scripts/inputContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputContainer": () => (/* binding */ inputContainer)
/* harmony export */ });
const inputContainer = (()=>{
    const container = document.createElement('div');
    container.id = 'inputContainer';

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'city-input';
    inputField.name = 'city-input'
    container.appendChild(inputField);

    const button = document.createElement('button');
    button.className = 'weather-search';
    button.textContent = 'Search';
    container.appendChild(button);

    return container;
})();



/***/ }),

/***/ "./src/scripts/weatherContainer.js":
/*!*****************************************!*\
  !*** ./src/scripts/weatherContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherContainer": () => (/* binding */ weatherContainer)
/* harmony export */ });
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_creator */ "./src/scripts/element_creator.js");
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherData */ "./src/scripts/weatherData.js");



const weatherContainer = (()=>{
    const container = document.createElement('div');
    container.id = 'weatherContainer';


    // const countryDetails = document.createElement('div');
    // countryDetails.className = 'country-details';

    // const cityName = document.createElement('p');
    // cityName.className = 'cityName';
    // countryDetails.appendChild(cityName);
    const weatherHeader = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.divPacker)([['p', 'cityName']], 'weather-header');
    const unitToggler = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.divPacker)([['button', 'metric', null, 'C'], ['button', 'imperial', null, 'F']], 'units');
    weatherHeader.append(unitToggler);

    const weatherDetails = document.createElement('div');
    weatherDetails.className = 'weather-details';

    const weatherImage = document.createElement('img');
    weatherImage.className = 'weather-img';
    weatherImage.src = '#';
    weatherDetails.appendChild(weatherImage);

    const mainWeather = document.createElement('p');
    mainWeather.className = 'main-weather';
    weatherDetails.appendChild(mainWeather);

    const otherWeatherDetails = document.createElement('div');
    otherWeatherDetails.className = 'other-details';

    const weatherText = document.createElement('p');
    weatherText.className = 'weather-text';
    otherWeatherDetails.appendChild(weatherText);

    const otherWeatherInfo = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.divPacker)([['p', 'max-temp', null], ['p', 'min-temp', null],
['p', 'visibility', null], ['p', 'humidity', null]], 'other-weather-info');

    const hourlyWeatherContainer = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hourly-weather');
    for(let i=0; i<40; i++){
        const hourlyWeather = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.divPacker)([['p', 'day'], ['img', 'weather-img'], ['p', 'min-max'], ['p', 'desc']], 'hourly-weather-'+i);
        hourlyWeatherContainer.appendChild(hourlyWeather);
    }

    container.appendChild(weatherHeader);
    container.appendChild(weatherDetails);
    container.appendChild(otherWeatherDetails);
    container.appendChild(otherWeatherInfo);
    container.appendChild(hourlyWeatherContainer);

    return container;
})();



/***/ }),

/***/ "./src/scripts/weatherData.js":
/*!************************************!*\
  !*** ./src/scripts/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHourlyWeatherData": () => (/* binding */ getHourlyWeatherData),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const getWeatherData = (()=>{
    async function weatherData(cityName, unit){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&APPID=228a3f9fe276acdf8c030f707cddc96f`, {mode: 'cors'});
            if(response.status !== 404){
                const jsonData = await response.json();
                return jsonData;
            }
            else{
                alert('city not found');
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return {weatherData};
})();

const getHourlyWeatherData = (()=>{
    async function hourlyWeatherData(cityName, unit){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=228a3f9fe276acdf8c030f707cddc96f`);
            if(response.status !== 404){
                const jsonData = await response.json();
                return jsonData;
            }
            else{
                alert('city not found');
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return {hourlyWeatherData};
})();



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputContainer */ "./src/scripts/inputContainer.js");
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherData */ "./src/scripts/weatherData.js");
/* harmony import */ var _weatherContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherContainer */ "./src/scripts/weatherContainer.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");





const content = document.querySelector('#content');

content.appendChild(_inputContainer__WEBPACK_IMPORTED_MODULE_0__.inputContainer);
content.appendChild(_weatherContainer__WEBPACK_IMPORTED_MODULE_2__.weatherContainer);

const searchField = document.querySelector('.city-input');
const searchButton = document.querySelector('.weather-search');
const mainWeather = document.querySelector('.main-weather');
const mainWeatherImage = document.querySelector('.weather-img');
const units = document.querySelector('.weather-header>.units');
const cityName = document.querySelector('.cityName');
let selectedUnit = {unit: 'metric', symbol: 'C'};

searchButton.addEventListener('click', ()=>{
    getWeatherDetails(searchField.value, selectedUnit.unit);
    getHourlyWeatherDetails(searchField.value, selectedUnit.unit);
})

const displayWeatherDetails = (data, unit)=>{
    cityName.innerHTML = `${data.name}<span>, ${data.sys.country}</span>`;
    mainWeather.innerHTML = `${data.main.temp}<span class='units'>&#176;${unit}</span>`;
    mainWeatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector('.weather-text').innerHTML = `Feels like ${data.main.feels_like}<span>&#176;${unit}</span>. ${data.weather[0].description}`;
    updateOtherInfo(data, unit);
}

const updateOtherInfo = (data, unit)=>{
    const otherInfo = document.querySelectorAll('.other-weather-info>p');
    const [maxTemp, minTemp, visibility, humidity] = Array.from(otherInfo);
    maxTemp.innerHTML = `Max: ${data.main.temp_max}<span class='units'>&#176;${unit}</span>`;
    minTemp.innerHTML = `Min: ${data.main.temp_min}<span class='units'>&#176;${unit}</span>`;
    visibility.textContent = `Visibility: ${Math.floor(data.visibility/1000)}km`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

const getWeatherDetails = (value, unit)=>{
    _weatherData__WEBPACK_IMPORTED_MODULE_1__.getWeatherData.weatherData(value, unit)
    .then(function(data){
        console.log(data);
        displayWeatherDetails(data, selectedUnit.symbol);
    })
    .catch(err=>{
        console.log(err);
    })
}

const getHourlyWeatherDetails = (value, unit)=>{
    _weatherData__WEBPACK_IMPORTED_MODULE_1__.getHourlyWeatherData.hourlyWeatherData(value, unit)
    .then(function(data){
        console.log(data.list);
        displayHourlyWeatherDetails(data.list, selectedUnit.symbol);
    })
    .catch(err=>{
        console.log(err);
    })
}

const displayHourlyWeatherDetails = (data, unit)=>{
    document.querySelectorAll('.hourly-weather>div').forEach(div=>{
        let currentArray = Number(div.className.slice(-1));
        const [day, image, weather, weatherDesc] = Array.from(div.childNodes);
        const date = new Date(data[currentArray].dt * 1000);
        day.textContent = date.toDateString().replace('2023', '');

        image.src = `http://openweathermap.org/img/wn/${data[currentArray].weather[0].icon}.png`;

        weather.innerHTML = `${data[currentArray].main.temp}<span>&#176;${unit}</span>`;

        weatherDesc.textContent = data[currentArray].weather[0].description;
    })
}

window.addEventListener('load', ()=>{
    getWeatherDetails('london', selectedUnit.unit);
    getHourlyWeatherDetails('london', selectedUnit.unit);
    document.querySelector('.units>.metric').classList.add('selected');
})

units.addEventListener('click', (e)=>{
    document.querySelectorAll('.units>button').forEach(button=>{
        button.classList.remove('selected');
    });
    selectedUnit.unit = e.target.className;
    let name = cityName.textContent.split(',');
    getWeatherDetails(name[0], selectedUnit.unit);
    getHourlyWeatherDetails(name[0], selectedUnit.unit);
    if(e.target.className === 'metric'){
        selectedUnit.symbol = 'C';
    }else{
        selectedUnit.symbol = 'F';
    }
    e.target.classList.add('selected');
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFFLEtBQUs7QUFDcEYsZ0NBQWdDLG1CQUFtQiwwQkFBMEIsRUFBRSxLQUFLO0FBQ3BGLDRDQUE0QyxpQ0FBaUM7QUFDN0Usd0NBQXdDLG1CQUFtQjtBQUMzRDs7QUFFQTtBQUNBLElBQUksb0VBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxnRkFBc0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCxtQ0FBbUM7O0FBRTNGLCtCQUErQiw2QkFBNkIsWUFBWSxFQUFFLEtBQUs7O0FBRS9FO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzIzOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9lbGVtZW50X2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbnB1dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL3dlYXRoZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lLCBjbGFzc05hbWU9bnVsbCwgaWROYW1lPW51bGwsIHRleHQ9bnVsbCwgc3JjPW51bGwsIGFsdD1udWxsKT0+e1xuICAgIGlmKHRhZ05hbWUgPT09ICdpbnB1dCcpe1xuICAgICAgICByZXR1cm4gZWxlbWVudENyZWF0b3IuZm9ybUVsZW1lbnRDcmVhdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0KTtcbiAgICB9ZWxzZSBpZih0YWdOYW1lICE9PSAnaW1nJyl7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q3JlYXRvci5jcmVhdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDcmVhdG9yLmltYWdlRWxlbWVudENyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQsIHNyYywgYWx0KTtcbiAgICB9XG59XG5cbmNvbnN0IGRpdlBhY2tlciA9ICh2YWx1ZXMsIGNsYXNzTmFtZT1udWxsLCBpZE5hbWU9bnVsbCk9PntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmKGlkTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkTmFtZX1gKTtcbiAgICB9XG4gICAgdmFsdWVzLmZvckVhY2godmFsdWU9PntcbiAgICAgICAgY29uc3QgW3RhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0LCBzcmMsIGFsdF0gPSB2YWx1ZTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0LCBzcmMsIGFsdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50Q3JlYXRvciA9ICgoKT0+e1xuICAgIGNvbnN0IGNyZWF0b3IgPSAodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpPT57XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICBpZihjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWROYW1lICE9PSBudWxsKXtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkTmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0YWdOYW1lICE9PSAnaW5wdXQnKXtcbiAgICAgICAgICAgIGlmKHRhZ05hbWUgPT09ICdzcGFuJyl7XG4gICAgICAgICAgICAgICAgaWYodGV4dCAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZih0ZXh0ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LnR5cGUgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlRWxlbWVudENyZWF0b3IgPSAodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQsIHNyYywgYWx0KT0+e1xuICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgLy8gaWYoYWx0ICE9PSBudWxsKXtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuYWx0ID0gYWx0O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKHNyYyAhPT0gbnVsbCl7XG4gICAgICAgIC8vICAgICBlbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpO1xuICAgICAgICBpZihhbHQgIT09IG51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc3JjICE9PSBudWxsKXtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gc3JjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1FbGVtZW50Q3JlYXRvciA9ICh0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdHlwZSk9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHR5cGUpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0b3IsIGltYWdlRWxlbWVudENyZWF0b3IsIGZvcm1FbGVtZW50Q3JlYXRvcn07XG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsIGRpdlBhY2tlcn07IiwiY29uc3QgaW5wdXRDb250YWluZXIgPSAoKCk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAnaW5wdXRDb250YWluZXInO1xuXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RmllbGQuY2xhc3NOYW1lID0gJ2NpdHktaW5wdXQnO1xuICAgIGlucHV0RmllbGQubmFtZSA9ICdjaXR5LWlucHV0J1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnd2VhdGhlci1zZWFyY2gnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7aW5wdXRDb250YWluZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGRpdlBhY2tlciB9IGZyb20gXCIuL2VsZW1lbnRfY3JlYXRvclwiO1xuaW1wb3J0IHsgZ2V0SG91cmx5V2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuXG5jb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gKCgpPT57XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlkID0gJ3dlYXRoZXJDb250YWluZXInO1xuXG5cbiAgICAvLyBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvdW50cnlEZXRhaWxzLmNsYXNzTmFtZSA9ICdjb3VudHJ5LWRldGFpbHMnO1xuXG4gICAgLy8gY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY2l0eU5hbWUuY2xhc3NOYW1lID0gJ2NpdHlOYW1lJztcbiAgICAvLyBjb3VudHJ5RGV0YWlscy5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gICAgY29uc3Qgd2VhdGhlckhlYWRlciA9IGRpdlBhY2tlcihbWydwJywgJ2NpdHlOYW1lJ11dLCAnd2VhdGhlci1oZWFkZXInKTtcbiAgICBjb25zdCB1bml0VG9nZ2xlciA9IGRpdlBhY2tlcihbWydidXR0b24nLCAnbWV0cmljJywgbnVsbCwgJ0MnXSwgWydidXR0b24nLCAnaW1wZXJpYWwnLCBudWxsLCAnRiddXSwgJ3VuaXRzJyk7XG4gICAgd2VhdGhlckhlYWRlci5hcHBlbmQodW5pdFRvZ2dsZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyRGV0YWlscy5jbGFzc05hbWUgPSAnd2VhdGhlci1kZXRhaWxzJztcblxuICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJJbWFnZS5jbGFzc05hbWUgPSAnd2VhdGhlci1pbWcnO1xuICAgIHdlYXRoZXJJbWFnZS5zcmMgPSAnIyc7XG4gICAgd2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcblxuICAgIGNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1haW5XZWF0aGVyLmNsYXNzTmFtZSA9ICdtYWluLXdlYXRoZXInO1xuICAgIHdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1haW5XZWF0aGVyKTtcblxuICAgIGNvbnN0IG90aGVyV2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdGhlcldlYXRoZXJEZXRhaWxzLmNsYXNzTmFtZSA9ICdvdGhlci1kZXRhaWxzJztcblxuICAgIGNvbnN0IHdlYXRoZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlYXRoZXJUZXh0LmNsYXNzTmFtZSA9ICd3ZWF0aGVyLXRleHQnO1xuICAgIG90aGVyV2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQod2VhdGhlclRleHQpO1xuXG4gICAgY29uc3Qgb3RoZXJXZWF0aGVySW5mbyA9IGRpdlBhY2tlcihbWydwJywgJ21heC10ZW1wJywgbnVsbF0sIFsncCcsICdtaW4tdGVtcCcsIG51bGxdLFxuWydwJywgJ3Zpc2liaWxpdHknLCBudWxsXSwgWydwJywgJ2h1bWlkaXR5JywgbnVsbF1dLCAnb3RoZXItd2VhdGhlci1pbmZvJyk7XG5cbiAgICBjb25zdCBob3VybHlXZWF0aGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvdXJseS13ZWF0aGVyJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8NDA7IGkrKyl7XG4gICAgICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBkaXZQYWNrZXIoW1sncCcsICdkYXknXSwgWydpbWcnLCAnd2VhdGhlci1pbWcnXSwgWydwJywgJ21pbi1tYXgnXSwgWydwJywgJ2Rlc2MnXV0sICdob3VybHktd2VhdGhlci0nK2kpO1xuICAgICAgICBob3VybHlXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseVdlYXRoZXIpO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySGVhZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdGhlcldlYXRoZXJEZXRhaWxzKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3RoZXJXZWF0aGVySW5mbyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseVdlYXRoZXJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7d2VhdGhlckNvbnRhaW5lcn07IiwiY29uc3QgZ2V0V2VhdGhlckRhdGEgPSAoKCk9PntcbiAgICBhc3luYyBmdW5jdGlvbiB3ZWF0aGVyRGF0YShjaXR5TmFtZSwgdW5pdCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mdW5pdHM9JHt1bml0fSZBUFBJRD0yMjhhM2Y5ZmUyNzZhY2RmOGMwMzBmNzA3Y2RkYzk2ZmAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA0KXtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbkRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjaXR5IG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3dlYXRoZXJEYXRhfTtcbn0pKCk7XG5cbmNvbnN0IGdldEhvdXJseVdlYXRoZXJEYXRhID0gKCgpPT57XG4gICAgYXN5bmMgZnVuY3Rpb24gaG91cmx5V2VhdGhlckRhdGEoY2l0eU5hbWUsIHVuaXQpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHlOYW1lfSZ1bml0cz0ke3VuaXR9JmFwcGlkPTIyOGEzZjlmZTI3NmFjZGY4YzAzMGY3MDdjZGRjOTZmYCk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT09IDQwNCl7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2l0eSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtob3VybHlXZWF0aGVyRGF0YX07XG59KSgpO1xuXG5leHBvcnR7Z2V0V2VhdGhlckRhdGEsIGdldEhvdXJseVdlYXRoZXJEYXRhfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGlucHV0Q29udGFpbmVyIH0gZnJvbSBcIi4vaW5wdXRDb250YWluZXJcIjtcbmltcG9ydCB7IGdldEhvdXJseVdlYXRoZXJEYXRhLCBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XG5pbXBvcnQgeyB3ZWF0aGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vd2VhdGhlckNvbnRhaW5lclwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcblxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCcpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItc2VhcmNoJyk7XG5jb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdlYXRoZXInKTtcbmNvbnN0IG1haW5XZWF0aGVySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbWcnKTtcbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaGVhZGVyPi51bml0cycpO1xuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eU5hbWUnKTtcbmxldCBzZWxlY3RlZFVuaXQgPSB7dW5pdDogJ21ldHJpYycsIHN5bWJvbDogJ0MnfTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBnZXRXZWF0aGVyRGV0YWlscyhzZWFyY2hGaWVsZC52YWx1ZSwgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgIGdldEhvdXJseVdlYXRoZXJEZXRhaWxzKHNlYXJjaEZpZWxkLnZhbHVlLCBzZWxlY3RlZFVuaXQudW5pdCk7XG59KVxuXG5jb25zdCBkaXNwbGF5V2VhdGhlckRldGFpbHMgPSAoZGF0YSwgdW5pdCk9PntcbiAgICBjaXR5TmFtZS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9PHNwYW4+LCAke2RhdGEuc3lzLmNvdW50cnl9PC9zcGFuPmA7XG4gICAgbWFpbldlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLnRlbXB9PHNwYW4gY2xhc3M9J3VuaXRzJz4mIzE3Njske3VuaXR9PC9zcGFuPmA7XG4gICAgbWFpbldlYXRoZXJJbWFnZS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10ZXh0JykuaW5uZXJIVE1MID0gYEZlZWxzIGxpa2UgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX08c3Bhbj4mIzE3Njske3VuaXR9PC9zcGFuPi4gJHtkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcbiAgICB1cGRhdGVPdGhlckluZm8oZGF0YSwgdW5pdCk7XG59XG5cbmNvbnN0IHVwZGF0ZU90aGVySW5mbyA9IChkYXRhLCB1bml0KT0+e1xuICAgIGNvbnN0IG90aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdGhlci13ZWF0aGVyLWluZm8+cCcpO1xuICAgIGNvbnN0IFttYXhUZW1wLCBtaW5UZW1wLCB2aXNpYmlsaXR5LCBodW1pZGl0eV0gPSBBcnJheS5mcm9tKG90aGVySW5mbyk7XG4gICAgbWF4VGVtcC5pbm5lckhUTUwgPSBgTWF4OiAke2RhdGEubWFpbi50ZW1wX21heH08c3BhbiBjbGFzcz0ndW5pdHMnPiYjMTc2OyR7dW5pdH08L3NwYW4+YDtcbiAgICBtaW5UZW1wLmlubmVySFRNTCA9IGBNaW46ICR7ZGF0YS5tYWluLnRlbXBfbWlufTxzcGFuIGNsYXNzPSd1bml0cyc+JiMxNzY7JHt1bml0fTwvc3Bhbj5gO1xuICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgVmlzaWJpbGl0eTogJHtNYXRoLmZsb29yKGRhdGEudmlzaWJpbGl0eS8xMDAwKX1rbWA7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xufVxuXG5jb25zdCBnZXRXZWF0aGVyRGV0YWlscyA9ICh2YWx1ZSwgdW5pdCk9PntcbiAgICBnZXRXZWF0aGVyRGF0YS53ZWF0aGVyRGF0YSh2YWx1ZSwgdW5pdClcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRpc3BsYXlXZWF0aGVyRGV0YWlscyhkYXRhLCBzZWxlY3RlZFVuaXQuc3ltYm9sKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnI9PntcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxufVxuXG5jb25zdCBnZXRIb3VybHlXZWF0aGVyRGV0YWlscyA9ICh2YWx1ZSwgdW5pdCk9PntcbiAgICBnZXRIb3VybHlXZWF0aGVyRGF0YS5ob3VybHlXZWF0aGVyRGF0YSh2YWx1ZSwgdW5pdClcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5saXN0KTtcbiAgICAgICAgZGlzcGxheUhvdXJseVdlYXRoZXJEZXRhaWxzKGRhdGEubGlzdCwgc2VsZWN0ZWRVbml0LnN5bWJvbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbn1cblxuY29uc3QgZGlzcGxheUhvdXJseVdlYXRoZXJEZXRhaWxzID0gKGRhdGEsIHVuaXQpPT57XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS13ZWF0aGVyPmRpdicpLmZvckVhY2goZGl2PT57XG4gICAgICAgIGxldCBjdXJyZW50QXJyYXkgPSBOdW1iZXIoZGl2LmNsYXNzTmFtZS5zbGljZSgtMSkpO1xuICAgICAgICBjb25zdCBbZGF5LCBpbWFnZSwgd2VhdGhlciwgd2VhdGhlckRlc2NdID0gQXJyYXkuZnJvbShkaXYuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhW2N1cnJlbnRBcnJheV0uZHQgKiAxMDAwKTtcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gZGF0ZS50b0RhdGVTdHJpbmcoKS5yZXBsYWNlKCcyMDIzJywgJycpO1xuXG4gICAgICAgIGltYWdlLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGFbY3VycmVudEFycmF5XS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cbiAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhW2N1cnJlbnRBcnJheV0ubWFpbi50ZW1wfTxzcGFuPiYjMTc2OyR7dW5pdH08L3NwYW4+YDtcblxuICAgICAgICB3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGRhdGFbY3VycmVudEFycmF5XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIH0pXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICBnZXRXZWF0aGVyRGV0YWlscygnbG9uZG9uJywgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgIGdldEhvdXJseVdlYXRoZXJEZXRhaWxzKCdsb25kb24nLCBzZWxlY3RlZFVuaXQudW5pdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRzPi5tZXRyaWMnKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufSlcblxudW5pdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5pdHM+YnV0dG9uJykuZm9yRWFjaChidXR0b249PntcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG4gICAgc2VsZWN0ZWRVbml0LnVuaXQgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgbGV0IG5hbWUgPSBjaXR5TmFtZS50ZXh0Q29udGVudC5zcGxpdCgnLCcpO1xuICAgIGdldFdlYXRoZXJEZXRhaWxzKG5hbWVbMF0sIHNlbGVjdGVkVW5pdC51bml0KTtcbiAgICBnZXRIb3VybHlXZWF0aGVyRGV0YWlscyhuYW1lWzBdLCBzZWxlY3RlZFVuaXQudW5pdCk7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbWV0cmljJyl7XG4gICAgICAgIHNlbGVjdGVkVW5pdC5zeW1ib2wgPSAnQyc7XG4gICAgfWVsc2V7XG4gICAgICAgIHNlbGVjdGVkVW5pdC5zeW1ib2wgPSAnRic7XG4gICAgfVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9