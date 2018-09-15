import React from 'react'
import styled from 'react-emotion'
import ProductGallery from './ProductGallery';
import AddToCart from '../../img/addToCart.svg'


export default class ProductPage extends React.Component {
  
  showModal() {
    setTimeout(function () {
      window.Snipcart.api.modal.show();;
    },1000);
  }


  render() {
    return(
      <ProductPageContainer>
        <ProductGallery gallery={this.props.gallery} />
        <ProductDescContainer>
          <ProductDescWrapper>
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
            <CallToActionContainer>
            <a href="#"
              class="snipcart-add-item"
              data-item-name="Headphones"
              data-item-price="200.00"
              data-item-id="42"
              data-item-url="https://snipcart.com/headphones"
              data-item-custom2-name="Size"
              data-item-custom2-options="Small|Medium|Large"
              data-item-custom2-value="Medium"
              data-item-custom2-required="true">
              In den Warenkorb hinzufügen
            </a>
            </CallToActionContainer>
            <br />
            <CallToActionContainer>
            <a onClick={this.showModal} href="#"
              class="snipcart-add-item"
              data-item-name="Headphones"
              data-item-price="200.00"
              data-item-id="42"
              data-item-url="https://snipcart.com/headphones"
              data-item-custom2-name="Size"
              data-item-custom2-options="Small|Medium|Large"
              data-item-custom2-value="Medium"
              data-item-custom2-required="true">
              Kaufen
            </a>
            </CallToActionContainer>
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
`
const ProductDescContainer = styled('div')`
  margin-left: 50px;
`

const ProductDescWrapper = styled('div')`
  position: fixed;
  width: 300px;
`

const ProductPageTitle = styled('h1')`
  font-size: 1.7rem;
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