import './index.css';
import * as serviceWorker from './serviceWorker';
import { passState } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './redux/state';
import { updateInputValue } from './redux/state';
import state from './redux/state';

let renderFunc = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        stateData={state}
        addPost={addPost}
        updateInputValue={updateInputValue} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderFunc(state);

passState(renderFunc);

serviceWorker.unregister();