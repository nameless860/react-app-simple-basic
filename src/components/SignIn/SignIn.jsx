import React, { Component } from 'react'
import { signInUser } from '../../config/redux-token-auth'
import { createFlash } from '../../actions/flashesAction'
import { connect } from 'react-redux'

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

    this.props.signInUser(this.state)
    .then(() => {
      this.props.createFlash({
        type: 'success',
        mess: "Logged in successfully!"
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
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="email" onChange={this.handleChangeEmail.bind(this)} />
          <input type="password" placeholder="password" onChange={this.handleChangePassword.bind(this)} />
          <button type="submit">Log in</button>
        </form>
      </div>)
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
  createFlash,
  signInUser,
}

const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(CSignIn)

export default SignIn