import React, { Component, Fragment } from 'react'

class AddNewProjectForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log(">>>>>>>>>>>>>>>")
  }

  render() {
    return (
      <Fragment>
        <h2 className="my-5">New Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label for="formName" className="form-label col-form-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input id="formName" className="form-control" type="text" name="name" placeholder="Enter name"/>
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