import React from 'react'
import styled from 'react-emotion'

export default class Navigation extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <NavigationUL>
          <NavigationLI>
            <NavigationLink>NEU</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink>Premium</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink>Blazer</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink>Zweiteiler</NavigationLink>
          </NavigationLI>
          <NavigationLI>
            <NavigationLink>Kleider</NavigationLink>
          </NavigationLI>
        </NavigationUL>
      </NavigationContainer>
    )
  }
}

const NavigationContainer = styled('div')`
  margin-left: 50px;
  margin-top: 100px;
  color: black;
  font-size: 2.5rem;
  width: 250px;
  font-weight: bold;
`
const NavigationUL = styled('div')`
  list-style: none;
`

const NavigationLI = styled('li')`
  text-decoration: none;
`

const NavigationLink = styled('a')`
  color: black;
  text-decoration: none;
  :hover {
    color: white;
    text-decoration: underline;
  }
`