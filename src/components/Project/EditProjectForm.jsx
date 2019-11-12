import React, { Component, Fragment } from 'react'
import StringUtils from 'lodash/string'
import { connect } from 'react-redux'
import { getProject } from '../../actions/projectsAction'
import { editProject } from '../../actions/projectsAction'
import { createFlash } from '../../actions/flashesAction'
import { PropTypes } from 'prop-types'

StringUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g

class CEditProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state ={
      fetching: true,
      submitting: false,
      projectData: {
        id: '',
        name: '',
      }
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const projectId = this.props.match.params.id

    if(this.state.projectData.id) {
      this.setState({fetching: false})
    } else {
      this.props.getProject(projectId)
      .then(() => {
        this.setState({fetching: false})
      })
    }
  }

  static getDerivedStateFromProps(nextProps, state) {
    let newState = {...state}
    nextProps.projectData && (newState.projectData = nextProps.projectData)
    return newState;
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({submitting: true})
    const project = this.state.projectData || {}

    this.props.editProject(project)
    .then(() => {
      this.props.createFlash({
        id: Date.now(),
        type: 'success',
        message: 'The project has been edited successfully!'
      })
      this.props.history.push('/projects')
    })
    .catch(err => {
      this.props.createFlash({
        id: Date.now(),
        type: 'error',
        message: 'Something went wrong. Failed to edit project!'
      })
      this.setState({submitting: false});
    })
  }

  handleNameChange(e) {
    const name = e.target.value;

    this.setState({
      projectData: { ...this.state.projectData, name },
    })
  }

  render() {
    const t = this.context.t;

    const projectData = this.state.projectData

    let submitButton
    if(this.state.submitting) {
      submitButton = (
        <div className="btn btn-info active">
          <div className="spinner-border spinner-border-sm text-light"></div>
        </div> )
    } else {
      submitButton = <button type="submit" className="btn btn-info">{t("project.button.save")}</button>
    }

    return (
      <Fragment>
        <h2 className="my-5">{t("edit_project_page.title")}</h2>
        { this.state.fetching ?
          <div>
            <div className="spinner-grow text-muted"></div>
            <div className="spinner-grow text-primary"></div>
            <div className="spinner-grow text-success"></div>
            <div className="spinner-grow text-info"></div>
            <div className="spinner-grow text-warning"></div>
            <div className="spinner-grow text-danger"></div>
            <div className="spinner-grow text-secondary"></div>
            <div className="spinner-grow text-dark"></div>
            <div className="spinner-grow text-light"></div>
          </div> :
         (<form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="formName" className="form-label col-form-label col-sm-2">{t("project.fields.name")}</label>
              <div className="col-sm-10">
                <input id="formName" className="form-control" type="text" name="name" placeholder={t("project.fields.name.placeholder")} value={projectData.name} onChange={this.handleNameChange}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                { submitButton }
              </div>
            </div>
          </form>)
        }

      </Fragment>
    )
  }
}

CEditProjectForm.contextTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  projectData: state.projects.find(prj => prj.id == props.match.params.id),
  id: props.match.params.id,
  projects: state.projects
})

const mapDispatchToProps = {
  getProject,
  editProject,
  createFlash,
}

const EditProjectForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CEditProjectForm)

export default EditProjectForm