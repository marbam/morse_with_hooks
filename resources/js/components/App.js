import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question/Question';

function App() {
    return (
        <div>
            <Question sentence="THIS IS A TEST"></Question>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
