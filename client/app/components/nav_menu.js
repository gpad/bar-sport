import React, { Component, PropTypes } from 'react';

class NavMenu extends Component {
  logout(e){
    e.preventDefault();
    this.props.onLogout();
  }

  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">BarSport</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" onClick={(e) => {this.logout(e)}}>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavMenu;
