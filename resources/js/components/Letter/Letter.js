import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Letter.css';

class Letter extends Component {
    constructor () {
        super();
        this.state = {
            guess: '',
            correct: ''
        }
        this.guessHandler = this.guessHandler.bind(this);
    }

    guessHandler(event) {
        let value = event.target.value.toUpperCase();
        this.setState({guess: value});
    }

    render () {
        let background = null;
        if (this.state.guess === '') {
            background = "unsanswered";
        } else if (this.state.guess === this.props.answer) {
            background = "correct";
        } else {
            background = "incorrect";
        }

        return (
            <div className={`letter-cell ${background}`}>
                <div> - - </div>
                <div>
                    <input
                        className="letter-input form-control"
                        type="text"
                        maxLength="1"
                        value={this.state.guess}
                        onChange={this.guessHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Letter;