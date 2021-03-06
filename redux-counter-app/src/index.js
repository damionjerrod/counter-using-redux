import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/CounterComponent';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
<Provider store={store}>
    <Counter />
</Provider>,
document.getElementById('root'));
serviceWorker.unregister();
