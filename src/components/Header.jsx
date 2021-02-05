import React, { useState } from 'react';
import './Header.scss';
import { bubble as Menu } from 'react-burger-menu';
import Button from './Button';

function Header (props) {

  const [open, setOpen] = useState(false)
  const { button } = props;

  const burgerBar = (event) => {
    // add class and add transition slide
    !open && event.currentTarget.classList.add('open');
    open && event.currentTarget.classList.remove('open');
    
    !open && setOpen(true);
    open && setOpen(false);
  }

  return (
    <section className='menu'>
      <div className='title' onClick={(event) => burgerBar(event)}>
        <h1>EXP|CON</h1>
        <p>ADD ICON HERE</p>
        {open && 
        <div className="menu_open">
        <a className="omenu;-item" href="/">
          WHAT IS IT
        </a>
        <a className="menu-item" href="/perks">
          PERKS
        </a>
        <a className="menu-item" href="/pricing">
          PRICING
        </a>
        </div>
        }
      </div>
      {/* { open &&
      <div className='menu_open' onClick={(event) => burgerBar(event)}>
        <a className="menu-item" href="/">
          WHAT IS IT
        </a>
        <a className="menu-item" href="/perks">
          PERKS
        </a>
        <a className="menu-item" href="/pricing">
          PRICING
        </a>
      </div>
      }*/}
      {/* <Menu>
        <a className="menu-item" href="/">
          WHAT IS IT
        </a>
        <a className="menu-item" href="/perks">
          PERKS
        </a>
        <a className="menu-item" href="/pricing">
          PRICING
        </a>
      </Menu> */}
      {button && <Button />}
    </section>
  )
}

export default Header;