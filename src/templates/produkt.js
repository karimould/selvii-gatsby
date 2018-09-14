import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Wrapper from '../components/wrapper/Wrapper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductPage from '../components/productpage/ProductPage';

export const Produkt = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Wrapper>
      <Header />
        <ProductPage />
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
  query AboutPageProduktTest($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
