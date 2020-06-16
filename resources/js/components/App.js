import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question/Question';

function App() {

    const [sentences, setSentences] = useState([]);
    const [count, setCount] = useState(1);

    function getSentences() {
        setSentences([]);
        axios.post('/api/get_sentence', [
            count,
        ])
        .then(function(response){
            if (response['status'] == 200) {
                setSentences(response.data);
            }
        });
    }

    return (
        <div>
            <input type="number" className="form-input" value={count} onChange={(e) => {setCount(e.target.value)}}></input>
            <button type="button" className="btn btn-primary" onClick={getSentences}>Click for Questions!</button>
            {sentences.map((sentence, index) =>
                <Question sentence={sentence} key={index}></Question>
            )}
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
