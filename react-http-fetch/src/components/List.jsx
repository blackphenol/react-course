var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function(){
    var liItems = this.props.items.map(function(text, index){
      return <ListItem key={index + text} text={text} />;
    });

    var ulStyle = {
      margin : '0 5px 0 5px'
    };

    return (
      <ul style={ulStyle} className="list-group">
        {liItems}
      </ul>)
  }
});

module.exports = List;
