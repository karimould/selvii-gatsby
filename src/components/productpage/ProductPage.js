import React from 'react'
import styled from '@emotion/styled'
import ProductGallery from './ProductGallery'
import Modal from 'react-responsive-modal'


export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      size: 's', 
      color: 'weiß',
      open: false,
    });
    this.handleChangeSize = this.handleChangeSize.bind(this)
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }

  //Function for the modal
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  //scroll for buy button on mobile
  handleScrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  //Changes size for the cart
  handleChangeSize(event) {
    this.setState({size: event.target.value});
  }

  //Changes color for the cart
  handleChangeColor(event) {
    this.setState({color: event.target.value});
  }

  //Shows the modal for the "Kaufen" button
  showModal() {
    setTimeout(function () {
      window.Snipcart.api.modal.show();
      this.setState.cartCount = window.Snipcart.api.items.count()
    },2500);
  }

  //Update state cartCounter in the Header component to show item count in the cart 
  //and rerender the header component
  getCartCount() {
    this.setState.cartCount = window.Snipcart.api.items.count()    
  }

  //Saves the different sizes in a string
  sizesToString() {
    let sizesArray = this.props.sizes.map(function(size){
      return size['size']
    })
    return sizesArray.join("|")
  }

  //Saves the different colors in a string
  colorsToString() {
    let colorArray = this.props.colors.map(function(color){
      return color['color']
    })
    return colorArray.join("|")
  }

  //Gives back a color array
  getColorArray() {
    let colorArray = this.props.colors.map(function(color){
      return color['color']
    })
    return colorArray
  }

  //Methods creates the product link for Snipcart
  createProductLink() {

  }

  renderSelection() {
    if(this.props.color === null) {
      return(
      <label>
        <h3>Größe:</h3>
          <ProductPageSelect onChange={this.handleChangeSize}>
          {this.props.sizes.map(function(size){
          return(
            <option value={size.size}>{size.size}</option>
          )
          })}
          </ProductPageSelect>
      </label>
      )
    } else {
      return(
        <div>
        <label>
          <h3>Größe:</h3>
          <ProductPageSelect onChange={this.handleChangeSize}>
          {this.props.sizes.map(function(size){
          return(
            <option value={size.size}>{size.size}</option>
          )
          })}
          </ProductPageSelect>
          <br />
        </label>
        <br />
        {/*<label>
          <h3>Farbe:</h3>
          <ProductPageSelect onChange={this.handleChangeColor}>
          {this.props.colors.map(function(color){
          return(
            <option value={color.color}>{color.color}</option>
          )
          })}
          </ProductPageSelect>
          <br />
        </label> */}
        </div>
        )
    }
  }

  renderProduct() {
    if(this.props.color === null) {
      return(
          <div>
            <CallToActionContainer>
              <a onClick={this.getCartCount} href="#"
              class="snipcart-add-item"
              data-item-name={this.props.title}
              data-item-price={this.props.sale ? (this.props.sale_price) : (this.props.price)}
              data-item-id={this.props.id}
              data-item-url={"https://selvii.netlify.com" + this.props.link}
              data-item-custom2-name="Größe"
              data-item-custom2-options={this.sizesToString()}
              data-item-custom2-value={this.state.size}
              data-item-custom2-required="true">
              In den Warenkorb hinzufügen
            </a>
          </CallToActionContainer>
          <br />
          <CallToActionContainer>
            <a onClick={this.showModal} href="#"
              class="snipcart-add-item"
              data-item-name={this.props.title}
              data-item-price={this.props.sale ? (this.props.sale_price) : (this.props.price)}
              data-item-id={this.props.id}
              data-item-url={"https://selvii.netlify.com" + this.props.link}
              data-item-custom2-name="Size"
              data-item-custom2-options={this.sizesToString()}
              data-item-custom2-value={this.state.size}
              data-item-custom2-required="true">
              Kaufen
            </a>
          </CallToActionContainer>
        </div>
    )
    } else {
      return(
          <div>
            <CallToActionContainer>
            <a onClick={this.getCartCount} href="#"
            class="snipcart-add-item"
            data-item-name={this.props.title}
            data-item-price={this.props.sale ? (this.props.sale_price) : (this.props.price)}
            data-item-id={this.props.id}
            data-item-url={"https://selvii.netlify.com" + this.props.link}
            data-item-custom2-name="Größe"
            data-item-custom2-options={this.sizesToString()}
            data-item-custom2-value={this.state.size}
            data-item-custom2-required="true"
            // data-item-custom3-name="Farbe"
            // data-item-custom3-options={this.colorsToString()}
            // data-item-custom3-value={this.state.color}
            // data-item-custom3-required="true"
            >
            In den Warenkorb hinzufügen
        </a>
        </CallToActionContainer>
        <br />
          <CallToActionContainer>
          <a onClick={this.showModal} href="#"
            class="snipcart-add-item"
            data-item-name={this.props.title}
            data-item-price={this.props.sale ? (this.props.sale_price) : (this.props.price)}
            data-item-id={this.props.id}
            data-item-url={"https://selvii.netlify.com" + this.props.link}
            data-item-custom2-name="Size"
            data-item-custom2-options={this.sizesToString()}
            data-item-custom2-value={this.state.size}
            data-item-custom2-required="true"        
            // data-item-custom3-name="Farbe"
            // data-item-custom3-options={this.colorsToString()}
            // data-item-custom3-value={this.state.color}
            // data-item-custom3-required="true"
            >
            Kaufen
          </a>
          </CallToActionContainer>
        </div>
      )
    }
  }

  render() {
    const { open } = this.state;
    return(
      <ProductPageContainer>
        <ProductBuyButtonMobileContainer>
          <a onClick={this.handleScrollTo}>Kaufen</a>
        </ProductBuyButtonMobileContainer>
        <ProductGallery gallery={this.props.gallery} />
        <ProductDescContainer>
          <ProductDescWrapper>
            <ProductPageTitle>{this.props.title}</ProductPageTitle>
            <br />
            {this.props.sale ? (<div><ProductSalePrice>{this.props.price} €</ProductSalePrice><ProductPrice>SALE: {this.props.sale_price} € <SpanWithSmallText>exkl. Versand</SpanWithSmallText></ProductPrice></div>) : (<ProductPrice>{this.props.price} € <SpanWithSmallText>exkl. Versand</SpanWithSmallText></ProductPrice>)}
            <br />
            <ProductPageDescText>{this.props.desc}  Lieferzeit 2-3 Tage.</ProductPageDescText>
            <br />
            <ProductModelInfos>{this.props.modelinfo}</ProductModelInfos>
            <br />
            {this.renderSelection()}
            <br />
            {this.renderProduct()}
            <br />
            <MoreInformationLink onClick={this.onOpenModal}>Pflege und Material</MoreInformationLink>
            <Modal open={open} onClose={this.onCloseModal} center>
              <ModalContainer>
                {this.props.productinfo}
              </ModalContainer>
            </Modal>
          </ProductDescWrapper>
        </ProductDescContainer>
      </ProductPageContainer>
    )
  }
}


const ProductPageContainer = styled('div')`
  padding-top: 100px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    padding-left: 300px;
  }
  @media (max-width: 890px) {
    padding-left: 200px;
  }
  @media (max-width: 850px) {
    padding-left: 25px;
  }
  @media (max-width: 850px) {
    padding-left: 0px;
    flex-direction: column-reverse;
  }
`
const ProductDescContainer = styled('div')`
  margin-left: 50px;
  @media (max-width: 850px) {
    margin-left: 0;
  }
`

const ProductDescWrapper = styled('div')`
  position: fixed;
  width: 300px;
  font-size: 0.8rem;

  @media (max-width: 850px) {
    position: sticky;
    text-align: center;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }
`

const MoreInformationLink = styled('a')`
  color: black;
  text-decoration: none;
`

const ModalContainer = styled('div')`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 25px;
`

const ProductPageTitle = styled('h1')`
  font-size: 1.4rem;
  font-weight: bold;
  @media (max-width: 850px) {
    font-size: 1.3rem;
  }
`

const ProductPageDescText = styled('p')`
`

const ProductDescInfos = styled('p')`
`

const ProductModelInfos = styled('p')`
`
const ProductPrice = styled('p')`
  font-weight: bold;
`

const ProductSalePrice = styled('p')`
  font-weight: bold;
  color: '#5d3126';
  text-decoration: line-through;
`
const ProductPageAddToCartBTN = styled('a')`
`
const CallToActionContainer = styled('div')`
  width: 100%;
  text-align: center;
  font-size: 1.0rem;
  font-weight: bold;
  background-color: black;
  color: white;
  a {
    color: white;

  }

  :active {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
  
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }  
`

const ProductPageSelect = styled('select')`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid black;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  background-color: white;
  color: black;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;

  option {
    color: #666;
  }
  /*
  * IE
  */
  ::-ms-expand {
  display: none;
  }
  :focus::-ms-value {
  background-color: transparent;
}
`

const ProductBuyButtonMobileContainer = styled('div')`
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: black;
  color: white;
  a {
    color: white;
  }
  @media (min-width: 851px) {
    display: none;
  }
`

const SpanWithSmallText = styled('span')`
  font-weight: lighter;
  font-size: 0.65rem;
`