var React = require('react');
var List = require('./List.jsx');

var ListMananger = React.createClass({
  getInitialState: function(){
    return {
      items: [],
      newItemText: '',
      showError: {
          display: 'none'
      }
    };
  },
  onChange: function(e){
    this.setState({
      newItemText: e.target.value,
      showError: {display: 'none'}
    });
  },
  handleSubmit: function(e){
    e.preventDefault();

    if(this.state.newItemText === '' || this.state.newItemText.length < 1){
      this.setState({
        showError: {
          color: 'red',
          display: 'block'
        }
      });
      return;
    }

    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    this.setState({itmes: currentItems, newItemText: '', showError: {display: 'none'}});

  },
  render: function(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <div style={this.state.showError}>please input item!</div>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
});

module.exports = ListMananger;
