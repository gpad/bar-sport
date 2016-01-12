import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginPage from '../containers/login_page'
import MessagePage from '../containers/messages_page'
import NavMenu from '../components/nav_menu'
import { login, logout, addMessage } from '../actions'

class App extends Component {

  onLogin(username, password){
    this.props.dispatch(login(username, password));
  }

  onLogout(){
    this.props.dispatch(logout());
  }

  onSubmit(msg){
    console.log(this.props.user.username, msg);
    this.props.dispatch(addMessage(msg, this.props.user.username))
  }

  render() {

    let app_body;

    if (this.props.user.isLogged) {
      app_body = <div>
        <NavMenu onLogout={() => this.onLogout()}/>
        <div className='message_container'>
          <MessagePage user={this.props.user} messages={this.props.messages} onSubmit={(msg) => this.onSubmit(msg)} />
        </div>
      </div>
    }
    else{
      app_body = <LoginPage onLogin={(username, password) => this.onLogin(username, password)}/>
    }

    return (
      <div>
        {app_body}
      </div>
    )
  }
}

export default connect((state) => state)(App)
