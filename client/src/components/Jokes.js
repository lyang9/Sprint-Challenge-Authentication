import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: [],
  }

  render() {
    return (
      <div className="Home">
        <h2>Dad jokes</h2>
        {this.state.jokes.map(joke => (
          <div 
            key={joke.id}
          >
          <p>{joke.type}</p>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const endpoint = 'http://localhost:3300/api/jokes';
    const options = {
      headers: {
        Authorization: token
      },
    };
    axios
      .get(endpoint, options)
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.error('error', err);
      })
  }
}

export default Jokes;