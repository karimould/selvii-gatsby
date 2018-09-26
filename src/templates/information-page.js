import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Content, { HTMLContent } from '../components/siteContent/Content'

export const InformationPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

InformationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const InformationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Wrapper>
      <Header />
      <InformationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      <Footer />
    </Wrapper>
  )
}

InformationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InformationPage

export const informationPageQuery = graphql`
  query InformationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
