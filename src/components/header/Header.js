import React from 'react'
import styled from 'react-emotion'
import Navigation from './Navigation'
import AddToCart from '../../img/addToCart.svg'
import MobileHeader from './MobileHeader'
import ProductPageHeader from './ProductPageHeader'
import Link from 'gatsby-link'
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartCount: 0,
      getCartCount: () => {
        this.setState({cartCount: window.Snipcart.api.items.count()})
      }
    }
  }

  componentDidMount() {
    this.setState({
      cartCount: window.Snipcart.api.items.count()
    }) 
  }

  renderDesktopHeader() {
    return(
        <HeaderContainer>
          <HeaderContainerFlex>
            <LogoContainer>
              <Link to="/"><LogoH1>Selvii</LogoH1></Link>
            </LogoContainer>
            <CartContainer>
              <div class="snipcart-summary">
                <Cart href="#" className="snipcart-checkout">
                  <img src={AddToCart} />
                  <span className="snipcart-total-items">{this.state.cartCount}</span>
                </Cart>
              </div>
            </CartContainer>
            </HeaderContainerFlex>
            <Navigation />
        </HeaderContainer>
    )
  }


  renderMobileHeader() {
    return(
      <MobileHeader cartCount={this.state.cartCount}/>
    )
  }

  renderProductPageHeader() {
    return(
      <ProductPageHeader backLink={this.props.backLink} cartCount={this.state.cartCount}/>
    )
  }


  render() {
    return(
      <div>
        {this.renderDesktopHeader()}
        {this.props.productPage ? (this.renderProductPageHeader()) : (this.renderMobileHeader())}
      </div>
    )
  }
}

const HeaderContainer = styled('div')`
  position: fixed;
  width: 100%;
  height: 100px;
  @media (max-width: 850px) {
    display: none;
  }
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
