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
        data-autopop="false"
        data-api-key="MjE1MzdjZDAtZGE4Ni00MjAyLWI1ZjAtOWRhOGQwNzYzNTU0NjM2NzI0Mzg1MzA5NTczMzQx"
        data-cart-custom2-name="Mit der Bestellung akzeptieren Sie unsere AGBs. Diese können Sie <a target='_blank' rel='noopener noreferrer' href='/rechtliches/agbs'>hier</a> nachlesen."
        data-cart-custom2-options="true|false"
        data-cart-custom2-required="true"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.desc} />
      </Helmet>
    )
  }

}