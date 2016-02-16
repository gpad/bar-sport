import store from '../store';
import {addMessage} from '../actions';

class ChatSocket{
  constructor(token){
    this.token = token;
  }
  connect(){
    this.ws = new WebSocket('ws://localhost:8989/chat?token='+ this.token);

    this.ws.onopen = () => {
      console.info('BarSport connected with token '+ this.token);
    };

    this.ws.onmessage = function (event) {
      console.log('Received message ->', event);
      store.dispatch(addMessage(event.data));
    };
  }
  send(message){
    this.ws.send(message);
  }
}

export default ChatSocket;
