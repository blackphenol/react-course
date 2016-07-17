var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 7788

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];


app.get('/ingredients', function(req, res) {
    console.log("GET From SERVER");
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

var items = {
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

app.get('/items/:func', function(req, resp){
  var result = {'items' : []};
  if(items[req.params.func]){
    result = items[req.params.func];
  }
  resp.status(200).send(result);
});

app.listen(port);
console.log("server started on port " + port)
