var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e){
    if(this.refs.emailField.state.value === "" || !this.refs.emailField.state.valid){
      alert("Email Invalid");
    }else{
      //submit form data
      var httpRequestBody = {
        email: this.refs.emailField.state.value,
        firstName: this.refs.nameField.state.value
      };
      console.log(httpRequestBody);
      this.refs.nameField.clear();
      this.refs.emailField.clear();
    }
  },
  render: function(){
    return (
        <div className="col-sm-3 col-md-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <NameField placeholder="First Name" ref="nameField" title="First Name" />
              <EmailField ref="emailField" title="Email" />
              <button className="btn btn-default"
                      onClick={this.onSubmit} >Submit</button>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = LeadCapture;
