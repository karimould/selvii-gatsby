import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'


export default class ProductCard extends React.Component {


  renderCard() {
    console.log("KRIMS" + this.props.available);
    
    if(this.props.available) {
      return(
        <ProductCardContainer>
        <ProductCardLink title={this.props.title} to={this.props.link}>
        <ProductCardImageContainer>
          <ProductCardImage alt={this.props.title} src={this.props.img}/>
        </ProductCardImageContainer>
        {this.props.new ? (<NewProduct>NEU</NewProduct>) : (null)}
        <ProductCardTitle>{this.props.title}</ProductCardTitle>
        <ProductPrice>{this.props.price} €</ProductPrice>
        </ProductCardLink>
      </ProductCardContainer>
      )
    } else {
      return(
        <ProductCardContainer>
        <ProductCardImageContainer>
          <ProductCardImage alt={this.props.title} src={this.props.img}>
          </ProductCardImage>
        </ProductCardImageContainer>
          {this.props.new ? (<NewProduct>Ausverkauft</NewProduct>) : (null)}
        <ProductCardTitle>{this.props.title}</ProductCardTitle>
        <ProductPrice>{this.props.price} €</ProductPrice>
        </ProductCardContainer>
      )
    }
  }

  render(){
    return(
      this.renderCard()
    )
  }
}


const ProductCardContainer = styled('div')`
  text-align: center;
  font-size: 1.2rem;
  width: 500px;
  margin-bottom: 100px;

  @media (min-width: 980px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: auto;
  }
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