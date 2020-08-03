import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateInputValue } from './redux/state';

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

export default renderFunc;