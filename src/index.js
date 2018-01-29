import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router';
import reducers from './reducers';
import promise from 'redux-promise';

import App from './components/app';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

// http://www.blog.com/posts/5 -- browserHistory
// http://www.blog.com/posts/5# -- hashHistory
// memoryHistory - 잘 사용하지 않음

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const createStoreWithMiddleware = applyMiddleware(routerMiddleware(history))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.querySelector('.container'));
