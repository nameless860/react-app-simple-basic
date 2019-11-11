import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../actions/projectsAction'
import { PropTypes } from 'prop-types'

class CProjectDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fetching: true,
    }
  }

  componentDidMount() {
    const project_id = this.props.match.params.id
    const project = this.props.project || {}

    if(project.id) {
      this.setState({fetching: false})
    } else {
      this.props.getProject(project_id)
      .then(() => {
        this.setState({fetching: false})
      })
    }
  }

  render() {
    const t = this.context.t;

    const project = this.props.project || {}
    const users = project.users || []
    let users_email = users.map(user => <span>{user.email}</span>)
    if(!users_email.length) {
      users_email = <span>{t("project.fields.users.no_users")}</span>
    }

    return (
      <Fragment>
        <h2 className="my-5">{t("project.information")}</h2>
        <div className="row">
          <div className="col-4"><strong>{t("project.fields.name")}</strong></div>
          <div className="col-8">{project.name}</div>
        </div>
        <div className="row">
          <div className="col-4"><strong>{t("project.fields.involved_users")}</strong></div>
          <div className="col-8">{users_email}</div>
        </div>
      </Fragment>
    )
  }
}

CProjectDetails.contextTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = (state,props) => ({
  project: state.projects.find(prj => prj.id == props.match.params.id),
})

const mapDispatchToProps = {
  getProject,
}

const ProjectDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(CProjectDetails)

export default ProjectDetails