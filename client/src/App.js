import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Home from './components/Home';

import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            
            &nbsp;|&nbsp;
            <NavLink to='/login'>Login</NavLink>
          </nav>
          <main>
            <Route exact path='/' component={Home} />
            
            <Route path='/login' component={Login} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
