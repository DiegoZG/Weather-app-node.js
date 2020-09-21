const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=1153e1fb0c0cb8f91b86df4bfc806a98&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feel like ${response.body.current.feelslike} degrees out`)

//     }
// })



forecast(-75.7088, 44.1545, (error,data) => {
    console.log('Error', error)
    console.log('Data', data)
})



// geocode('lima', (error, data ) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//     setTimeout(()=> {
//         callback(a + b)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })