import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Home extends Component {
  render() {
    return (
      <h1 className="my-5">{this.context.t("homepage.welcome")}</h1>
    )
  }
}

Home.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Home