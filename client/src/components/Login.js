import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: 'json',
    password: 'webtoken',
  }

  render() {
    return (
      <form>
        <div>
          <input 
            type='text'
            name='username' 
            placeholder='username'
            value={this.state.username}
          />
        </div>
        <div>
          <input 
            type='password'
            name='password' 
            placeholder='password'
            value={this.state.password} 
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;