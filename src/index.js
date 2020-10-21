import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let renderFunc = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

renderFunc();

serviceWorker.unregister(); 