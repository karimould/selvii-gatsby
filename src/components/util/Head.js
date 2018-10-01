import React from 'react'
import Helmet from 'react-helmet'

export default class Head extends React.Component {
  render() {
    return(
      <Helmet>
        <html lang="de" />
        <meta charSet="utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" 
        data-api-key="ZTc4NTUzYmEtYzViMS00ZjViLWE2OTUtYzliOGQzMGYzNDIxNjM2NzI0MzA2OTY1ODUzMTY5"
        data-cart-custom1-name="Do you accept terms? <a href='/'>Test</a>"
        data-cart-custom1-options="true|false"
        data-cart-custom1-required="true"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.desc} />
      </Helmet>
    )
  }

}