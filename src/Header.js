import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <span>{this.props.title}</span>
      </header>
    )
  }
}

export default Header;
