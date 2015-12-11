import React, {Component} from "react"

class Message extends Component {
	render() {
		return (
			<p>{this.props.message}</p>
		);
	}
}

export default Message;
