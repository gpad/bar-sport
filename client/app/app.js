import React from "react"
import ReactDom from "react-dom"
import Messages from "./components/messages"

let el = document.getElementById('messages');
console.log(el);

var ws = new WebSocket("ws://localhost:8989/chat");
var messages = [];
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
  messages.push(event.data);
  console.log("onmessage", event.data);
  ReactDom.render(<Messages messages={messages}/>, el);
}
ws.onerror = function (event) {
  console.log("error", event);
}
ws.onclose = function (event) {
  console.log("onclose", event);
}
