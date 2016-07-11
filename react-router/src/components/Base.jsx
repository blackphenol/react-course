var React = require('react');

var Base = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="row">
          <h1>Header</h1>
        </div>
        <div className="row">
          {this.props.children || "Hello World"}
        </div>
        <div className="row">
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
});

module.exports = Base;
