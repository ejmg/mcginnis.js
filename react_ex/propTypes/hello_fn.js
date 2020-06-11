import React from 'react'
import PropTypes from 'prop-types'

export default function Hello ({ name }) {
  return <h1>hello, { name }</h1>
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
}
