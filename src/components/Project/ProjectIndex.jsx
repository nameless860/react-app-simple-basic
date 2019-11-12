import React, { Component, Fragment } from 'react'
import MyTable from '../Table/MyTable'
import { Link } from 'react-router-dom'
import { fetchProjects } from '../../actions/projectsAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CProjectIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
    }
  }

  componentDidMount() {
    this.props.currentUser.isSignedIn &&
    this.props.fetchProjects()
    .then(() => {
      this.setState({fetching: false});
    })
  }

  render() {
    const t = this.context.t;

    const projects = this.props.projects || []

    let tableData
    if(this.state.fetching) {
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
    } else {
      tableData = <MyTable data={projects}/>
    }
    return (
      <Fragment>
        <h2 className="my-5">{t('project_page.title')}</h2>
        <Link className="btn btn-primary my-3" to="/projects/new"><b>+</b> {t("project_page.new_project")}</Link>
        { tableData  }
      </Fragment>
    )
  }
}

CProjectIndex.contextTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.reduxTokenAuth.currentUser,
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