import React, { Component, PropTypes } from 'react';
import MessageList from '../components/message_list';
import InputMessage from '../components/input_message';

class MessagePage extends Component {

  render(){
    return(
      <section className='container'>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className='panel-title'>
              Chat
            </h3>
          </div>
          <div className="panel-body">
            <MessageList messages={this.props.messages} />
          </div>
          <div className="panel-footer">
            <InputMessage onSubmit={this.props.onSubmit} />
          </div>
        </div>

      </section>
    );
  }
}

export default MessagePage;
