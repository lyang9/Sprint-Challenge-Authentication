import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <h1>Welcome to Dad jokes!</h1>
        <h3>Please register to login to view all Dad jokes</h3>
      </div>
    );
  }
}

export default Home;