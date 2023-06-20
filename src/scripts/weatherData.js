const apikey = process.env.API_KEY;

const getWeatherData = (() => {
  async function weatherData(cityName, unit) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&APPID=${apikey}`,
        { mode: "cors" }
      );
      if (response.status !== 404) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        alert("city not found");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { weatherData };
})();

const getHourlyWeatherData = (() => {
  async function hourlyWeatherData(cityName, unit) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${apikey}`
      );
      if (response.status !== 404) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        alert("city not found");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { hourlyWeatherData };
})();

export { getWeatherData, getHourlyWeatherData };
