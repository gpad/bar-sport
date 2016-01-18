import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ADD_MESSAGE, LOGGING_IN, LOGGED, LOGOUT, WS_CONNECTED, WS_DISCONNECTED, WS_ERROR } from './actions';
import DevTools from './containers/dev_tools';
import createLogger from 'redux-logger';

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

const logger = createLogger();

const barSportApp = combineReducers({
  user,
  messages,
  websocket
});

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, logger),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(barSportApp, {});

export default store;
