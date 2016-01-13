export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const SENT_MESSAGE = 'SENT_MESSAGE';
export const LOGIN = 'LOGIN';
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

export function login(username, password){
  return { type: LOGIN, username: username, password: password }
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

