import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Form.css';

class Register extends Component {
  state = {
    username: '',
    password: '',
    redirect: false
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>Sign Up</h3>
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
          {this.renderRedirect()}
          <button onClick={this.setRedirect}>Signup</button>
        </div>
      </form>
    );
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/register';
    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
      })
      .catch(err => {
        console.error('ERROR', err);
      })
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  };
}

export default Register;