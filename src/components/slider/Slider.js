import React from 'react'
import styled from 'react-emotion'
import bg_1 from '../../img/bg_1.jpg'


export default class Slider extends React.Component {
  render() {
    return(
      <SliderContainer>

      </SliderContainer>
    )
  }
}

const SliderContainer = styled('div')`
  width: 100%;
  height: 100vh;
  background-image: url(${bg_1});
  background-size: cover;  
`