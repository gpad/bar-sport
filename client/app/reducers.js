import { combineReducers, createStore } from 'redux';
import { ADD_MESSAGE, LOGIN, LOGOUT } from './actions'

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign([], state, [
        ...state,
        {
          text: action.text,
          username: action.username
        }
      ])
    default:
      return state
  }
}

function user(state= {}, action ){
  switch (action.type){
    case LOGIN:
      return Object.assign({}, state, {isLogged: true, username: action.username})
      break;
    case LOGOUT:
      return Object.assign({}, state, {isLogged: false, username: null})
      break;
    default:
      return state
  }
}

const barSportApp = combineReducers({
  user,
  messages
});

const store = createStore(barSportApp);

export default store;



