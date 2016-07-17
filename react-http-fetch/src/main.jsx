var React = require('react');
var ReactDOM = require('react-dom');
var ListMananger = require('./components/ListManager.jsx');

ReactDOM.render(<ListMananger title="Todo" headingColor="gray" service="/items/todo"/>, document.getElementById('todo'));
ReactDOM.render(<ListMananger title="Doing" service="/items/doing"/>, document.getElementById('doing'));
ReactDOM.render(<ListMananger title="Done" headingColor="green" service="/items/done"/>, document.getElementById('done'));
