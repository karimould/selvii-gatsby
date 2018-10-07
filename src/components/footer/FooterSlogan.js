import * as React from 'react'
import styled from 'react-emotion'
import Logo from '../../img/svgs/selviilogo_3.svg'
import Link from 'gatsby-link'



export default class FooterSlogan extends React.Component {
  render() {
    return(
      <FooterSloganContainer>
        <LogoLink to="/"> 
          <img src={Logo} alt="Selvii logo"/>
        </LogoLink>
      </FooterSloganContainer>
    )
  }
}

const FooterSloganContainer = styled('div')`
  grid-area: center;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  color: black;
`
const LogoLink = styled(Link)`
  img {
    margin-top: 50px;
    width: 150px;
    height: auto;
  }
` 

const FooterSloganH1 = styled('h1')`
`