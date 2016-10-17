var axios = require('axios');

// GENERATE BASE URL

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=c828622ff452e1078e432e69b7d6492e';

module.exports = {
    getTemp: function(location) {
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

        return axios.get(requestUrl).then(
            function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                }
                else {
                    return res.data.main.temp;
                }
            },

            function (res) {
                throw new Error(res.data.message);

            });

    }
};