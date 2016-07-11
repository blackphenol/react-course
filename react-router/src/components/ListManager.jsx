var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
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

    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    };

    if(this.props.headingColor){
      headingStyle.background = this.props.headingColor;
      console.log(headingStyle);
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

module.exports = ListManager;
