import React, {Component} from "react"

class Message extends Component {
  render() {
    return (
      <p>
        <strong>{this.props.message.username}: </strong>
        {this.props.message.text}
      </p>
    );
  }
}

export default Message;
