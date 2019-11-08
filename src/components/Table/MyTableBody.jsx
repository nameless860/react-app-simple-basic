import React , { Component, Fragment } from 'react';
import DeleteModal from '../Modal/DeleteModal'
import { Link } from 'react-router-dom'
import StringUtils from 'lodash/string'
import { connect } from 'react-redux'
import { deleteProject } from '../../actions/projectsAction'
import { createFlash } from '../../actions/flashesAction'

StringUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g

class CMyTableBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deleteButtonSubmitting: false,
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
    this.setState({deleteButtonSubmitting: true})
    this.props.deleteProject(id)
    .then(() => {
      this.props.createFlash({
        id: Date.now(),
        type: 'success',
        message: 'The project has been deleted successfully!'
      })
      this.setState({isDeleteModalOpen: !this.state.isDeleteModalOpen})
      this.setState({deleteButtonSubmitting: false})
    })
    .catch(err => {
      this.props.createFlash({
        id: Date.now(),
        type: 'error',
        message: 'Something went wrong. Failed to delete project!'
      })
      console.log(err)
    })
  }

  render() {
    const data = this.props.data || []
    const isDeleteModalOpen = this.state.isDeleteModalOpen

    const dataRows = data.map(prj => {
      const linkToEditProjectForm = `/projects/${prj.id}/edit`
      return(
        <tr key={prj.id}>
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
          submitting={this.state.deleteButtonSubmitting}
          obj={this.state.project}
          handleDelete={this.handleDelete}
          handleToggleDeleteModal={this.handleToggleDeleteModal}
          toggle={() => {this.setState({isDeleteModalOpen: !this.state.isDeleteModalOpen})}}
        />

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  deleteProject: deleteProject,
  createFlash,
}

const MyTableBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(CMyTableBody)

export default MyTableBody