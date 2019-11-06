import React , { Component, Fragment } from 'react';
import { requests } from '../constants.js'
import axios from '../config/axios.js'
import DeleteModal from './DeleteModal'

class MyTableBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDeleteModalOpen: false,
      project: {},
    }

    this.handleToggleDeleteModal = this.handleToggleDeleteModal.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
  }

  handleToggleDeleteModal(project) {
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
      project: project,
    })
  }

  handleDelete(id) {
    const url = requests.DELETE_PROJECT_URL + `/${id}`

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
      return(
        <tr key={prj.id}>
          <td>{prj.name}</td>
          <td>
            <button className="btn btn-warning mr-2">Edit</button>
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