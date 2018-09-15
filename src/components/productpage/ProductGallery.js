import React from 'react'
import styled from 'react-emotion'
import img_1 from '../../img/test_1.jpg'

export default class ProductGallery extends React.Component {
  render() {
    console.log("KARIIIIM");
    console.log(this.props.gallery);
    
    return(
      <ProductGalleryContainer>
      {this.props.gallery.map(function(img, i){
        return <ProductImgContainer> <img alt={img.alt} src={img.image} /> </ProductImgContainer>
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
`

const ProductImgContainer = styled('div')`
  width: 100%;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
`
