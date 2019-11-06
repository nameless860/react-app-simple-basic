import React, { Component, Fragment } from 'react'
import MyTable from '../Table/MyTable'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import { fetchProjects } from '../../actions/projectsAction'
import { connect } from 'react-redux'

class CProjectIndex extends Component {
  constructor(props) {
    super(props)

    this.removeProjectFromList = this.removeProjectFromList.bind(this)
  }

  componentDidMount(){
    this.props.fetchProjects()
  }

  removeProjectFromList(id) {
    const projects = this.state.projects || []
    const index = projects.findIndex(prj => prj.id === id)

    projects.splice(index, 1)

    this.setState({projects: projects})
  }

  render() {
    const projects = this.props.projects || []

    return (
      <Fragment>
        <h2 className="my-5">PROJECTS MANAGEMENT</h2>
        <Link className="btn btn-primary my-3" to="/projects/new"><b>+</b> New Project</Link>
        <MyTable data={projects} removeProjectFromList={this.removeProjectFromList}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects,
})

const mapDispatchToProps = {
  fetchProjects: fetchProjects,
}

const ProjectIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(CProjectIndex)

export default ProjectIndex