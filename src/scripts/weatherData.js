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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&cnt=10&appid=228a3f9fe276acdf8c030f707cddc96f`);
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

export{getWeatherData, getHourlyWeatherData};