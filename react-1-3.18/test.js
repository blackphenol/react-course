var rs = require('readline-sync');
var hello = require('./hello');

var name = rs.question('hello world? ');

console.log('user input:' + name);

hello(name);
