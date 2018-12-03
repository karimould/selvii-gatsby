import React from 'react'
import styled from 'react-emotion'
import CartSVG from '../../img/addToCart.svg'
import { slide as Menu } from 'react-burger-menu'
import Link from 'gatsby-link'
import Logo from '../../img/svgs/selviilogo_3.svg'


export default class MobileHeader extends React.Component {
  constructor(props) {
    super(props)
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
  
  render() {
    return(
      <MobileNavigationContainer>
        <FlexWrapper>
          <BurgerMenuContainer>
            <Menu>
            <LogoLink to="/"> 
                <img src={Logo} alt="Selvii logo"/>
              </LogoLink>
              <Break/>
              <NavigationLink className="menu-item" to="/sale">Sale</NavigationLink>
              <NavigationLink className="menu-item" to="/new">Neu</NavigationLink>
              <Break/>
              <NavigationLink className="menu-item" to="/pullover">Pullover</NavigationLink>
              <Break />
              <NavigationLink className="menu-item" to="/pullover">Oberteile</NavigationLink>
              <NavigationLink className="menu-item" to="/blazer">Blazer</NavigationLink>
              <NavigationLink className="menu-item" to="/zweiteiler">Zweiteiler</NavigationLink>
              <NavigationLink className="menu-item" to="/kleider">Kleider</NavigationLink>
              <NavigationLink className="menu-item" to="/hosen">Hosen</NavigationLink>
              <NavigationLink className="menu-item" to="/jacken">Mäntel</NavigationLink>
              <NavigationLink className="menu-item" to="/taschen">Taschen</NavigationLink>
              <Break/>
              <Break/>
              <NavigationLink className="menu-item small" to="/rechtliches/kontakt">Kontakt</NavigationLink>
              <NavigationLink className="menu-item small" to="/rechtliches/unternehmen">Unternehmen</NavigationLink>
            </Menu>
          </BurgerMenuContainer>
          <CartContainer>
            <div class="snipcart-summary">
              <Cart href="#" className="snipcart-checkout">
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

const Break = styled('br')`
  display: block;
   margin: 10px 0;
`

const BreakSmall = styled('br')`
  display: block;
   margin: -8px 0;
`

const LogoLink = styled(Link)`
  img {
    width: 100px;
    height: auto;
  }
`

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

const BurgerMenuContainer = styled('div')`

.small {
  font-size: 0.8rem;
}

.bm-burger-button {
  position: fixed;
  width: 25px;
  height: 20px;
  left: 25px;
}

.bm-burger-bars {
  background: black;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-cross {
  background: black;
}

.bm-menu {
  background: white;
  font-size: 1.15em;
}

.bm-morph-shape {
  fill: #373a47;
}

.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

.bm-item {
  display: inline-block;
  margin-top: 5px;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
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