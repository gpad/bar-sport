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
}
ws.onerror = function (event) {
  console.log("error", event);
}
ws.onclose = function (event) {
  console.log("onclose", event);
}
