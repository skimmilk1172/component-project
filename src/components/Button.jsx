import React from 'react';
import './Button.scss';


function Button () {
  function clickMe() {
    alert('Your button is working!')
  };
  return (
    <button className='gradient' onCLick={clickMe}>
      TRY IT NOW
    </button>
  )
}

export default Button;