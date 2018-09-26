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
            <FoterNavLink title="link zum impressum" to="/impressum">- Impressum</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink title="link zum datenschutz" to="/datenschutz">- Datenschutz</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink title="link zu den AGBs" to="/agbs">- AGBs</FoterNavLink>
          </FoterNavLI>
        </FooterNavUL>
      </FooterNavLeft>
      <FooterNavRight>
        <FooterNavUL>
          <FoterNavLI>
            <FoterNavLink title="link zu der Widerrufsbelehrung" to="/wiederrufsbelehrung">- Widerrufsbelehrung</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink title="link zu der Kontaktseite" to="/kontakt">- Kontakt</FoterNavLink>
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
`

const FooterNavLeft = styled('div')`
`

const FooterNavRight = styled('div')`
  margin-left: 50px;
`

const FooterNavUL = styled('ul')`
  list-style: none;
`

const FoterNavLI = styled('li')`
  text-decoration: none;
  margin-top: 10px;
  color: white;
`

const FoterNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: lightcyan;
    text-decoration: underline;
  }
`