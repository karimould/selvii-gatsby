import * as React from 'react'
import styled from 'react-emotion'
import FooterNav from './FooterNav'
import FooterSlogan from './FooterSlogan'
import FooterSocialMedia from './FooterSocialMedia'


export default class Footer extends React.Component {
  render() {
    return(
      <FooterContainer>
        <FooterNav />
        <FooterSlogan />
        <FooterSocialMedia />
      </FooterContainer>
    )
  }
}

const FooterContainer = styled('div')`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  bottom: 0;
  height: 100px;
  color: white;
  width: 100%;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`