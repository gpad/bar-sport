import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from './containers/dev_tools';
import createLogger from 'redux-logger';

import barSportApp from './reducers';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, logger),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(barSportApp, {});

export default store;
