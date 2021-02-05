import React from 'react';
import './Button.scss';


function Button (props) {
  function clickMe() {
    alert('Your button is working!')
  };

  return (
    <button className='gradient' onClick={() => clickMe()}>
      TRY IT NOW
    </button>
  )
}

export default Button;