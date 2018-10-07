import React from 'react'
import Wrapper from '../components/wrapper/Wrapper'
import Header from '../components/header/Header'
import SliderComp from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import '../styles/normalize.css'
import Head from '../components/util/Head';
import SocialmediaIndex from '../components/util/socialmedia-index/Socialmedia-index';

const NotFoundPage = () => (
    <Wrapper>
      <Head title="Selvii Online Shop | Die neue Kollektion online kaufen" desc="Selvii Damenmode online kaufen. Shoppen Sie die neueste Selvii Damenmode."/>
      <Header />
      <SliderComp />
      <SocialmediaIndex />
      <Footer />
    </Wrapper>
  )

export default NotFoundPage
