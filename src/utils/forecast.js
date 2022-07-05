const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2d9803deb7ca7dbfea58a29b5955a79f&query='+latitude+','+longitude;

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            console.log(body.current)
            const temperature = body.current.temperature;
            const feelsLikeTemperature = body.current.feelslike;
            const weatherDescription = body.current.weather_descriptions;
            const humidity = body.current.humidity;
            const completeDesc = weatherDescription[0] + ': It is currently '+temperature+' degress out. It feels like '+feelsLikeTemperature+' degress out. Humidity is ' + humidity;
            callback(undefined, completeDesc);
        }
    })
}

module.exports = forecast;