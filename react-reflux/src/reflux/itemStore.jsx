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
  postItems: function(service, newItem){
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
          currentItems.push(newItem);
          that.setState({items: currentItems, newItemText: '', showError: {display: 'none'}});
        }else{
          alert('adding fail!');
        }
      })
      .then(function(){
        alert('unknow error');
      });
  },
  //Refresh function
  fireUpdate: function(service){
    this.trigger(service + 'Change', this.items[service]);
  }
});

module.exports = ItemStore;
