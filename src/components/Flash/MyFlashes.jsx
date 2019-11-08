import React, { Component } from 'react'
import {Toast} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteFlash} from '../../actions/flashesAction'
import MyFlash from './MyFlash'

import './MyFlashes.scss'

class CMyFlashes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashes: [],
    }
  }

  render() {
    let flashes = this.props.flashes

    let flashesEles = flashes.map(flash => (<MyFlash key={flash.id} flash={flash}/>))

    return (
      <div className="toast-container">
        {flashesEles}
      </div>
    )
  }
}

const mapStoreToProps = (store) => ({
  flashes: store.flashes,
})

const mapDispatchToProps = {
  deleteFlash
}

const MyFlashes = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CMyFlashes)

export default MyFlashes;