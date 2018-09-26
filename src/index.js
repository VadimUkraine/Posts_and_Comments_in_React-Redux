import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './App';
import getAllPosts from './store/reducers/getAllPosts';
import getAllUsers from './store/reducers/getAllUsers';
import getAllComments from './store/reducers/getAllComments';


const rootReducer = combineReducers({
	allPosts: getAllPosts,
	allUsers: getAllUsers,
	allComments: getAllComments
});

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);