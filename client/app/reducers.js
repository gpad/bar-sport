import { combineReducers } from 'redux';
import { ADD_MESSAGE, LOGGING_IN, LOGGED, LOGOUT, WS_CONNECTED, WS_DISCONNECTED, WS_ERROR, TOGGLE_TOOLBAR } from './actions';

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign([], state, [
        ...state, JSON.parse(action.message)
      ])
    default:
      return state
  }
}

function user(state = {}, action){
  switch (action.type){
    case LOGGING_IN:
      return Object.assign({}, state, {isLogged: false, username: action.username, password: action.password, token: null});
      break;
    case LOGGED:
      return Object.assign({}, state, {isLogged: true, username: state.username, password: state.password, token: action.token});
      break;
    case LOGOUT:
      return Object.assign({}, state, {isLogged: false, username: null, password: null, token: null});
      break;
    default:
      return state
  }
}

function websocket(state = {}, action){
  switch (action.type){
    case WS_CONNECTED:
      return Object.assign({}, state, {status: 'connected', websocket: action.websocket})
      break;
    case WS_DISCONNECTED:
      return Object.assign({}, state, {status: 'disconnected', websocket: null})
      break;
    case WS_ERROR:
      break;
    default:
      return state
  }
}

function toolbar(state = {}, action){
  switch (action.type){
    case TOGGLE_TOOLBAR:
      return Object.assign({}, state, {opened: !state.opened})
      break;
    default:
      return {opened: false}
  }
}

const barSportApp = combineReducers({
  user,
  messages,
  websocket,
  toolbar
});

export default barSportApp;
