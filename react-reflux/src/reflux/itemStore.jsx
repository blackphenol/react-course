var Reflux = require('reflux');

var httpservice = require('../services/httpservice');
var Actions = require('./actions.jsx');

var ItemStore = Reflux.createStore({
  listenables: [Actions],
  items : [],
  getItems: function(service){
    if(service){
      httpservice.get(service, 'json')
        .then(function(data){
          this.items[service] = data.items;
          this.fireUpdate(service);
        }.bind(this));
    }
  },
  postItem: function(service, newItem){

    if(!this.items[service]){
      this.items[service] = [];
    }

    this.items[service].push(newItem);
    this.fireUpdate(service);

    var reqData = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newItem: newItem
      })
    };
    httpservice.post(service, reqData)
      .then(function(response){
        if(response.status === 200){
          this.getItems(service);
        }else{
          alert('adding fail!');
        }
      }.bind(this))
      .catch(function(error){
        alert('unknow error: ' + error);
      }.bind(this));
  },
  //Refresh function
  fireUpdate: function(service){
    //trigger will fire onChange function
    this.trigger(service + 'Change', this.items[service]);
  }
});

module.exports = ItemStore;
