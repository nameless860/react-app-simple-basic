import React , { Component } from 'react';
import MyTableHeader from './MyTableHeader'
import MyTableBody from './MyTableBody'

import './MyTable.scss'

class MyTable extends Component {
  render() {
    const data = this.props.data || []

    return(
      <table className="table table-hover">
        <MyTableHeader/>
        <MyTableBody data={data}/>
      </table>
    )
  }
}

export default MyTable;