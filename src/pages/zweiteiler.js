import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import '../styles/normalize.css'
import ProductCardWrapper from '../components/wrapper/ProductCardWrapper';
import ProductCard from '../components/productCard/ProductCard';


export default class Zweiteiler extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark
        
    return(
      <Wrapper>
        <Header />
          <ProductCardWrapper>
          {products.map(({node: product}) => (
            <ProductCard 
              link={product.fields.slug}
              category={product.frontmatter.category_}
              img={product.frontmatter.featuredImage}
              title={product.frontmatter.title}
              new={product.frontmatter.new}
              price={product.frontmatter.price}
              key={product.id}
            />
          ))}
          </ProductCardWrapper>
        <Footer />
      </Wrapper>
    )
  }
}

Zweiteiler.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


/**
 * 
 * WICHTI!!!
 * filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
 * 
 * 
 */


export const pageQuery = graphql`
  query IndexQueryZweiteilerProducts {
    allMarkdownRemark(
      filter: { frontmatter: { category_: { eq: "zweiteiler" } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            price
            new
            title
            templateKey
            description
            featuredImage
            category_
          }
        }
      }
    }
  }
`