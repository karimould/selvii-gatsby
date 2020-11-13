import React from "react";
import Wrapper from "../components/wrapper/Wrapper";
import "../styles/normalize.css";
import comingSoon from "../img/comingsoon.jpeg";
import Head from "../components/util/Head";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Head title="Selvii Online Shop" desc="Selvii Damenmode online kaufen. Shoppen Sie die neueste Selvii Damenmode." />
        <Header />
        <SliderComp />
        <SocialmediaIndex />
        <Footer />
      </Wrapper>
    );
  }
}

 IndexPage.propTypes = {
   data: PropTypes.shape({
     allMarkdownRemark: PropTypes.shape({
       edges: PropTypes.array,
     }),
   }),
 }

 export const pageQuery = graphql`
   query IndexQuery {
     allMarkdownRemark(
       sort: { order: DESC, fields: [frontmatter___date] },
       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
     ) {
       edges {
         node {
           excerpt(pruneLength: 400)
           id
           fields {
             slug
           }
           frontmatter {
             title
             templateKey
             date(formatString: "MMMM DD, YYYY")
           }
         }
       }
     }
   }
 `
 export const pageQuery = graphql`
   query NewProducts {
     allMarkdownRemark(
       limit: 6
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
