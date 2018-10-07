import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'react-emotion'

export default class FooterNav extends React.Component {
  render() {
    return(
      <FooterNavContainer>
      <FooterNavLeft>
        <FooterNavUL>
          <FoterNavLI>
            <FoterNavLink title="link zum impressum" to="/rechtliches/impressum">Impressum</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink title="link zum datenschutz" to="/rechtliches/datenschutz">Datenschutz</FoterNavLink>
          </FoterNavLI>
        </FooterNavUL>
      </FooterNavLeft>
      <FooterNavRight>
        <FooterNavUL>
          <FoterNavLI>
            <FoterNavLink title="link zu der Widerrufsbelehrung" to="/rechtliches/widerrufsbelehrung">Widerruf</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink title="link zu den AGBs" to="/rechtliches/agbs">AGB</FoterNavLink>
          </FoterNavLI>
        </FooterNavUL>
      </FooterNavRight>
      </FooterNavContainer>
    )
  }
}

const FooterNavContainer = styled('div')`
  grid-area: left;
  justify-self: start;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 0.8rem;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    text-align: center;
  }
`

const FooterNavLeft = styled('div')`
`

const FooterNavRight = styled('div')`
`

const FooterNavUL = styled('ul')`
  list-style: none;
`

const FoterNavLI = styled('li')`
  text-decoration: none;
  margin-top: 10px;
  color: black;
  margin-left: 5px;
  @media (max-width: 550px) {
    margin-left: 0px;
  }
`

const FoterNavLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`