class WeatherUI {
    constructor() {
        this.dateUI             = document.getElementById('date-ui'),
        this.sunset             = document.getElementById('sunset'),
        this.sunrise            = document.getElementById('sunrise')
        this.condition          = document.getElementById('condition'),
        this.feelsLike          = document.getElementById('feels-like'),
        this.temperature        = document.getElementById('temperature'),
        this.temperatureLow     = document.getElementById('temperature-low'),
        this.temperatureHigh    = document.getElementById('temperature-high');
    }
    
    loadCurrentDate () {
        this.dateUI.textContent = this.getCurrentDate();
    }

   getCurrentDate() {
        const currentDate = new Date();
        const day = currentDate.getDay();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const year = currentDate.getFullYear();

        const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const monthsOfTheYear = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September','October', 'November', 'December'];

        return `${daysOfTheWeek[day]}, ${monthsOfTheYear[month - 1]} ${date}, ${year}`;

   }

   getWeatherConditions(weatherData) {
        this.temperature.textContent = this.convertKelvinToFahrenheit(weatherData.main.temp);
        this.temperatureLow.textContent = this.convertKelvinToFahrenheit(weatherData.main.temp_min);
        this.temperatureHigh.textContent = this.convertKelvinToFahrenheit(weatherData.main.temp_max);
        this.feelsLike.textContent = this.convertKelvinToFahrenheit(weatherData.main.feels_like);
        this.condition.innerHTML = this.getWeatherConditionIcon(weatherData);
        // console.log(weatherData);
        this.sunrise.textContent = this.getSunrise(weatherData);
        this.sunset.textContent = this.getSunset(weatherData);
   }

   getWeatherConditionIcon(weatherData) {

        const conditions = [
             {
                condition:'Clear',
                icon: '<i class="fas fa-sun"></i>'
            },
            {
                condition: 'Clouds',
                icon: '<i class="fas fa-cloud-sun"></i>'
            },
            {
                condition: 'Rain',
                icon: '<i class="fas fa-cloud-rain"></i>'
            },
            {
                condition: 'Thunderstorm',
                icon: '<i class="fas fa-bolt"></i>'
            },
            {
                condition: 'Snow',
                icon: '<i class="far fa-snowflake"></i>'
            },
            {
                condition: 'Mist',
                icon: '<i class="fas fa-cloud-rain"></i>'
            }
        ];

       let conditionMatch = conditions.filter(match => match.condition === weatherData.weather[0].main);
        
       return conditionMatch[0].icon;

   }

   getSunrise (weatherData) {
        const utcSeconds = weatherData.sys.sunrise;
        const sunrise = this.convertToLocalTime(utcSeconds);
        return this.formatTime(sunrise);
        
   }
   getSunset (weatherData) {
        const utcSeconds = weatherData.sys.sunset;
        const sunset = this.convertToLocalTime(utcSeconds);
        return this.formatTime(sunset);
   }

   convertToLocalTime(utcSeconds){
       const utcDate = new Date();
       utcDate.setTime(utcSeconds*1000);
       return utcDate;  
   }

   formatTime(time) {
       let timeString ='';
        if(time.getHours() > 12) {
            timeString = `${time.getHours() - 12}:${time.getMinutes()} PM`

        } else if (time.getHours() === 12){
            timeString = `${time.getHours()}:${time.getMinutes()} PM`

        } else {
            timeString = `${time.getHours()}:${time.getMinutes()} AM`
        }
        return timeString;
    }




   convertKelvinToFahrenheit(kelvin) {
    return  Math.round((9/5)*(kelvin - 273.15) + 32);
   }

   convertKelvinToCelsius(kelvin) {
     return Math.round(kelvin - 273.15);
   }

}


