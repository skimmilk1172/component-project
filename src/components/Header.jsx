import React from 'react';
import './Header.scss';
import { slide as Menu } from 'react-burger-menu';

function Header () {
  return (
    <div className='menu'>
      <header className='title'>
        <h1 className>EXP|CON</h1>
      </header>
      <Menu>
      <a className="menu-item" href="/">
        WHAT IS IT
      </a>
      <a className="menu-item" href="/perks">
        PERKS
      </a>
      <a className="menu-item" href="/pricing">
        PRICING
      </a>
      </Menu>
    </div>
  )
}

export default Header;