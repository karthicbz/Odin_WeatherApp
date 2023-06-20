import { createElement, divPacker } from "./element_creator";
import { getHourlyWeatherData } from "./weatherData";
// import loaderImage from '../images/weather_loader.gif';

const weatherContainer = (() => {
  const container = document.createElement("div");
  container.id = "weatherContainer";

  const weatherHeader = divPacker([["p", "cityName"]], "weather-header");
  const unitToggler = divPacker(
    [
      ["button", "metric", null, "C"],
      ["button", "imperial", null, "F"],
    ],
    "units"
  );
  weatherHeader.append(unitToggler);

  const weatherDetails = document.createElement("div");
  weatherDetails.className = "weather-details";

  const weatherImage = document.createElement("img");
  weatherImage.className = "weather-img";
  weatherImage.src = "#";
  weatherDetails.appendChild(weatherImage);

  const mainWeather = document.createElement("p");
  mainWeather.className = "main-weather";
  weatherDetails.appendChild(mainWeather);

  const otherWeatherDetails = document.createElement("div");
  otherWeatherDetails.className = "other-details";

  const weatherText = document.createElement("p");
  weatherText.className = "weather-text";
  otherWeatherDetails.appendChild(weatherText);

  const otherWeatherInfo = divPacker(
    [
      ["p", "max-temp", null],
      ["p", "min-temp", null],
      ["p", "visibility", null],
      ["p", "humidity", null],
    ],
    "other-weather-info"
  );

  const hourlyWeatherContainer = createElement("div", "hourly-weather");
  for (let i = 0; i < 40; i++) {
    const hourlyWeather = divPacker(
      [
        ["p", "day"],
        ["img", "weather-img"],
        ["p", "min-max"],
        ["p", "desc"],
      ],
      "hourly-weather-" + i
    );
    hourlyWeatherContainer.appendChild(hourlyWeather);
  }

  const loader_image = createElement("img", "loader-image");

  container.appendChild(weatherHeader);
  container.appendChild(weatherDetails);
  container.appendChild(otherWeatherDetails);
  container.appendChild(otherWeatherInfo);
  container.appendChild(hourlyWeatherContainer);
  container.appendChild(loader_image);

  return container;
})();

export { weatherContainer };
