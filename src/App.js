import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const photos = [
  {
    name: 'Photo 1',
    url: 'https://i.guim.co.uk/img/media/fbb5cc6e7642788d1b1fd2b0baab1641c06fc844/0_0_5760_3840/master/5760.jpg?width=700&quality=85&auto=format&fit=max&s=4accb731006caccd64710e863df7f5ad'
  },
  {
    name: 'Photo 2',
    url: 'https://static01.nyt.com/images/2019/12/12/arts/12ROCKY-1/merlin_165838272_2a037f9f-f1bf-4274-b5f6-0097bf644d92-mobileMasterAt3x.jpg'
  },
  {
    name: 'Photo 3',
    url: 'https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2019/09/764/432/Getty_travisscott_111218_1542050256534_6390296_ver1.0_640_360.jpg?ve=1&tl=1'
  },
  {
    name: 'Photo 4',
    url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/10/How-to-organise-music-concert.jpg'
  }
]



class App extends Component {
  render() {
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
      className: 'slides'
    }
  return (
    <div className="App">
      <Header />
      <Slider {...settings}>
        {photos.map((photo) => {
          return(
            <div>
              <img width='100%' src={photo.url} />
            </div>
          )
        })}
      </Slider>
    </div>
  );
}
}

export default App;
