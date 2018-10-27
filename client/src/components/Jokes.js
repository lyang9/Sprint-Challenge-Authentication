import React, { Component } from 'react';
import axios from 'axios';
import './Jokes.css';

class Jokes extends Component {
  state = {
    jokes: [],
  }

  render() {
    return (
      <div className="Home">
        <h2>Dad jokes</h2>
        <div className='joke-container'>
          {this.state.jokes.map(joke => (
            <div className='joke-card'
              key={joke.id}
            >
            <div>
              <p>{joke.type}</p>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          </div>
          ))}
        </div>
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