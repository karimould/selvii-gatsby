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


export default class Kleider extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark
        
    return(
      <Wrapper>
        <Head title="Produktübersicht | Damenmode | Selvii Online Shop" desc="Endecken Sie Selvii. Alles auf einen Blick"/>
        <Header />
          <ProductCardWrapper>
          {products.slice(0).reverse().map(({node: product}) => (
            <ProductCard 
              link={product.fields.slug}
              category={product.frontmatter.category_}
              img={product.frontmatter.featuredImage}
              title={product.frontmatter.title}
              new={product.frontmatter.new}
              sale={product.frontmatter.sale}
              price={product.frontmatter.price}
              sale_price={product.frontmatter.sale_price}
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

Kleider.propTypes = {
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
  query IndexQueryAllProducts {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "produkt" } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            available
            sale
            price
            sale_price
            new
            title
            templateKey
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          category_
          }
        }
      }
    }
  }
`