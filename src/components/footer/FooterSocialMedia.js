import * as React from 'react'
import styled from 'react-emotion'
import instagram from '../../img/socialmedia/instagram_black.svg'
import pinterest from '../../img/socialmedia/pinterest_black.svg'

export default class FooterSocialMedia extends React.Component {
  render() {
    return(
      <FooterSocialMediaContainer>
        <FooterSocialMediaH3>Follow us on:</FooterSocialMediaH3>
        <br/>
        <a target="_blank" rel="noopener noreferrer" title="Link zu dem Selvii Instagram Profil" href="https://www.instagram.com/selviiofficial/"><FooterSocialMediaImg title="instagram logo" alt="instagram logo" src={instagram}/></a>
        <a target="_blank" rel="noopener noreferrer" title="Link zu dem Selvii Pinterest Profil" href="https://www.pinterest.de/cd815bc591e728ea8ef3d6be17ae77/?eq=selvii%20women%20fa&etslf=4826"><FooterSocialMediaImg title="pinterest logo" alt="pinterest logo" src={pinterest}/></a>
      </FooterSocialMediaContainer>
    )
  }
}

const FooterSocialMediaContainer = styled('div')`
  grid-area: right;
  text-align: center;
  color: black;
`

const FooterSocialMediaH3 = styled('h3')`
`

const FooterSocialMediaImg = styled('img')`
  width: 30px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`