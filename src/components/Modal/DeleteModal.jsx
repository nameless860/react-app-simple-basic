import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PropTypes } from 'prop-types'

class DeleteModal extends Component {

  render() {
    const t = this.context.t;

    const obj = this.props.obj || {}
    const isOpen = this.props.isOpen || false

    let submitButton
    if(this.props.submitting) {
      submitButton = (
        <div className="btn btn-info active">
          <div className="spinner-border spinner-border-sm text-light"></div>
        </div> )
    } else {
      submitButton = <button className="btn btn-info" onClick={() => this.props.handleDelete(obj.id)}>{t("button.yes")}</button>
    }

    return (
      <Modal isOpen={isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>{t("modal.delete.title")}</ModalHeader>
          <ModalBody>
            {t("modal.delete",{modal: t('project'), name: obj.name})}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.handleToggleDeleteModal}>{t("button.no")}</Button>
            {submitButton}
          </ModalFooter>
      </Modal>
    )
  }
}

DeleteModal.contextTypes = {
  t: PropTypes.func.isRequired
}


export default DeleteModal