import React from 'react'
import styled from 'react-emotion'
import bg_1 from '../../img/startseite/selvii-1-4-min.jpg'
import Link from 'gatsby-link'


export default class Slider extends React.Component {
  render() {
    return(
      <SliderContainer>
        <SliderIMGContainer>
          <Link to="/kleider">
            <img src={bg_1} alt="slider img" />
          </Link>
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
