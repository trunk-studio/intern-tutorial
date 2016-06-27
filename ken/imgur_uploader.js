"use strict"

const fs = require('fs');
const request = require('request');

function requestImgur(base64img, clientID) {
  return new Promise(function(resolve, reject) {
    let options = {
      url: 'https://api.imgur.com/3/image.json',
      headers: {
        'Authorization': 'Client-ID ' + clientID
      },
      form: {
        image: base64img
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        resolve(info.data.link);
      } else {
        reject(error)
      }
    }

    request.post(options, callback);
  });
}


module.exports = (path, clientID) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      requestImgur(data.toString('base64'), clientID).then((url) => resolve(url), (err) => reject(err));
    });
  });
}
