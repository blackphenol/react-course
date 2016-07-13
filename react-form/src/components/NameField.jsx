var React = require('react');

var NameField = React.createClass({
  getInitialState: function(){
    return {value: ""};
  },
  onChange: function(e){
    this.setState({value: e.target.value});
  },
  clear: function(){
    this.setState({value: ""});
  },
  render: function(){
    return (
      <div className="form-group">
        <label>{this.props.title}</label>
        <input className="form-control"
                placeholder={this.props.placeholder || "Name"}
                onChange={this.onChange}
                value={this.state.value} />
      </div>
    );
  }
});

module.exports = NameField;
