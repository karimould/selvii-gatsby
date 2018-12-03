import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'


export default class ProductCard extends React.Component {


  renderCard() {    
    if(this.props.available) {
      return(
        <ProductCardContainer>
        <ProductCardLink title={this.props.title} to={this.props.link}>
        <ProductCardImageContainer>
          <ProductCardImage alt={this.props.title} src={this.props.img}/>
        {this.props.new ? (<NewProduct>NEU</NewProduct>) : (null)}
        {this.props.sale ? (<NewProduct>SALE</NewProduct>) : (null)}
        <ProductCardTitle>{this.props.title}</ProductCardTitle>
        {this.props.sale ? (<div><ProductSalePrice>{this.props.price} €</ProductSalePrice><ProductPrice><Red>{this.props.sale_price} €</Red></ProductPrice></div>) : (<ProductPrice>{this.props.price} €</ProductPrice>)}
        </ProductCardImageContainer>
        </ProductCardLink>
      </ProductCardContainer>
      )
    } else {
      return(
        <ProductCardContainer>
        <ProductCardImageContainer>
          <ProductCardImage alt={this.props.title} src={this.props.img}></ProductCardImage>
          {this.props.new ? (<NewProduct>NEU</NewProduct>) : (null)}
          {this.props.sale ? (<NewProduct>SALE</NewProduct>) : (null)}
          <NewProduct>Ausverkauft</NewProduct>
        <ProductCardTitle>{this.props.title}</ProductCardTitle>
        {this.props.sale ? (<div><ProductSalePrice>{this.props.price} €</ProductSalePrice><ProductPrice><Red>{this.props.sale_price} €</Red></ProductPrice></div>) : (<ProductPrice>{this.props.price} €</ProductPrice>)}
        </ProductCardImageContainer>
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
  text-align: left;
  font-size: 0.8rem;
  width: 500px;
  margin-bottom: 100px;

  @media (max-width: 980px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: auto;
  }
`

const ProductCardImageContainer = styled('div')`
  width: 70%;
  margin: 0 auto;
  height: auto;
`

const ProductCardImage = styled('img')`
  width: 100%;
  height: auto; 
`

const ProductCardTitle = styled('h2')`
  :hover {
    text-decoration: underline;
  }
`

const NewProduct = styled('h3')`
  text-decoration: underline;
  font-weight: bold;
`
const ProductPrice = styled('p')`
  color: '#5d3126';
`

const ProductSalePrice = styled('p')`
  color: '#5d3126';
  text-decoration: line-through;
`

const ProductCardLink = styled(Link)`
  color: black;
`

const Red = styled('span')`
  color: red;
`