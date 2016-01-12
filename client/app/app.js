import React from "react"
import ReactDom from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { addMessage } from './actions'

import App from "./containers/app"
import store from './reducers'

let rootElement = document.getElementById('main_container')

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
