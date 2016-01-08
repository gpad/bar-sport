import React, {Component} from "react"
import Message from "./message"

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((msg, id) => <Message key={id+1} message={msg} />)}
      </div>
    );
  }
}

export default MessageList;
