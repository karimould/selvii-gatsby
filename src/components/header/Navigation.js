import React from 'react'
import styled from '@emotion/styled'
import Link from 'gatsby-link'
import LinkSmall from 'gatsby-link'

export default class Navigation extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <NavigationUL>
          <NavigationLI>
            <NavigationLink to="/sale">Sale</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/new">Neu</NavigationLink>
          </NavigationLI>
          <Break />
          <NavigationLI>
            <NavigationLink to="/pullover">Oberteile</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/blazer">Blazer</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/zweiteiler">Zweiteiler</NavigationLink>
          </NavigationLI>
          {/* <NavigationLI>
            <NavigationLink to="/kleider">Kleider</NavigationLink>
          </NavigationLI> */}
          <NavigationLI>
            <NavigationLink to="/hosen">Hosen</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/jacken">Mäntel</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/taschen">Taschen</NavigationLink>
          </NavigationLI>
          <Break />
          <Break />
          <Break />
          <NavigationLI>
            <NavigationLinkSmall to="/rechtliches/kontakt">Kontakt</NavigationLinkSmall>
          </NavigationLI>
            <BreakSmall />
          <NavigationLI>
            <NavigationLinkSmall to="/rechtliches/unternehmen">Unternehmen</NavigationLinkSmall>
          </NavigationLI>
        </NavigationUL>
      </NavigationContainer>
    )
  }
}


const Break = styled('br')`
  display: block;
  margin: 10px 0;
`

const BreakSmall = styled('br')`
  display: block;
  margin: -2px 0;
`

const NavigationContainer = styled('div')`
  margin-left: 50px;
  margin-top: 70px;
  color: black;
  width: 250px;
`
const NavigationUL = styled('div')`
  list-style: none;
`

const NavigationLI = styled('li')`
  text-decoration: none;
`

const NavigationLinkSmall = styled(LinkSmall)`
  color: black !important;
  text-decoration: none !important;
  text-transform: none !important;
  font-size: 0.9rem !important;
  font-weight: medium !important;
`

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.2rem;
`