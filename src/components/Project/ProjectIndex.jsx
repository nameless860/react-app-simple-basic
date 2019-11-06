import React, { Component, Fragment } from 'react'
import MyTable from '../Table/MyTable'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class ProjectIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [] }

    this.removeProjectFromList = this.removeProjectFromList.bind(this)
  }

  componentDidMount(){
    axios.get("https://nus-react-demo-backend.herokuapp.com/v1/projects").then(res => {
      console.log("Get projects successfully!!", res)
      this.setState({projects: res.data})
    })
    .catch(error => {
      console.log("Get projects data unsuccessfully!!!", error)
    })
  }

  removeProjectFromList(id) {
    const projects = this.state.projects || []
    const index = projects.findIndex(prj => prj.id === id)

    projects.splice(index, 1)

    this.setState({projects: projects})
  }

  render() {
    const projects = this.state.projects || []

    return (
      <Fragment>
        <h2 className="my-5">PROJECTS MANAGEMENT</h2>
        <Link className="btn btn-primary my-3" to="/projects/new"><b>+</b> New Project</Link>
        <MyTable data={projects} removeProjectFromList={this.removeProjectFromList}/>
      </Fragment>
    )
  }
}

export default ProjectIndex