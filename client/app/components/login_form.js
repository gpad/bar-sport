import React, { Component } from 'react';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  login(event){
    event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  }

  fieldsNotFilled(){
    return this.state.username.length <= 0 || this.state.password.length <= 0;
  }

  render(){

    const buttonDisabled = this.fieldsNotFilled();

    return(
      <form className="form-horizontal" onSubmit={(event) => this.login(event)}>
        <div className="form-group">
          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input refs='username' type="text" className="form-control" id="inputUsername" placeholder="Username" onChange={(event) => this.setState({username: event.target.value})}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlForm="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input refs='password' type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(event) => this.setState({password: event.target.value})}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" disabled={buttonDisabled}>Login!</button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
