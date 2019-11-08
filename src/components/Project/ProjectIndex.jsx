import React, { Component, Fragment } from 'react'
import MyTable from '../Table/MyTable'
import { Link } from 'react-router-dom'
import { fetchProjects } from '../../actions/projectsAction'
import { connect } from 'react-redux'

class CProjectIndex extends Component {

  componentDidMount() {
    if(!this.props.projects.length) {
      this.props.fetchProjects();
    }
  }

  render() {
    const projects = this.props.projects || []

    let tableData
    if(projects.length) {
      tableData = <MyTable data={projects}/>
    } else {
      tableData = <div>
          <div className="spinner-grow text-muted"></div>
          <div className="spinner-grow text-primary"></div>
          <div className="spinner-grow text-success"></div>
          <div className="spinner-grow text-info"></div>
          <div className="spinner-grow text-warning"></div>
          <div className="spinner-grow text-danger"></div>
          <div className="spinner-grow text-secondary"></div>
          <div className="spinner-grow text-dark"></div>
          <div className="spinner-grow text-light"></div>
      </div>;
    }
    return (
      <Fragment>
        <h2 className="my-5">PROJECTS MANAGEMENT</h2>
        <Link className="btn btn-primary my-3" to="/projects/new"><b>+</b> New Project</Link>
        { tableData  }
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