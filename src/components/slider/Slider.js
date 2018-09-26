import React from 'react'
import styled from 'react-emotion'
import bg_1 from '../../img/startseite/startseite_1.jpg'


export default class Slider extends React.Component {
  render() {
    return(
      <SliderContainer>
        <SliderIMGContainer>
            <img src={bg_1} alt="slider img" />
        </SliderIMGContainer>
      </SliderContainer>
    )
  }
}

const SliderContainer = styled('div')`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  display: flex; 
  align-items: center;
  justify-content: center;
`
const SliderIMGContainer = styled('div')`
  width: 80%;
`
