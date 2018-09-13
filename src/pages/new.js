import React from 'react'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import '../styles/normalize.css'


export default class New extends React.Component {
  render() {
    return(
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    )
  }
}