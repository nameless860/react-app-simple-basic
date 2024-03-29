import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import MyNavbar from './components/Header/MyNavbar'
import MyFlashes from './components/Flash/MyFlashes'
import ProjectIndex from './components/Project/ProjectIndex'
import UserIndex from './components/User/UserIndex'
import AddNewProjectForm from './components/Project/AddNewProjectForm'
import EditProjectForm from './components/Project/EditProjectForm'
import ProjectDetails from './components/Project/ProjectDetails'
import SignIn from './components/SignIn/SignIn'
import { connect } from 'react-redux'
import { requireLoggedOut } from './services/auth_service'
import Home from './components/Home/Home'

import { generateRequireSignInWrapper } from 'redux-token-auth'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/signin',
})

const ProjectIndexController = requireSignIn(ProjectIndex)

class Routes extends Component {

  render() {
    const isSignedIn = this.props.currentUser.isSignedIn

    return (
      <BrowserRouter>
        <MyNavbar />
        <MyFlashes />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={requireLoggedOut(SignIn,isSignedIn)}/>
            <Route exact path="/projects" component={ProjectIndexController} />
            <Route exact path="/users" component={UserIndex} />
            <Route exact path="/projects/new" component={AddNewProjectForm} />
            <Route exact path="/projects/:id/edit" component={EditProjectForm} />
            <Route exact path="/projects/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

const mapStoreToProps = (store) => ({
  currentUser: store.reduxTokenAuth.currentUser
})

export default connect(
  mapStoreToProps,
  null
)(Routes)
