import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'react-emotion'

export default class FooterNav extends React.Component {
  render() {
    return(
      <FooterNavContainer>
        <FooterNavUL>
          <FoterNavLI>
            <FoterNavLink title="link to impressum" to="/impressum">Impressum</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink title="link to datenschutz" to="/datenschutz">Datenschutz</FoterNavLink>
          </FoterNavLI>
        </FooterNavUL>
      </FooterNavContainer>
    )
  }
}

const FooterNavContainer = styled('div')`
  grid-area: left;
  justify-self: start;
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