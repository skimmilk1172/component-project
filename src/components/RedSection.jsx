import React from 'react';
import './RedSection.scss';
import Header from './Header';
import './Header.scss';

function RedSection (props) {

  const { button } = props;

  return (
    <section className='red'>
      <Header button/>
      <div>
        hello
      </div>
    </section>
  )
}

export default RedSection;