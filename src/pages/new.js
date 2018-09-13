import React from 'react'
import { Link, graphql } from 'gatsby'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import '../styles/normalize.css'
import ProductCardWrapper from '../components/wrapper/ProductCardWrapper';
import ProductCard from '../components/productCard/ProductCard';


export default class New extends React.Component {
  render() {
    return(
      <Wrapper>
        <Header />
          <ProductCardWrapper>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductCardWrapper>
        <Footer />
      </Wrapper>
    )
  }
}


/**
 * 
 * WICHTI!!!
 * filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
 * 
 * 
 */


export const pageQuery = graphql`
  query IndexQueryNewProducts {
    allMarkdownRemark(
      filter: { frontmatter: { new: { eq: true } }}
    ) {
      edges {
        node {
          frontmatter {
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