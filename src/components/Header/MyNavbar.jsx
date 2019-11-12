import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import LanguageDropdown from './LanguageDropdown'
import { connect } from 'react-redux'
import { signOutUser } from '../../config/redux-token-auth'
import { createFlash } from '../../actions/flashesAction'

import './MyNavbar.scss'

class MyNavbar extends Component {

  handleLogout() {
    const t = this.context.t

    this.props.signOutUser()
    .then(() => {
      this.props.createFlash({
        id: new Date(),
        type: "success",
        message: t("flash.log_out_success")
      })
    })
    .catch(() => {
      this.props.createFlash({
        id: new Date(),
        type: "error",
        message: t("flash.log_out_unsuccess")
      })
    })
  }

  render() {
    const t = this.context.t;

    const currentUser = this.props.currentUser

    let authButtons
    if(currentUser.isSignedIn) {
      authButtons = (
        <div className="auth-buttons">
          <button className="btn btn-success mr-2" onClick={this.handleLogout.bind(this)}>{t("button.log_out")}</button>
        </div>
      )
    } else {
      authButtons = (
        <div className="auth-buttons">
          <Link className="btn btn-success mr-2" to="/signin">{t("button.sign_in")}</Link>
          <Link className="btn btn-secondary" to="/signup">{t("button.sign_up")}</Link>
        </div>
      )
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand nav-link" to="/">{t("header.logo")}</Link>
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
            <li className="nav-item">
              <div className="language-dropdown px-2">
                <LanguageDropdown />
              </div>
            </li>
          </ul>
        </div>
        {authButtons}
      </nav>
    )
  }
}

MyNavbar.contextTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  currentUser: state.reduxTokenAuth.currentUser
})

const mapDispatchToProps = {
  signOutUser,
  createFlash,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(MyNavbar)