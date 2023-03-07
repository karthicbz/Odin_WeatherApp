import { inputContainer } from "./inputContainer";
import { getHourlyWeatherData, getWeatherData } from "./weatherData";
import { weatherContainer } from "./weatherContainer";
import '../styles/style.css';
import loaderImage from '../images/weather_loader.gif';

const content = document.querySelector('#content');

content.appendChild(inputContainer);
content.appendChild(weatherContainer);

const searchField = document.querySelector('.city-input');
const searchButton = document.querySelector('.weather-search');
const mainWeather = document.querySelector('.main-weather');
const mainWeatherImage = document.querySelector('.weather-img');
const units = document.querySelector('.weather-header>.units');
const cityName = document.querySelector('.cityName');
const loader = document.querySelector('#weatherContainer>.loader-image');
loader.src = loaderImage;

let selectedUnit = {unit: 'metric', symbol: 'C'};

searchButton.addEventListener('click', ()=>{
    if(searchField.value !== ''){
        getWeatherDetails(searchField.value, selectedUnit.unit);
        getHourlyWeatherDetails(searchField.value, selectedUnit.unit);
    }else{
        alert('city name must not be empty');
    }
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
    getWeatherData.weatherData(value, unit)
    .then(function(data){
        console.log(data);
        displayWeatherDetails(data, selectedUnit.symbol);
    })
    .catch(err=>{
        console.log(err);
    })
}

const getHourlyWeatherDetails = (value, unit)=>{
    getHourlyWeatherData.hourlyWeatherData(value, unit)
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
