import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import LanguageDropdown from './LanguageDropdown'

import './MyNavbar.scss'

class MyNavbar extends Component {
  render() {
    const t = this.context.t;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand nav-link" to="/projects">{t("header.logo")}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">{t("header.projects")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">{t("header.users")}</Link>
            </li>
          </ul>
        </div>
        <div className="language-dropdown">
          <LanguageDropdown />
        </div>
      </nav>
    )
  }
}

MyNavbar.contextTypes = {
  t: PropTypes.func.isRequired
}

export default MyNavbar