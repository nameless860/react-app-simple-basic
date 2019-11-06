import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteModal extends Component {

  render() {
    const obj = this.props.obj || {}
    const isOpen = this.props.isOpen || false

    return (
      <Modal isOpen={isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Confirmation</ModalHeader>
          <ModalBody>
            Are you sure you want to delete project <b>{obj.name}?</b>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.handleToggleDeleteModal}>No</Button>
            <Button color="primary" onClick={() => this.props.handleDelete(obj.id)}>Yes</Button>
          </ModalFooter>
      </Modal>
    )
  }
}

export default DeleteModal