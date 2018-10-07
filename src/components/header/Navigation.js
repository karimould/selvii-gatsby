import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'


export default class Navigation extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <NavigationUL>
        <NavigationLI>
            <NavigationLink to="/pullover">Pullover</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/blazer">Blazer</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/zweiteiler">Zweiteiler</NavigationLink>
          </NavigationLI>
          <NavigationLI>
          <NavigationLI>
            <NavigationLink to="/kleider">Kleider</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/hosen">Hosen</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/jacken">Mäntel</NavigationLink>
          </NavigationLI>
          <Break />
            <NavigationLink to="/premium">Premium</NavigationLink>
          </NavigationLI>
          <Break />
          <Break />
          <NavigationLI>
            <NavigationLink className="small" to="/rechtliches/kontakt">Kontakt</NavigationLink>
            <BreakSmall />
            <NavigationLink className="small" to="/rechtliches/unternehmen">Unternehmen</NavigationLink>
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
   margin: -8px 0;
`

const NavigationContainer = styled('div')`
  margin-left: 50px;
  margin-top: 70px;
  color: black;
  font-size: 1.6rem;
  width: 250px;
  font-weight: bold;
  text-transform: uppercase;
`
const NavigationUL = styled('div')`
  list-style: none;
`

const NavigationLI = styled('li')`
  text-decoration: none;
  .small {
    text-transform: none;
    font-size: 1.0rem;
    font-weight: lighter;
  }
`

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
`