import { createElement, divPacker } from "./element_creator";

const weatherContainer = (()=>{
    const container = document.createElement('div');
    container.id = 'weatherContainer';


    // const countryDetails = document.createElement('div');
    // countryDetails.className = 'country-details';

    // const cityName = document.createElement('p');
    // cityName.className = 'cityName';
    // countryDetails.appendChild(cityName);
    const weatherHeader = divPacker([['p', 'cityName']], 'weather-header');
    const unitToggler = divPacker([['button', 'metric', null, 'C'], ['button', 'imperial', null, 'F']], 'units');
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

    const otherWeatherInfo = divPacker([['p', 'max-temp', null], ['p', 'min-temp', null],
['p', 'visibility', null], ['p', 'humidity', null]], 'other-weather-info');

    container.appendChild(weatherHeader);
    container.appendChild(weatherDetails);
    container.appendChild(otherWeatherDetails);
    container.appendChild(otherWeatherInfo);

    return container;
})();

export {weatherContainer};