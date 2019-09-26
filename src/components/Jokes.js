import React, { Component} from 'react';

class Jokes extends Component {
    state = { joke: {} };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(json => this.setState({ joke: json }))
        .catch(err => console.log(err.message));
    }

    render() {
        const { setup, punchline} = this.state.joke;
        return (
            <div>
                <h2>Highlighted joke</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        );
    }
}

export default Jokes;