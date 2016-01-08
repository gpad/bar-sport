import React from "react"
import ReactDom from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { addMessage } from './actions'

import App from "./containers/app"
import barSportApp from './reducers'

let store = createStore(barSportApp)
let rootElement = document.getElementById('messages')

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

var ws = new WebSocket("ws://localhost:8989/chat");

ws.onopen = function (event) {
  console.log("onopen", event);
  var count = 0;
  var idInterval = setInterval(function () {
    if (count === 10){
      clearInterval(idInterval);
      ws.close();
      return;
    }
    ws.send("hello " + count);
    count = count + 1;
  }, 1000);
}
ws.onmessage = function (event) {
  console.log("onmessage", event.data);

  // dispatch action on receive data
  store.dispatch(addMessage(event.data));
}
ws.onerror = function (event) {
  console.log("error", event);
}
ws.onclose = function (event) {
  console.log("onclose", event);
}
