import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import '../styles/normalize.css'
import ProductCardWrapper from '../components/wrapper/ProductCardWrapper'
import ProductCard from '../components/productCard/ProductCard'
import Head from '../components/util/Head'

export default class New extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark        
    return(
      <Wrapper>
        <Head title="Neu - Selvii online shop" desc="Neu - Selvii online shop"/>
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
              available={product.frontmatter.available}
            />
          ))}
          </ProductCardWrapper>
        <Footer />
      </Wrapper>
    )
  }
}

New.propTypes = {
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
  query IndexQueryNewProducts {
    allMarkdownRemark(
      filter: { frontmatter: { new: { eq: true } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            available
            new
            price
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