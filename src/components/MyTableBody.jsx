import React , { Component } from 'react';
import MyTableRow from './MyTableRow'

class MyTableBody extends Component {
  render() {
    const data = this.props.data || []

    const dataRows = data.map(prj => {
      return(
        <MyTableRow dataRow={prj} />
      )
    })

    return(
      <tbody>
        {dataRows}
      </tbody>
    )
  }
}

export default MyTableBody