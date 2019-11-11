import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectsAction'
import { createFlash } from '../../actions/flashesAction'
import { PropTypes } from 'prop-types'

class CAddNewProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitting: false,
      name: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
     this.setState({name: e.target.value})
  }

  handleSubmit(e) {
    const t = this.context.t
    e.preventDefault()

    this.setState({submitting: true})
    const project = {
      name: this.state.name
    }

    this.props.createProject(project)
    .then(() => {
      this.props.createFlash({
        id: Date.now(),
        type: 'success',
        message: t("flash.create_success",{model: t("project")})
      })
      this.props.history.push('/projects');
    })
    .catch(err => {
      this.props.createFlash({
        id: Date.now(),
        type: 'error',
        message: t("flash.create_unsuccess",{model: t("project")})
      })
      this.setState({submitting: false})
    })
  }

  render() {
    const t = this.context.t;

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
        <h2 className="my-5">{t("add_new_project_page.title")}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="formName" className="form-label col-form-label col-sm-2">{t("project.fields.name")}</label>
            <div className="col-sm-10">
              <input id="formName" className="form-control" type="text" name="name" placeholder={t("project.fields.name.placeholder")} onChange={this.handleNameChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              {submitButton}
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

CAddNewProjectForm.contextTypes = {
  t: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  createProject: createProject,
  createFlash,
}

const AddNewProjectForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CAddNewProjectForm)

export default AddNewProjectForm