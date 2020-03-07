import React from 'react';
import ReactDOM from 'react-dom';
import StoreContext from 'storeon/react/context';
import App from './containers/App';
import store from './store';
import './index.scss';
import 'font-proxima-nova/style.css';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);
