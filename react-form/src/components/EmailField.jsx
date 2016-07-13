var React = require('react');
var Validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function(){
    return {valid: true, value: ""}
  },
  onChange : function(e){
    var val = e.target.value;

    if(!Validator.validate(val)){
      this.setState({valid: false, value: val});
    }else{
      this.setState({valid: true, value: val});
    }
  },
  clear: function(){
    this.setState({valid: true, value: ""});
  },
  render: function(){
    var formClass = this.state.valid ? "form-group" : "form-group has-error";
    return (
      <div className={formClass}>
        <label>{this.props.title}</label>
        <input className="form-control"
                type="text"
                onChange={this.onChange}
                placeholder={this.props.placeholder || "Email"}
                value={this.state.value} />
      </div>
    );
  }
});

module.exports = EmailField;
