import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'mobx-react-lite/batchingForReactDom';
import {Provider} from 'mobx-react';
import TodoStore from './stores/TodoStore';
const Root = (
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
