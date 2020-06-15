import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Letter.css';

class Letter extends Component {
    constructor () {
        super();
        this.state = {
            guess: '',
            correct: '',
            answer: '',
            background: 'unanswered'
        }
        this.guessHandler = this.guessHandler.bind(this);
        this.reveal = this.reveal.bind(this);
    }

    componentDidMount() {
        let english = Object.keys(this.props.answer);
        this.setState({
            answer: english
        });
    }

    guessHandler(event) {
        let value = event.target.value.toUpperCase();
        let correct = false;
        if (value == this.state.answer[0]) {
            correct = true;
        }

        let background = null;
        if (value === '') {
            background = "unanswered";
        } else if (correct) {
            background = "correct";
        } else {
            background = "incorrect";
        }

        this.setState({
            guess: value,
            correct: correct,
            background: background
        });
    }

    reveal () {
        this.setState({
            guess: this.state.answer[0],
            correct: true,
            background: 'correct'
        })
    }

    render () {
        let morse = this.props.answer[this.state.answer[0]];

        let buttonDiv = null;
        if (!this.state.correct) {
            buttonDiv = <div>
                <button
                    className="btn btn-light"
                    onClick={this.reveal}
                >Show</button>
            </div>
        }

        return (
            <div className={`letter-cell ${this.state.background}`}>
                <div> { morse } </div>
                <div>
                    <input
                        className="letter-input form-control"
                        type="text"
                        maxLength="1"
                        value={this.state.guess}
                        onChange={this.guessHandler}
                        disabled={this.state.correct}
                    />
                </div>
                {buttonDiv}
            </div>
        );
    }
}

export default Letter;