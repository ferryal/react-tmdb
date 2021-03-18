import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Routes } from './routes';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

serviceWorker.unregister();
