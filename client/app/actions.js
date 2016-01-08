export const ADD_MESSAGE = 'ADD_MESSAGE'
// export const COMPLETE_TODO = 'COMPLETE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export function addMessage(text) {
  return { type: ADD_MESSAGE, text }
}

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index }
// }
//
// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }
