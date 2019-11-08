import React, { Component, Fragment } from 'react'
import { requests } from '../../constants.js'
import axios from '../../config/axios.js'
import StringUtils from 'lodash/string'
import { connect } from 'react-redux'
import { editProject } from '../../actions/projectsAction'
import { createFlash } from '../../actions/flashesAction'

StringUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g

class CEditProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state ={
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

    const url = StringUtils.template(requests.GET_PROJECT_BY_ID_URL)({id: projectId})
    axios.get(url)
    .then(res => {
      console.log("Got project by id successfuly!!!")
      this.setState({projectData: res.data})
    })
    .catch(err => {})
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
    const projectData = this.state.projectData

    let submitButton
    if(this.state.submitting) {
      submitButton = (
        <div className="btn btn-info active">
          <div className="spinner-border spinner-border-sm text-light"></div>
        </div> )
    } else {
      submitButton = <button type="submit" className="btn btn-info">Save</button>
    }

    return (
      <Fragment>
        <h2 className="my-5">Edit Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="formName" className="form-label col-form-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input id="formName" className="form-control" type="text" name="name" placeholder="Enter name" value={projectData.name} onChange={this.handleNameChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              { submitButton }
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  editProject: editProject,
  createFlash,
}

const EditProjectForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CEditProjectForm)

export default EditProjectForm