/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');




// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        var firstLine = fileData.toString().split('\n')[0];
        resolve(firstLine);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise((resolve, reject) =>
    request(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);  
      }
    })
  );
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};


// There are five steps to writing a promise-returning function:

// Create a promise with the new Promise constructor
// Do something async, then...
// Pass the successful value into the resolve function
// this value will be made available in the next then block
// only 1 value can ever be passed into resolve
// Pass any errors into the reject function
// this error will be made available in the catch block
// return the promise instance. This should be a synchronous step