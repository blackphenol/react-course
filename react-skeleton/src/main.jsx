var React = require('react');
var ReactDOM = require('react-dom');
var ListMananger = require('./components/ListManager.jsx');

ReactDOM.render(<ListMananger title="Todo" headingColor="gray"/>, document.getElementById('todo'));
ReactDOM.render(<ListMananger title="Doing" />, document.getElementById('doing'));
ReactDOM.render(<ListMananger title="Done" headingColor="green"/>, document.getElementById('done'));
