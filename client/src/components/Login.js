import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  state = {
    username: 'json',
    password: 'webtoken',
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>Login</h3>
          <input 
            type='text'
            name='username' 
            placeholder='username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input 
            type='password'
            name='password' 
            placeholder='password'
            value={this.state.password} 
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    );
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/login';
    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
      })
      .catch(err => {
        console.error('ERROR', err);
      })
  }
}

export default Login;