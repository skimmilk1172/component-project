import React from 'react';
import './Header.scss';
import { slide as Menu } from 'react-burger-menu';

function Header () {
  return (
    <section className='menu'>
      <div className='title'>
        <h1>EXP|CON</h1>
      </div>
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
    </section>
  )
}

export default Header;