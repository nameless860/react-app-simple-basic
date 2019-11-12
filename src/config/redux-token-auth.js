import { generateAuthActions } from 'redux-token-auth'

const authUrl = `${process.env.REACT_APP_API_URL}/auth`

const config = {
  authUrl,
  userAttributes: {
    email: 'email'
  },
  userRegistrationAttributes: {
    name: 'name',
    email: 'email'
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}