import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
<Provider store={ createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
</Provider>, document.getElementById('root'))
