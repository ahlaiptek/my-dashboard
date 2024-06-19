import PropTypes from 'prop-types'
import { Fragment } from 'react'

const Template = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Template
