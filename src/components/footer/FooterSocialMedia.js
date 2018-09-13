import * as React from 'react'
import styled from 'react-emotion'
import instagram from '../../img/socialmedia/instagram.svg'

export default class FooterSocialMedia extends React.Component {
  render() {
    return(
      <FooterSocialMediaContainer>
        <FooterSocialMediaH3>Follow us on:</FooterSocialMediaH3>
        <br/>
        <a target="_blank" title="link to immajung instagram page" href="#"><FooterSocialMediaImg title="instagram logo" alt="instagram logo" src={instagram}/></a>
      </FooterSocialMediaContainer>
    )
  }
}

const FooterSocialMediaContainer = styled('div')`
  grid-area: right;
  text-align: center;
`

const FooterSocialMediaH3 = styled('h3')`
`

const FooterSocialMediaImg = styled('img')`
  width: 30px;
  height: auto;
`