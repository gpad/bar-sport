import React, { Component } from 'react';

class InputMessage extends Component {
  constructor(){
    super();
    this.state = {message: ''};
  }

  isSendEnabled(){
    return this.state.message.length > 0;
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({message: ''});
  }

  render(){

    const buttonDisabled = !this.isSendEnabled();

    return(
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Write a message..." onChange={(event) => this.setState({message: event.target.value})} value={this.state.message}/>
            <span className="input-group-btn">
              <button className="btn btn-default" disabled={buttonDisabled} type="submit">Send</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default InputMessage;
