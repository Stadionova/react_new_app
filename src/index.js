import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';

let renderFunc = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        stateData={state}
        dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderFunc(store.state);
store.passState(renderFunc);
serviceWorker.unregister();