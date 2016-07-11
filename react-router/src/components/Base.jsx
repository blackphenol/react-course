var React = require('react');

var Base = React.createClass({
  render: function(){
    var children = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, {
          title: 'Todo'});
    });
    return (
      <div className="row">
        <div className="row">
          <h1>Header</h1>
        </div>
        <div className="row">
          {children || "Hello World"}
        </div>
        <div className="row">
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
});

module.exports = Base;
