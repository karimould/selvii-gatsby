import React from 'react'
import styled from 'react-emotion'
import test from '../../img/test_1.jpg'


export default class ProductCard extends React.Component {
  render() {
    return(
      <ProductCardContainer>
        <ProductCardImageContainer>
          <ProductCardImage src={test}/>
        </ProductCardImageContainer>
        <NewProduct>NEU</NewProduct>
        <ProductCardTitle>OVERSIZED BLAZER</ProductCardTitle>
        <ProductPrice>35 €</ProductPrice>
      </ProductCardContainer>
    )
  }
}

const ProductCardContainer = styled('div')`
  text-align: center;
  font-size: 1.2rem;
  width: 500px;
  height: 1000px;
`

const ProductCardImageContainer = styled('div')`
  width: 100%;
  height: auto;
`

const ProductCardImage = styled('img')`
  width: 100%;
  height: auto;
`

const ProductCardTitle = styled('h2')`
`

const NewProduct = styled('h3')`
  text-decoration: underline;
`
const ProductPrice = styled('p')`
  color: '#5d3126';
`