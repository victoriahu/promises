/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  
// require('fs').readFileSync('abc.txt').toString().split('\n').forEach(function (line) { line; })
  console.log(filePath);
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      var firstLine = fileData.toString().split('\n')[0];
      callback(null, firstLine);
    }
  });
};

// request("http://www.sitepoint.com", function(error, response, body) {
//   console.log(body);
// });
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (error, response) => {
    // console.log(response.statusCode);
    if (error) {
      // console.log("error is running", error);
      callback(new Error('Invalid URI')); 
      // callback(error);
      // callback(error, null);s
    } else {
      // console.log("status Code: ", response.statusCode);
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};






















