import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectsAction'
import { createFlash } from '../../actions/flashesAction'

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
        message: 'The project has been created successfully!'
      })
      this.props.history.push('/projects');
    })
    .catch(err => {
      this.props.createFlash({
        id: Date.now(),
        type: 'error',
        message: 'Something went wrong. Failed to create project!'
      })
      this.setState({submitting: false})
    })
  }

  render() {
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
        <h2 className="my-5">New Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="formName" className="form-label col-form-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input id="formName" className="form-control" type="text" name="name" placeholder="Enter name" onChange={this.handleNameChange}/>
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