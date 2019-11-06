import React, { Component } from 'react';
import './App.css';
import ProjectIndex from './components/Project/ProjectIndex'
import UserIndex from './components/User/UserIndex'
import MyNavbar from './components/Header/MyNavbar'
import AddNewProjectForm from './components/Project/AddNewProjectForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router>
        <MyNavbar />
        <Switch>
          <div className="container">
              <Route path="/" exact component={ProjectIndex} />
              <Route path="/projects" exact component={ProjectIndex} />
              <Route path="/users" exac component={UserIndex} />
              <Route path="/projects/new" exac component={AddNewProjectForm} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
