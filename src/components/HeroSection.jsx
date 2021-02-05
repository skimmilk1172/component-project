import React from 'react';
import Header from './Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BodyText from './BodyText';
import Images from './Images';

const photos = [
  {
    name: 'Photo 1',
    // url: 'https://media.vanityfair.com/photos/597663e8fe060e64db80eb57/master/pass/Justin-Bieber-Tour.jpg'
    url: './Justin.png'
  },
  {
    name: 'Photo 2',
    // url: 'https://static01.nyt.com/images/2019/12/12/arts/12ROCKY-1/merlin_165838272_2a037f9f-f1bf-4274-b5f6-0097bf644d92-mobileMasterAt3x.jpg'
    url: './asap.png'
  },
  {
    name: 'Photo 3',
    // url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/10/How-to-organise-music-concert.jpg'
    url: './concert.png'
  }
];

function HeroSection () {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    arrows: false,
    // slidesToSroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    autoplayHoverPause: false,
    className: 'pics'
  };

  return (
    <section className='hero'>
      <Header />
      {/* HELLO THIS IS HERO SECTION */}
      <Slider className='pic' {...settings}>
        {photos.map((photo) => 
          <Images url={photo.url} key={photo.name}/>
        )}
       </Slider>
      <BodyText />
    </section>
  )
}

export default HeroSection;