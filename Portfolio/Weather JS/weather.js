class OpenWeather {
    constructor() {

        this.appID = '&APPID=635a49626c51ea006f354c4ba44f3ddc'
        this.url = 'http://api.openweathermap.org/data/2.5/weather?q='
    }

    async getWeather() {
        const response = await fetch(`${this.url}Portland,OR,US${this.appID}`);
        const jsonResponse = response.json();
        return jsonResponse;
    }
}

