const openWeather = new OpenWeather;
const weatherUI = new WeatherUI;


weatherUI.loadCurrentDate();
openWeather.getWeather()
.then(weatherData => weatherUI.getWeatherConditions(weatherData)).catch(err => console.log(err))