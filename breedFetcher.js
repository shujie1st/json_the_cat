const request = require('request');

// user to specify the breed name using command-line argument
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  // if error, print error and return
  if (error) {
    console.log(error);
    return;
  }

  // convert body from string to object
  const data = JSON.parse(body);

  // if breed name is not found, it will returun an empty array
  if (data.length === 0) {
    console.log("The breed name is not found.");
  } else {
    console.log(data[0].description);
  }
});