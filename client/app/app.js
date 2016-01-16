import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './containers/dev_tools';

import App from './containers/app';
import store from './reducers';

let rootElement = document.getElementById('main_container');

ReactDom.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  rootElement
);
