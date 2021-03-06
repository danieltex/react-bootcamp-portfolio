import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };
    controller = new AbortController();

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke', {
            signal: this.controller.signal
        })
            .then(res => res.json())
            .then(json => this.setState({ joke: json }))
            .catch(err => {
                if (err.name !== 'AbortError') {
                 alert(err.message)
                }
            });
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten', {
            signal: this.controller.signal
        })
            .then(res => res.json())
            .then(json => this.setState({ jokes: json }))
            .catch(err => {
                if (err.name !== 'AbortError') {
                 alert(err.message)
                }
            });
    }

    componentWillUnmount() {
        this.controller.abort();
    }

    render() {        
        return (
            <div>
                <h2>Highlighted joke</h2>
                <Joke joke={this.state.joke}></Joke>
                <hr />
                <h3>Want more ten jokes?</h3>
                <button onClick={ this.fetchJokes }>Click me!</button> 
                {
                    this.state.jokes.map(
                        joke => <Joke key={ joke.id } joke={joke}></Joke>
                    )
                }               
            </div>
        );
    }
}

export default Jokes;