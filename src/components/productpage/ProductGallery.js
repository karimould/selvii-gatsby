import React from 'react'
import styled from '@emotion/styled'
import Img from "gatsby-image"

export default class ProductGallery extends React.Component {
  render() {   
    console.log("ÄÄÄÄ");
    console.log(this.props.gallery)
    return(
      <ProductGalleryContainer>
      {this.props.gallery.map(function(img, i){
        return <ProductImgContainer><Img alt={img.alt} fluid={img.image.childImageSharp.fluid} />
        </ProductImgContainer>
      })}
      </ProductGalleryContainer>

    )
  }
}

const ProductGalleryContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  @media (max-width: 850px) {
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 25px;
    width: 100%;
  }
`

const ProductImgContainer = styled('div')`
  width: 100%;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
`
