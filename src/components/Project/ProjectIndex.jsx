import React, { Component, Fragment } from 'react'
import MyTable from '../Table/MyTable'
import { Link } from 'react-router-dom'
import { fetchProjects } from '../../actions/projectsAction'
import { connect } from 'react-redux'

class CProjectIndex extends Component {

  componentDidMount() {
    if(!this.props.projects.length)
      this.props.fetchProjects();
    }

  render() {
    const projects = this.props.projects || []

    return (
      <Fragment>
        <h2 className="my-5">PROJECTS MANAGEMENT</h2>
        <Link className="btn btn-primary my-3" to="/projects/new"><b>+</b> New Project</Link>
        <MyTable data={projects}/>
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