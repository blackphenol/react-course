var Fetch = require('whatwg-fetch');

var baseUrl = 'http://localhost:7788';
var commonResponse = function(response, resType){
  resType = resType ? resType : 'response';
  if(resType === 'json'){
    return response.json();
  }else if(resType === 'text'){
    return response.text();
  }else{
    return response;
  }
};

var httpservice = {
  get: function(url, resType){
    return fetch(baseUrl + url)
      .then(function(response){
        return commonResponse(response, resType);
      });
  },
  post: function(url, reqData, resType){
    reqData.method = 'post';
    return fetch(baseUrl + url, reqData)
      .then(function(response){
        return commonResponse(response, resType);
      });
  },

};

module.exports = httpservice;
