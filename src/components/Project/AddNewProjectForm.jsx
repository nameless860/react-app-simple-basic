import React, { Component, Fragment } from 'react'
import axios from '../../config/axios.js'

class AddNewProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

    const project = {
      name: this.state.name
    }

    axios.post("https://nus-react-demo-backend.herokuapp.com/v1/projects", project)
      .then(res => {
        console.log("Project created successfully")
        this.props.history.push('/projects');
      })
      .catch(err => {
        console.log("can't create project");
        alert(err);
      })
  }

  render() {
    return (
      <Fragment>
        <h2 className="my-5">New Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label for="formName" className="form-label col-form-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input id="formName" className="form-control" type="text" name="name" placeholder="Enter name" onChange={this.handleNameChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-info">Save</button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default AddNewProjectForm