import * as React from 'react'
import styled from 'react-emotion'
import FooterNav from './FooterNav'
import FooterSlogan from './FooterSlogan'
import FooterSocialMedia from './FooterSocialMedia'


export default class Footer extends React.Component {
  render() {
    return(
      <div>
      <FooterContainer>
        <FooterNav />
        <FooterSlogan />
        <FooterSocialMedia />
      </FooterContainer>
      <CopyRightCon>
        <p>© All rights reserved</p>
      </CopyRightCon>
      </div>
    )
  }
}

const FooterContainer = styled('div')`
  margin-top: 100px;
  border-top: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  bottom: 0;
  height: auto;
  color: white;
  width: 100%;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }

`

const CopyRightCon = styled('div')`
  text-align: right;
  color: black;
  margin-top: 30px;
`