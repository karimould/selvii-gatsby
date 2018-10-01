import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import ProductCardWrapper from '../components/wrapper/ProductCardWrapper';
import ProductCard from '../components/productCard/ProductCard';
import '../styles/normalize.css'
import Head from '../components/util/Head';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark  
  
    return (
      <Wrapper>
        <Head title="Selvii online shop" desc="Selvii online shop"/>
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