import React from 'react'
import styled from 'react-emotion'
import ProductGallery from './ProductGallery';
import AddToCart from '../../img/addToCart.svg'


export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({size: 's', color: 'weiß'});
    this.handleChangeSize = this.handleChangeSize.bind(this)
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }


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
      window.Snipcart.api.modal.show();;
    },1500);
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
        <label>
          <h3>Farbe:</h3>
          <ProductPageSelect onChange={this.handleChangeColor}>
          {this.props.colors.map(function(color){
          return(
            <option value={color.color}>{color.color}</option>
          )
          })}
          </ProductPageSelect>
          <br />
        </label>
        </div>
        )
    }
  }

  renderProduct() {
    if(this.props.color === null) {
      return(
        <div>
        <CallToActionContainer>
        <a href="#"
        class="snipcart-add-item"
        data-item-name={this.props.title}
        data-item-price={this.props.price}
        data-item-id={this.props.id}
        data-item-url="https://snipcart.com/headphones"
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
        data-item-price={this.props.price}
        data-item-id={this.props.id}
        data-item-url="https://snipcart.com/headphones"
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
        <a href="#"
        class="snipcart-add-item"
        data-item-name={this.props.title}
        data-item-price={this.props.price}
        data-item-id={this.props.id}
        data-item-url="https://snipcart.com/headphones"
        data-item-custom2-name="Größe"
        data-item-custom2-options={this.sizesToString()}
        data-item-custom2-value={this.state.size}
        data-item-custom2-required="true"
        data-item-custom3-name="Farbe"
        data-item-custom3-options={this.colorsToString()}
        data-item-custom3-value={this.state.color}
        data-item-custom3-required="true">
        In den Warenkorb hinzufügen
      </a>
      </CallToActionContainer>
      <br />
      <CallToActionContainer>
      <a onClick={this.showModal} href="#"
        class="snipcart-add-item"
        data-item-name={this.props.title}
        data-item-price={this.props.price}
        data-item-id={this.props.id}
        data-item-url="https://snipcart.com/headphones"
        data-item-custom2-name="Size"
        data-item-custom2-options={this.sizesToString()}
        data-item-custom2-value={this.state.size}
        data-item-custom2-required="true"        
        data-item-custom3-name="Farbe"
        data-item-custom3-options={this.colorsToString()}
        data-item-custom3-value={this.state.color}
        data-item-custom3-required="true">
        Kaufen
      </a>
      </CallToActionContainer>
      </div>
      )
    }
  }

  render() {
    return(
      <ProductPageContainer>
        <ProductBuyButtonMobileContainer>
          <a onClick={this.handleScrollTo}>Kaufen</a>
        </ProductBuyButtonMobileContainer>
        <ProductGallery gallery={this.props.gallery} />
        <ProductDescContainer>
          <ProductDescWrapper ref={ el => this.container = el}>
            <ProductPageTitle>{this.props.title}</ProductPageTitle>
            <ProductPageDescText>{this.props.desc}</ProductPageDescText>
            <ProductDescInfos>
              Made in Italy | 80% Baumwolle | 20% Polyester
            </ProductDescInfos>
            <ProductModelInfos>
              Modell: Karim | <a href="#">Instagram</a> | 1,78m | 84kg
            </ProductModelInfos>
            <ProductPrice>{this.props.price} €</ProductPrice>
            <br />
            {this.renderSelection()}
            <br />
            {this.renderProduct()}
          </ProductDescWrapper>
        </ProductDescContainer>
      </ProductPageContainer>
    )
  }
}


const ProductPageContainer = styled('div')`
  padding-top: 100px;
  padding-left: 400px;
  display: flex;
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
  @media (max-width: 850px) {
    position: sticky;
    text-align: center;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }
`

const ProductPageTitle = styled('h1')`
  font-size: 1.7rem;
  @media (max-width: 850px) {
    font-size: 1.5rem;
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
const ProductPageAddToCartBTN = styled('a')`
`
const CallToActionContainer = styled('div')`
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: black;
  color: white;
  a {
    color: white;

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
  font-size: 16px;
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
