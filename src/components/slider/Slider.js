import React from 'react'
import styled from 'react-emotion'
import bg_0 from '../../img/startseite/slider_0.jpg'
import bg_1 from '../../img/startseite/slider_1.jpg'
import bg_2 from '../../img/startseite/slider_2.jpg'
import bg_3 from '../../img/startseite/slider_3.jpg'
import Link from 'gatsby-link'
import Slider from "react-slick";
import '../../styles/normalize.css'
export default class SliderCon extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <SliderContainer>
        <Slider {...settings}>
        <SliderIMGContainer>
              <img src={bg_0} alt="slider img" />
          </SliderIMGContainer>
          <SliderIMGContainer>
            <Link to="/pullover">
              <img src={bg_1} alt="slider img" />
            </Link>
          </SliderIMGContainer>
          <SliderIMGContainer>
            <Link to="/jacken">
              <img src={bg_2} alt="slider img" />
            </Link>
          </SliderIMGContainer>
          <SliderIMGContainer>
            <Link to="/taschen">
              <img src={bg_3} alt="slider img" />
            </Link>
          </SliderIMGContainer>
        </Slider>
      </SliderContainer>
    )
  }
}

const SliderContainer = styled('div')`
  width: 100%;
`
const SliderIMGContainer = styled('div')`
  width: 100%;
  height: 100vh;
  img {
    height: 95vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% -1%;
  }

  @media (max-width: 1400px) {
    img {
      object-fit: cover;
    }
  }
`
