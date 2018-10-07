import * as React from 'react'
import styled from 'react-emotion'

export default class FooterSlogan extends React.Component {
  render() {
    return(
      <FooterSloganContainer>
        <FooterSloganH1>Selvii</FooterSloganH1>
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

const FooterSloganH1 = styled('h1')`
`