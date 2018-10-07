import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'


export default class Navigation extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <NavigationUL>
          <NavigationLI>
            <NavigationLink to="/premium">Premium</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/jacken">Jacken/Mäntel</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/blazer">Blazer</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/zweiteiler">Zweiteiler</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/pullover">Pullover</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/hosen">Hosen</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink to="/kleider">Kleider</NavigationLink>
          </NavigationLI>
        </NavigationUL>
      </NavigationContainer>
    )
  }
}

const NavigationContainer = styled('div')`
  margin-left: 50px;
  margin-top: 70px;
  color: black;
  font-size: 1.8rem;
  width: 250px;
  font-weight: bold;
`
const NavigationUL = styled('div')`
  list-style: none;
`

const NavigationLI = styled('li')`
  text-decoration: none;
`

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
`