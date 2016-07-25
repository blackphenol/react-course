var React = require('react');
var List = require('./List.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ItemStore = require('../reflux/itemStore.jsx');
var httpservice = require('../services/httpservice');

var ListMananger = React.createClass({
  //onChange function will trigger by ItemStore
  mixins: [Reflux.listenTo(ItemStore, 'onChange')],
  getInitialState: function(){
    return {
      items: [],
      newItemText: '',
      showError: {
          display: 'none'
      }
    };
  },
  componentWillMount: function(){
    Actions.getItems(this.props.service);
  },
  onChange: function(event, items){
    var newItemText = '';
    if(event && !items){
      newItemText = event.target.value;
      this.setState({
        newItemText: newItemText,
      });
    }

    if(items && event === (this.props.service + 'Change')){
      this.setState({
        items : items
      });
    }
    this.setState({
      showError: {display: 'none'}
    });
  },
  handleSubmit: function(e){
    e.preventDefault();

    var that = this;
    var newItem = this.state.newItemText;
    if(newItem === '' || newItem.length < 1){
      this.setState({
        showError: {
          color: 'red',
          display: 'block'
        }
      });
      return;
    }

    Actions.postItem(this.props.service, newItem);
  },
  render: function(){

    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    };

    if(this.props.headingColor){
      headingStyle.background = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-xs-4 col-sm-4 col-md-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <form className="form" onSubmit={this.handleSubmit}>
              <div style={this.state.showError}>please input item!</div>
              <div className="col-xs-9 col-sm-9 col-md-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
              </div>
              <div>
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
            <List items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListMananger;
