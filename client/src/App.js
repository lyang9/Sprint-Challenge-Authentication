import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to='/'>Home</NavLink>
          </nav>
          <main>
            <Route exact path='/' component={Home} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
