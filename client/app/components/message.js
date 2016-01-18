import React, {Component} from "react"

class Message extends Component {
  render() {
    return (
      <p>
        <strong>{this.props.message.from.username}: </strong>
        {this.props.message.message}
      </p>
    );
  }
}

export default Message;
