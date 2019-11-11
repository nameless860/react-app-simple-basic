import React , { Component, Fragment } from 'react';
import DeleteModal from '../Modal/DeleteModal'
import { Link } from 'react-router-dom'
import StringUtils from 'lodash/string'
import { connect } from 'react-redux'
import { deleteProject } from '../../actions/projectsAction'
import { createFlash } from '../../actions/flashesAction'
import { PropTypes } from 'prop-types'

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
    const t = this.context.t;

    this.setState({deleteButtonSubmitting: true})
    this.props.deleteProject(id)
    .then(() => {
      this.props.createFlash({
        id: Date.now(),
        type: 'success',
        message: t("flash.delete_success",{model: t("project")})
      })
      this.setState({isDeleteModalOpen: !this.state.isDeleteModalOpen})
      this.setState({deleteButtonSubmitting: false})
    })
    .catch(err => {
      this.props.createFlash({
        id: Date.now(),
        type: 'error',
        message: t("flash.delete_unsuccess",{model: t("project")})
      })
      console.log(err)
    })
  }

  render() {
    const t = this.context.t;

    const data = this.props.data || []
    const isDeleteModalOpen = this.state.isDeleteModalOpen

    const dataRows = data.map(prj => {
      const linkToEditProjectForm = `/projects/${prj.id}/edit`
      return(
        <tr key={prj.id}>
          <td className="col-8">{prj.name}</td>
          <td className="col-4">
            <Link className="btn btn-warning mr-2" to={linkToEditProjectForm}>{t("table.table_body.edit")}</Link>
            <button className="btn btn-danger" onClick={() => this.handleToggleDeleteModal(prj) }>{t("table.table_body.delete")}</button>
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

CMyTableBody.contextTypes = {
  t: PropTypes.func.isRequired
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