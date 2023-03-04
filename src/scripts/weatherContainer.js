const weatherContainer = (()=>{
    const container = document.createElement('div');
    container.id = 'weatherContainer';


    const countryDetails = document.createElement('div');
    countryDetails.className = 'country-details';

    const cityName = document.createElement('p');
    cityName.className = 'cityName';
    countryDetails.appendChild(cityName);

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


    container.appendChild(countryDetails);
    container.appendChild(weatherDetails);
    container.appendChild(otherWeatherDetails);

    return container;
})();

export {weatherContainer};