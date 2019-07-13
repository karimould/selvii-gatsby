import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'
import instagram from '../../../img/socialmedia/instagram_black.svg'
import pinterest from '../../../img/socialmedia/pinterest_black.svg'




export default class SocialmediaIndex extends React.Component {

  render() {
    return (
      <SocialmediaContainer>
        <FollowusH1>Abonniere uns in den sozialen Netzwerken</FollowusH1>
        <br />
        <a target="_blank" rel="noopener noreferrer" title="Link zu dem Selvii Instagram Profil" href="https://www.instagram.com/selviiofficial/">Instagram </a>
        <a target="_blank" rel="noopener noreferrer" title="Link zu dem Selvii Pinterest Profil" href="https://www.pinterest.de/cd815bc591e728ea8ef3d6be17ae77/?eq=selvii%20women%20fa&etslf=4826">Pinterest</a>
      </SocialmediaContainer>
    )
  }
}

const SocialmediaContainer = styled('div')`
  text-align: center;
  margin-top: 100px;

  a {
    text-decoration: none;
    color: black;
  }
`

const FollowusH1 = styled('h1')`
  font-weight: bold;
  color: black;
  font-size: 1.5rem
`
const FooterSocialMediaImg = styled('img')`
  width: 40px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
`