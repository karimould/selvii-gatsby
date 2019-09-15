import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductPage from '../components/productpage/ProductPage'
import Head from '../components/util/Head'
export const Produkt = ({ data }) => {
  const { markdownRemark: product } = data
  return (
    <Wrapper>
      <Head title={"Selvii | " + product.frontmatter.title} desc={product.frontmatter.description}/>
      <Header productPage={true} backLink={product.frontmatter.new ? "/new" : product.frontmatter.category_}/>
        <ProductPage 
        title={product.frontmatter.title}
        id={product.id}
        colors={product.frontmatter.color}
        sizes={product.frontmatter.size}
        desc={product.frontmatter.description}
        productinfo={product.frontmatter.productinfo}
        modelinfo={product.frontmatter.modelinfo}
        sale={product.frontmatter.sale}
        sale_price={product.frontmatter.sale_price}
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
        new
        sale
        sale_price
        price
        description
        productinfo
        modelinfo
        category_
        gallery {
          alt
          image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
        }
      }
    }
  }
`
