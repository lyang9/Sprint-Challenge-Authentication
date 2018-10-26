import React, { Component } from 'react';

class Logout extends Component {
  componentDidMount() {
    this.handleLogout();
  }
  
  render() {
    return (
      <div>
        <h3>You have logged out!</h3>
      </div>
    );
  }

  handleLogout = () => {
    localStorage.removeItem('jwt');
  };
}

export default Logout;