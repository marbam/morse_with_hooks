import React from 'react';
import ReactDOM from 'react-dom';
import Letter from '../Letter/Letter';

function Question(props) {

    let letters = [];
    for (const c of props.sentence) {
        letters.push(c);
    }

    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">Question</div>
                <div className="card-body">
                    {letters.map((letter, index) =>
                        <Letter answer={letter} key={index}></Letter>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Question;