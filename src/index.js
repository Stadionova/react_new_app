import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
// Route компонента в App.js подставляет нужную компоненту (в зависимости от урла)
// но она не анализирует этот урл, она за ним не следит
// за это отвечает BrowserRouter компонента
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