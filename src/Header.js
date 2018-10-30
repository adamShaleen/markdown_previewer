import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="Header">
        <span>{this.props.title}</span>
      </header>
    )
  }
}

export default Header;
