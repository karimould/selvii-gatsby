import React from 'react'
import styled from 'react-emotion'
import ProductGallery from './ProductGallery';
import AddToCart from '../../img/addToCart.svg'

export default class ProductPage extends React.Component {
  render() {
    return(
      <ProductPageContainer>
        <ProductGallery />
        <AddToCartButton>
        <a href="#" class="snipcart-add-item"
          data-item-name="Headphones"
          data-item-price="200.00"
          data-item-id="42"
          data-item-url="https://snipcart.com/headphones">
          <img src={AddToCart} />
        </a>
        </AddToCartButton>
      </ProductPageContainer>
    )
  }
}

const ProductPageContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  margin-left: 50px;
`
const AddToCartButton = styled('div')`
  width: 50px;
  height: 50px;
  float: right;

  button {
  border: 0; 
  background-color: white;
  }
  :hover {
    border: black solid;
  }
  margin-right: 100px;
    img {
      width: 50px;
      height: 50px;
    }
`