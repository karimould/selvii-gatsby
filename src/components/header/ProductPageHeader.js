import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'
import CartSVG from '../../img/addToCart.svg'
import BackArrow from '../../img/svgs/baseline-arrow_back-24px.svg'
import Link from 'gatsby-link'


export default class ProductPageHeader extends React.Component {
  constructor(props) {
    super(props)
    this.cartOpend = false
    this.state = {
      cartCount: this.props.cartCount,
      getCartCount: () => {
        this.setState({cartCount: window.Snipcart.api.items.count()})
      }
    }
  }
  showSettings (event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.setState({
      cartCount: window.Snipcart.api.items.count()
    }) 
  }

  //back for button on mobile
  goBack = () => {
    let currenthref = window.location.href
    //if the cart was opend before klicking back
    if(currenthref.includes("#!")) {
      window.history.go(-3)
    } else {
      window.history.back()
    }
  }

  render() {
    return(
      <MobileNavigationContainer>
        <FlexWrapper>
          <BackButtonContainer>
           {/*<a onClick={this.goBack} title="Link to go back"><img src={BackArrow} /></a>*/}
           <Link to={"/" + this.props.backLink} title="Link to go back"><img src={BackArrow} /></Link>
          </BackButtonContainer>
          <CartContainer>
            <div class="snipcart-summary">
              <Cart className="snipcart-checkout">
                <img src={CartSVG} />
                  <span className="snipcart-total-items">{this.state.cartCount}</span>
              </Cart>
            </div>
          </CartContainer>
        </FlexWrapper>
      </MobileNavigationContainer>
    )
  }
}

const MobileNavigationContainer = styled('div')`
  position: fixed;
  margin-top: 25px;
  width: 100%;
  z-index: 100;
  @media (min-width: 851px) {
    display: none;
  }
`

const FlexWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const BackButtonContainer = styled('div')`
  margin-left: 25px;
`

const LogoContainer = styled('div')`
`

const CartContainer = styled('div')`
  padding-right: 25px;
  img {
    width: 35px;
    height: 25px;
  }

`

const Cart = styled('a')`
`