import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import ProductCardWrapper from '../components/wrapper/ProductCardWrapper';
import ProductCard from '../components/productCard/ProductCard';
import '../styles/normalize.css'
import {Helmet} from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark  
  
    return (
      <div>
      <Helmet>
        <html lang="de" />
        <title>KARIM TEST</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

<script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="ZTc4NTUzYmEtYzViMS00ZjViLWE2OTUtYzliOGQzMGYzNDIxNjM2NzI0MzA2OTY1ODUzMTY5"></script>

<link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
      </Helmet>
      <Wrapper>
        <Header />
        <Slider />
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
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
export const pageQuery = graphql`
  query NewProducts {
    allMarkdownRemark(
      limit: 2
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