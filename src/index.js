import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import renderFunc from './render';

renderFunc(state);

serviceWorker.unregister();