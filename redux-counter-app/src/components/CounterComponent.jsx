import React from 'react';
import '../App.css';

class Counter extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h2>Counter</h2>
                    <div>
                        <button onClick={ this.decrement }>-</button>
                        <span>{ this.state.count }</span>
                        <button onClick={ this.increment }>+</button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Counter;