import * as React from 'react'
import styled from '@emotion/styled'
import instagram from '../../img/socialmedia/instagram_black.svg'
import pinterest from '../../img/socialmedia/pinterest_black.svg'

export default class FooterSocialMedia extends React.Component {
  render() {
    return(
      <FooterSocialMediaContainer>
        <FooterSocialMediaH3>Folge uns:</FooterSocialMediaH3>
        <BreakSmall />
        <a target="_blank" rel="noopener noreferrer" title="Link zu dem Selvii Instagram Profil" href="https://www.instagram.com/selviiofficial/"><FooterSocialMediaImg title="instagram logo" alt="instagram logo" src={instagram}/></a>
        <a target="_blank" rel="noopener noreferrer" title="Link zu dem Selvii Pinterest Profil" href="https://www.pinterest.de/cd815bc591e728ea8ef3d6be17ae77/?eq=selvii%20women%20fa&etslf=4826"><FooterSocialMediaImg title="pinterest logo" alt="pinterest logo" src={pinterest}/></a>
      </FooterSocialMediaContainer>
    )
  }
}


const BreakSmall = styled('br')`
  display: block;
  margin-top: 5px;
`

const FooterSocialMediaContainer = styled('div')`
  grid-area: right;
  text-align: center;
  color: black;
  font-size: 0.8rem;
  padding-top: 10px;
`

const FooterSocialMediaH3 = styled('h3')`
`

const FooterSocialMediaImg = styled('img')`
  width: 30px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`