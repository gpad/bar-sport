export const ADD_MESSAGE = 'ADD_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

/*
 * action creators
 */

export function addMessage(text, username) {
  return { type: ADD_MESSAGE, text: text, username: username}
}

export function sendMessage(text, username) {
  return { type: SEND_MESSAGE, text: text, username: username}
}

export function login(username, password){
  return { type: LOGIN, username: username, password: password }
}

export function logout(){
  return { type: LOGOUT }
}
