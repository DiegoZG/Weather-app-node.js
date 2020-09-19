const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1153e1fb0c0cb8f91b86df4bfc806a98&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to weather service!')
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feel like ${response.body.current.feelslike} degrees out`)

    }
})


// const mapurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGllZ296ZWdhcnJhNzgiLCJhIjoiY2tmYTV3eGQ2MDN5aTM0dDFqZHBkbW9taiJ9.lSRYHMRQ8NrP0VceVr1_mA&limit=1'

// request({url: mapurl, json: true}, (error, response) => {
//     console.log(`${response.body.features[0].center[1]}, ${response.body.features[0].center[0]} `)
// })