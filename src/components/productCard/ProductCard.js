import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'


export default class ProductCard extends React.Component {
  render() {
    return(
      <ProductCardContainer>
        <ProductCardLink title={this.props.title} to={this.props.link}>
        <ProductCardImageContainer>
          <ProductCardImage alt={this.props.title} src={this.props.img}/>
        </ProductCardImageContainer>
        {this.props.new ? (<NewProduct>NEU</NewProduct>) : (null)}
        <ProductCardTitle>{this.props.title}</ProductCardTitle>
        <ProductPrice>35 €</ProductPrice>
        </ProductCardLink>
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

const ProductCardLink = styled(Link)`
  color: black;
  :hover {
    text-decoration: overline underline;
  }
`