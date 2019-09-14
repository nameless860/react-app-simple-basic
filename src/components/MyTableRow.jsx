import React , { Component } from 'react';

class MyTableRow extends Component {
  render() {
    const dataRow = this.props.dataRow || {}

    return (
      <tr key={dataRow.id}>
        <td>{dataRow.name}</td>
        <td>
          <button className="btn btn-warning mr-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default MyTableRow;