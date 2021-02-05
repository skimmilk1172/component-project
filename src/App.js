import React, {Component} from 'react'
import './App.scss';
import HeroSection from './components/HeroSection';
import RedSection from './components/RedSection';

// import Header from './components/Header';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import BodyText from './components/BodyText';
// import Button from './components/Button';


function App () {

  return (
    <div className="App">

      <HeroSection />
      <RedSection button/>
    </div>
  );

}

export default App;
