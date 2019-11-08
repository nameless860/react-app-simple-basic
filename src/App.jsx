import React, { Component } from 'react';
import './App.css';
import ProjectIndex from './components/Project/ProjectIndex'
import UserIndex from './components/User/UserIndex'
import MyNavbar from './components/Header/MyNavbar'
import AddNewProjectForm from './components/Project/AddNewProjectForm'
import EditProjectForm from './components/Project/EditProjectForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import MyFlashes from './components/Flash/MyFlashes'

class App extends Component {
  render() {
    return (
      <Router>
        <MyNavbar />
        <MyFlashes />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProjectIndex} />
            <Route exact path="/projects" component={ProjectIndex} />
            <Route exact path="/users" component={UserIndex} />
            <Route exact path="/projects/new" component={AddNewProjectForm} />
            <Route exact path="/projects/:id/edit" component={EditProjectForm} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
