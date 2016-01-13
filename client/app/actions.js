export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const SENT_MESSAGE = 'SENT_MESSAGE';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED = 'LOGGED';

export const LOGOUT = 'LOGOUT';
export const WS_CONNECTING = 'WS_CONNECTING';
export const WS_CONNECTED = 'WS_CONNECTED';
export const WS_DISCONNECTED = 'WS_DISCONNECTED';
export const WS_ERROR = 'WS_ERROR';

/*
 * action creators
 */

export function addMessage(text, username) {
  return { type: ADD_MESSAGE, text: text, username: username}
}

export function sendingMessage(){
  return {type: SENDING_MESSAGE};
}

export function sentMessage(){
  return {type: SENT_MESSAGE};
}

export function sendMessage(websocket, text) {
  return dispatch => {
    dispatch(sendingMessage());
    websocket.send(text);
    dispatch(sentMessage());
  }
}

export function loggingIn(username, password){
  return {type: LOGGING_IN, username: username, password: password};
}

export function logged(token){
  return {type: LOGGED, token: token};
}

export function login(username, password){
  return dispatch => {
    dispatch(loggingIn(username, password));
    fetch('/sessions', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })

    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        dispatch(logout());
      }
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      dispatch(logged(response.token));
    })
    .catch(function(ex) {
      dispatch(logout());
    });
  }
}

export function logout(){
  return { type: LOGOUT }
}

export function ws_connecting(websocket){
  return {type: WS_CONNECTING, websocket: null};
}

export function ws_connected(websocket){
  return {type: WS_CONNECTED, websocket: websocket};
}

export function ws_connect(websocket){
  return dispatch => {
    dispatch(ws_connecting(websocket));
    websocket.connect();
    dispatch(ws_connected(websocket));
  }
}

export function ws_disconnected(){
  return { type: WS_DISCONNECTED }
}

export function ws_error(){
  return { type: WS_ERROR }
}

