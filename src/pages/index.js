import React from 'react'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import SliderComp from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import '../styles/normalize.css'
import Head from '../components/util/Head';
import SocialmediaIndex from '../components/util/socialmedia-index/Socialmedia-index';

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: products } = data.allMarkdownRemark  
  
    return (
      <Wrapper>
        <Head title="Selvii Online Shop | Die neue Kollektion online kaufen" desc="Selvii Damenmode online kaufen. Shoppen Sie die neueste Selvii Damenmode."/>
        <Header />
        <SliderComp />
        <SocialmediaIndex />
        <Footer />
      </Wrapper>
    )
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }


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
// export const pageQuery = graphql`
//   query NewProducts {
//     allMarkdownRemark(
//       limit: 6
//       filter: { frontmatter: { new: { eq: true } }}
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             available
//             new
//             price
//             title
//             templateKey
//             description
//             featuredImage
//             category_
//           }
//         }
//       }
//     }
//   }
// `