var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function(){
    var createItem = function(text, index){
      return <ListItem key={index + text} text={text} />;
    };

    var ulStyle = {
      margin : '0 5px 0 5px'
    };
    
    return (<ul style={ulStyle} className="list-group">{this.props.items.map(createItem)}</ul>)
  }
});

module.exports = List;
