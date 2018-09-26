import React from 'react'
import PropTypes from 'prop-types'
import { InformationPageTemplate } from '../../templates/information-page'

const ImpressumPagePreview = ({ entry, widgetFor }) => (
  <InformationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ImpressumPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ImpressumPagePreview