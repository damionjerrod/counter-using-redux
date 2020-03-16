// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Counter from './components/CounterComponent';
// import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';

// //STORE -> GLOBALIZED STATE

// //ACTION -> DEFINES WHAT SHOULD HAPPEN (I.E. "INCREMENT")
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };

// //REDUCER -> DESCRIBES HOW ACTIONS TRANSFORMS STATE AND DOES THEM
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// };

// let store = createStore(counter);

// //Display it in the console
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -> EXECUTES ACTIONS, SENDING THEM TO THE REDUCER
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// ReactDOM.render(<Counter />, document.getElementById('root'));
// serviceWorker.unregister();