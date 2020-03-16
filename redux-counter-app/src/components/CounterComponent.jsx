import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return(
        <div className="App">
            <header className="App-header">
                <h2>Counter</h2>
                <div>
                    <h2>{ counter }</h2>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(increment())}>+</button>
                    {isLogged ? <h5>Valuable Information I Shouldn't See</h5> : ''}
                </div>
            </header>
        </div>
    )
}

export default Counter;