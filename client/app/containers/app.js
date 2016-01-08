import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MessageList from '../components/message_list'

class App extends Component {
  render() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <div>
          <input />
        </div>
      </div>
    )
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//   return {
//     visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     visibilityFilter: state.visibilityFilter
//   }
// }



// Wrap the component to inject dispatch and state into it
export default connect((state) => state)(App)
