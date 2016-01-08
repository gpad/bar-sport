import { combineReducers } from 'redux'
// import { ADD_MESSAGE, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
import { ADD_MESSAGE } from './actions'
// const { SHOW_ALL } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign([], state, [
        ...state,
        {
          text: action.text
        }
      ])
    // case COMPLETE_TODO:
    //   return [
    //     ...state.slice(0, action.index),
    //     Object.assign({}, state[action.index], {
    //       completed: true
    //     }),
    //     ...state.slice(action.index + 1)
    //   ]
    default:
      return state
  }
}

const barSportApp = combineReducers({
  // visibilityFilter,
  messages
})

export default barSportApp
