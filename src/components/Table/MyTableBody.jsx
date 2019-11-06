import React , { Component, Fragment } from 'react';
import { requests } from '../../constants.js'
import axios from '../../config/axios.js'
import DeleteModal from '../Modal/DeleteModal'
import { Link } from 'react-router-dom'
import StringUtils from 'lodash/string'

StringUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g

class MyTableBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDeleteModalOpen: false,
      project: {},
    }

    this.handleToggleDeleteModal = this.handleToggleDeleteModal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleToggleDeleteModal(project) {
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
      project: project,
    })
  }

  handleDelete(id) {
    const url = StringUtils.template(requests.DELETE_PROJECT_URL)({id:id})

    axios.delete(url)
    .then(res => {
        console.log("Project deleted successfully")
        this.props.removeProjectFromList(id)
        this.setState({isDeleteModalOpen: !this.state.isDeleteModalOpen})
      },
      err => {
        console.log(err)
        alert(err)
      }
    )
  }

  render() {
    const data = this.props.data || []
    const isDeleteModalOpen = this.state.isDeleteModalOpen

    const dataRows = data.map(prj => {
      const linkToEditProjectForm = `/projects/${prj.id}/edit`
      return(
        <tr key={prj.id} className="row">
          <td className="col-8">{prj.name}</td>
          <td className="col-4">
            <Link className="btn btn-warning mr-2" to={linkToEditProjectForm}>Edit</Link>
            <button className="btn btn-danger" onClick={() => this.handleToggleDeleteModal(prj) }>Delete</button>
          </td>
        </tr>
      )
    })

    return(
      <Fragment>
        <tbody>
          {dataRows}
        </tbody>

        <DeleteModal
          isOpen={isDeleteModalOpen}
          obj={this.state.project}
          handleDelete={this.handleDelete}
          handleToggleDeleteModal={this.handleToggleDeleteModal}
          toggle={() => {this.setState({isDeleteModalOpen: !this.state.isDeleteModalOpen})}}
        />

      </Fragment>
    )
  }
}

export default MyTableBody