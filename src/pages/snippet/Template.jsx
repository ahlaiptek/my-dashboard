import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Footer from './partials/Navbar'

const Template = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  )
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Template
