const getWeatherData = (()=>{
    async function weatherData(cityName){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=228a3f9fe276acdf8c030f707cddc96f`, {mode: 'cors'});
            if(response.status !== 404){
                const jsonData = await response.json();
                return jsonData;
            }
            else{
                alert('city not found');
            }
        }
        catch(error){
            console.log(error.code);
        }
    }
    return {weatherData};
})();

export{getWeatherData};