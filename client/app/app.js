import React from "react"
import ReactDom from "react-dom"
import Message from "./components/message"

let el = document.getElementById('messages');
console.log(el);

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
  ReactDom.render(<Message message={event.data}/>, el);
}
ws.onerror = function (event) {
  console.log("error", event);
}
ws.onclose = function (event) {
  console.log("onclose", event);
}
