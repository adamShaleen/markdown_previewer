import React from 'react';

function Header(props) {
    return (
      <header className="Header">
        <span>{props.title}</span>
      </header>
    )
}

export default Header;
