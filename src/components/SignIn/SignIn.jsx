import React, { Component } from 'react'
import { signInUser } from '../../config/redux-token-auth'
import { createFlash } from '../../actions/flashesAction'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

class CSignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const t = this.context.t

    this.props.signInUser(this.state)
    .then(() => {
      this.props.createFlash({
        id: new Date(),
        type: 'success',
        message: t("flash.sign_in_success")
      })
    })
    .catch(() => {
      this.props.createFlash({
        id: new Date(),
        type: 'error',
        message: t("flash.sign_in_unsuccess")
      })
    })
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value})
  }

  render() {
    const t = this.context.t

    return (
      <div>
        <form className="my-5" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-row">
            <div className="col-4">
              <input className="form-control mr-2" type="text" placeholder={t("user.fields.email")} onChange={this.handleChangeEmail.bind(this)} />
            </div>
            <div className="col-4">
              <input className="form-control mr-2" type="password" placeholder={t("user.fields.password")} onChange={this.handleChangePassword.bind(this)} />
            </div>
            <div className="col-2">
              <button className="btn btn-success" type="submit">{t("button.log_in")}</button>
            </div>
          </div>
        </form>
      </div>)
  }
}

CSignIn.contextTypes = {
  t: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  createFlash,
  signInUser,
}

const SignIn = connect(
  null,
  mapDispatchToProps
)(CSignIn)

export default SignIn