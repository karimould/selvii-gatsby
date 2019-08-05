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
        <Head title="Neu | Damenmode | Selvii Online Shop" desc="Endecken Sie die neusten Damenkollektionen von Selvii bei uns im Onlineshop auf unsere NEU Seite finden Sie immer die neusten Sachen von Selvii"/>
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
            sale
            price
            sale_price
            title
            templateKey
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 450, quality: 100) {
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