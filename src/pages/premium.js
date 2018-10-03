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

export default class Premium extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark        
    return(
      <Wrapper>
        <Head title="Neu | Damenmode | Selvii Online Shop" desc="Endecken Sie die Premium Damenkollektionen von Selvii bei uns im Onlineshop"/>
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

Premium.propTypes = {
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
  query IndexQueryPremiumProducts {
    allMarkdownRemark(
      filter: { frontmatter: { category_: { eq: "premium" } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            available
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