const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let err = null;
    let desc = null;
    if (error) {
      err = error;
    } else {
      if (response.statusCode === 200) {
        // convert body from string to object
        const data = JSON.parse(body);
        if (data.length === 0) {
          err = "The breed name is not found";
        } else {
          desc = data[0].description;
        }
      } else {
        err = "Unexpected response";
      }
    }
    callback(err, desc);
  });
};

module.exports = { fetchBreedDescription };