import React, { Component } from 'react'
import {Toast} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteFlash} from '../../actions/flashesAction'

import './MyFlash.scss'

class CMyFlash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFlash: {},
      show: false
    }

    this.typeToTitle = this.typeToTitle.bind(this);
  }

  static getDerivedStateFromProps(nextProps, state) {
    let newState = {...state}
    newState.currentFlash = nextProps.flashes[0] || {}
    newState.show = nextProps.flashes.length > 0
    return newState
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentFlash.id !== this.state.currentFlash.id
  }

  typeToTitle(flashType) {
    return {
      error: "Error",
      warning: "Warning",
      info: "Info",
    }[flashType]
  }

  onClose() {
    this.setState({show: false})
    this.props.deleteFlash(this.state.currentFlash.id)
  }

  render() {
    let flash = this.state.currentFlash

    return (
      <Toast
       onClose={() => this.onClose()}
       show={this.state.show}
       delay={2000}
       autohide
      >
        <Toast.Header>
          <strong className="mr-auto">
            {this.typeToTitle(flash.type)}
          </strong>
        </Toast.Header>
        <Toast.Body>{flash.message}</Toast.Body>
      </Toast>
    )
  }
}

const mapStoreToProps = (store) => ({
  flashes: store.flashes,
})

const mapDispatchToProps = {
  deleteFlash
}

const MyFlash = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CMyFlash)

export default MyFlash;