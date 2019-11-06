import React, { Component } from 'react';
import './App.css';
import ProjectIndex from './components/ProjectIndex'
import UserIndex from './components/UserIndex'
import MyNavbar from './components/MyNavbar'
import AddNewProjectForm from './components/AddNewProjectForm'
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
