import React, { Component } from 'react'
import {Toast} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteFlash} from '../../actions/flashesAction'

// import './MyFlash.scss'

class CMyFlash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }

    this.typeToTitle = this.typeToTitle.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  typeToTitle(flashType) {
    return {
      error: "Error",
      warning: "Warning",
      success: "Success",
    }[flashType]
  }

  onClose() {
    this.setState({show: false})
    this.props.deleteFlash(this.props.flash.id)
  }

  render() {
    let flash = this.props.flash

    let bgClass;
    switch(flash.type) {
      case 'error':
        bgClass = 'bg-danger';
        break;
      case 'warning':
        bgClass = 'bg-warning';
        break;
      default:
        bgClass = 'bg-success';
    }

    return (
      <Toast
       onClose={() => this.onClose()}
       show={this.state.show}
       delay={4000}
       autohide
      >
        <Toast.Header className={`text-white ${bgClass}`}>
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