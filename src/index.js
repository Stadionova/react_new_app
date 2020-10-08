import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './StoreContext';
import { BrowserRouter } from 'react-router-dom';

let renderFunc = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root'));
}

renderFunc(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderFunc(state);
});

serviceWorker.unregister(); 