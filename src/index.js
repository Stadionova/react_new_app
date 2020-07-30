import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import { addPost } from './redux/state'

addPost('helllllo Julia');

ReactDOM.render(
  <React.StrictMode>
    <App stateData={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
