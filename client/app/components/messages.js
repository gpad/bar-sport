import React, {Component} from "react"
import Message from "./message"

class Messages extends Component {
  render() {
    console.log(this.props.messages);
    return (
      <div>
        {this.props.messages.map((msg, id) => <Message key={id+1} message={msg} />)}
      </div>
    );
  }
}

export default Messages;
