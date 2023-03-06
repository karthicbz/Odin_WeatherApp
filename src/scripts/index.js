import { inputContainer } from "./inputContainer";
import { getWeatherData } from "./weatherData";
import { weatherContainer } from "./weatherContainer";
import '../styles/style.css';

const content = document.querySelector('#content');

content.appendChild(inputContainer);
content.appendChild(weatherContainer);

const searchField = document.querySelector('.city-input');
const searchButton = document.querySelector('.weather-search');
const mainWeather = document.querySelector('.main-weather');
const mainWeatherImage = document.querySelector('.weather-img');

searchButton.addEventListener('click', ()=>{
    getWeatherDetails(searchField.value, 'metric');
})

const displayWeatherDetails = (data, unit)=>{
    document.querySelector('.cityName').innerHTML = `${data.name}<span>, ${data.sys.country}</span>`;
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
    getWeatherData.weatherData(value, unit)
    .then(function(data){
        console.log(data);
        displayWeatherDetails(data, 'C');
    })
    .catch(err=>{
        console.log(err);
    })
}

window.addEventListener('load', ()=>{
    getWeatherDetails('london', 'metric');
    document.querySelector('.units>.celcius').classList.add('selected');
})