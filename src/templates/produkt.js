import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Wrapper from '../components/wrapper/Wrapper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductPage from '../components/productpage/ProductPage';

export const Produkt = ({ data }) => {
  const { markdownRemark: product } = data
  return (
    <Wrapper>
      <Header productPage={true} />
        <ProductPage 
        title={product.frontmatter.title}
        id={product.id}
        colors={product.frontmatter.color}
        sizes={product.frontmatter.size}
        desc={product.frontmatter.description}
        price={product.frontmatter.price}
        link={product.fields.slug}
        gallery={product.frontmatter.gallery}
        />
      <Footer />
    </Wrapper>
  )
}

Produkt.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}


export default Produkt

export const aboutPageQuery = graphql`
  query ProductPageShop($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      fields {
        slug
      }
      frontmatter {
        color {
          color
        }
        size {
          size
        }
        title
        price
        description
        gallery {
          alt
          image
        }
      }
    }
  }
`
