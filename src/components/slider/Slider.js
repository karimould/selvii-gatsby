import React from 'react'
import styled from 'react-emotion'
import bg_1 from '../../img/startseite/selvii-1-4-min.jpg'


export default class Slider extends React.Component {
  render() {
    return(
      <SliderContainer>
        <SliderIMGContainer>
            <img src={bg_1} alt="slider img" />
            <h1>ORANGES KLEID</h1>
            <p>40 €</p>
        </SliderIMGContainer>
      </SliderContainer>
    )
  }
}

const SliderContainer = styled('div')`
  padding-top: 80px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;

`
const SliderIMGContainer = styled('div')`
  width: 90%;
  height: auto;
  @media (max-width: 850px) {
    width: 80%;
  }
`
