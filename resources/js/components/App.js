import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question/Question';

class App extends Component {

    constructor () {
        super();
        this.state = {
            sentences: [],
            count: 1
        }
        this.updateCount = this.updateCount.bind(this);
        this.getSentences = this.getSentences.bind(this);

    }

    updateCount(event) {
        this.setState({
            count: event.target.value
        });
    }

    getSentences() {

        this.setState({
            sentences: []
        });

        let localThis = this;
        axios.post('/api/get_sentence', [
            this.state.count,
        ])
        .then(function(response){
            if (response['status'] == 200) {
                localThis.setState({
                    sentences: response.data
                })
            }
        });
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.count} onChange={this.updateCount}></input>
                <button type="button" onClick={this.getSentences}>Click for Questions!</button>
                {this.state.sentences.map((sentence, index) =>
                        <Question sentence={sentence} key={index}></Question>
                    )}
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
