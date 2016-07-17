var Fetch = require('whatwg-fetch');

var baseUrl = 'http://localhost:7788';

var httpservice = {
  get: function(url){
    return fetch(baseUrl + url)
      .then(function(response){
        return response.json();
      });
  }
};

module.exports = httpservice;
