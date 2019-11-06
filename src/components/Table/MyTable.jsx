import React , { Component } from 'react';
import MyTableHeader from './MyTableHeader'
import MyTableBody from './MyTableBody'

class MyTable extends Component {
  render() {
    const data = this.props.data || {}

    return(
      <table className="table table-hover">
        <MyTableHeader/>
        <MyTableBody data={data} removeProjectFromList={this.props.removeProjectFromList}/>
      </table>
    )
  }
}

export default MyTable;