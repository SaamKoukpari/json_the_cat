const request = require('request');

let searchTerm = process.argv[2]
request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, function (error, response, body) {
  if (error) {
    return console.log('Request Error')
  }
let parsed = JSON.parse(body)
let breed = parsed[0]
  if (!breed) {
    return console.log('Sorry, breed not found!')
  }
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', breed.description); 
});
