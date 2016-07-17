var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 7788
var jsonParser = bodyParser.json()
//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(jsonParser);
app.use(bodyParser.urlencoded({extended: false}));

var store = {
  todo: {
    items: [
      'dinner at 19:00',
      'learn reactjs',
      'learn node',
      '洗衣服'
    ]
  },
  doing: {
    items: [
      'learn react http fetch',
    ]
  },
  done: {
    items: [
      '機車退款',
      '看死侍'
    ]
  }
};

app.get('/items/:func', function(req, res){
  var result = {'items' : []};
  if(store[req.params.func]){
    result = store[req.params.func];
  }
  res.status(200).send(result);
});

app.post('/items/:func', function(req, res){
  if(store[req.params.func]){
    var storeItemGroup = store[req.params.func];
    var newItem = req.body.newItem;
    // console.log('content-type:');
    // console.log(req.get('content-type'));
    // console.log('body:');
    // console.log(req.body);
    if(newItem){
      storeItemGroup.items.push(newItem);
      res.sendStatus(200);
      return;
    }
  }

  res.sendStatus(400);
});

app.listen(port);
console.log("server started on port " + port)
