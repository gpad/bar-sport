import React, { Component } from 'react';
import LoginForm from '../components/login_form';

class LoginPage extends Component {
  render(){
    let divStyle = {
      marginTop: '120px'
    };
    return(
      <section className='container'>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default" style={divStyle}>
              <div className="panel-heading">
                <h3 className='panel-title'>
                  Welcome to BarSport
                </h3>
              </div>
              <div className="panel-body">
                <LoginForm onLogin={this.props.onLogin}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;
