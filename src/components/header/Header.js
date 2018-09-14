import React from 'react'
import styled from 'react-emotion'
import Navigation from './Navigation';
import AddToCart from '../../img/addToCart.svg'



export default class Header extends React.Component {
  render() {
    return(
      <HeaderContainer>
      <HeaderContainerFlex>
        <LogoContainer>
          <LogoH1>Selvii</LogoH1>
        </LogoContainer>
        <CartContainer>
          <div class="snipcart-summary">
            <Cart href="#" className="snipcart-checkout">
              <img src={AddToCart} />
              <span class="snipcart-total-items"></span>
            </Cart>
          </div>
        </CartContainer>
        </HeaderContainerFlex>
        <Navigation />
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled('div')`
  position: fixed;
  width: 100%;
  height: auto;
`

const HeaderContainerFlex = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const LogoContainer = styled('div')`
`

const LogoH1 = styled('h1')`
  color: black;
  font-size: 3.5rem;
  padding-left: 50px;
`

const CartContainer = styled('div')`
    margin-top: 20px;
    margin-right: 50px;
    
    .snipcart-total-items {
    color: black;
  }
`

const Cart = styled('a')`
`
