const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=1153e1fb0c0cb8f91b86df4bfc806a98&query=" + latitude + "," + longitude + "&units=f"
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback( 'Unable to connect to weather service!', undefined)
        } else if(response.body.error) {
            callback( 'Unable to find location!' )
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feel like ${response.body.current.feelslike} degrees out`)
        }
    })
    

}

module.exports = forecast