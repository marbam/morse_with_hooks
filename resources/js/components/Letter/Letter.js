import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Letter.css';

function Letter (props) {
    const [guess, setGuess] = useState('');
    const [correct, setCorrect] = useState('');
    const [background, setBackground] = useState('unanswered');

    let answer = Object.keys(props.answer);
    let morse = props.answer[answer[0]];

    function guessHandler(event) {
        let value = event.target.value.toUpperCase();
        let isCorrect = false;
        if (value == answer) {
            isCorrect = true;
        }

        let newBackground = null;
        if (value === '') {
            newBackground = "unanswered";
        } else if (isCorrect) {
            newBackground = "correct";
        } else {
            newBackground = "incorrect";
        }

        setGuess(value);
        setCorrect(isCorrect);
        setBackground(newBackground);
    }

    function reveal () {
        setGuess(answer);
        setCorrect(true);
        setBackground('correct');
    }

    let buttonDiv = null;
    if (!correct) {
        buttonDiv = <div>
            <button
                className="btn btn-light"
                onClick={reveal}
            >Show</button>
        </div>
    }

    return (
        <div className={`letter-cell ${background}`}>
            <div> {morse} </div>
            <div>
                <input
                    className="letter-input form-control"
                    type="text"
                    maxLength="1"
                    value={guess}
                    onChange={guessHandler}
                    disabled={correct}
                />
            </div>
            {buttonDiv}
        </div>
    );
}

export default Letter;