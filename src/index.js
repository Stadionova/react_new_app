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
        addPost={store.addPost.bind(store)}
        updateInputValue={store.updateInputValue.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderFunc(store.state);
store.passState(renderFunc);
serviceWorker.unregister();