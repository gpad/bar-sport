import React, {Component} from "react"
import Message from "./message"

class MessageList extends Component {
  render() {

    let messageListStyle = {
      minHeight: '500px'
    }

    return (
      <div style={messageListStyle}>
        {this.props.messages.map((msg, id) => <Message key={id+1} message={msg} />)}
      </div>
    );
  }
}

export default MessageList;
