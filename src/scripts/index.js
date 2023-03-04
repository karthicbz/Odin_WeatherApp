import { inputContainer } from "./inputContainer";
import { getWeatherData } from "./weatherData";
import { weatherContainer } from "./weatherContainer";

const content = document.querySelector('#content');

content.appendChild(inputContainer);
content.appendChild(weatherContainer);

const searchField = document.querySelector('.city-input');
const searchButton = document.querySelector('.weather-search');
const mainWeather = document.querySelector('.main-weather');
const mainWeatherImage = document.querySelector('.weather-img');

searchButton.addEventListener('click', ()=>{
    getWeatherData.weatherData(searchField.value)
    .then(function(data){
        console.log(data);
        document.querySelector('.cityName').innerHTML = `${data.name}<span>, ${data.sys.country}</span>`;
        mainWeather.innerHTML = `${data.main.temp}<span class='units'>&#176;C</span>`;
        mainWeatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('.weather-text').innerHTML = `Feels like ${data.main.feels_like}<span>&#176;C</span>. ${data.weather[0].description}`;
    })
    .catch(err=>{
        console.log(err);
    })
})