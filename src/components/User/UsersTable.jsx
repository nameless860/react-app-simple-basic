import React, { Component } from 'react'

class UsersTable extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    const users = this.props.users || []

    const thead =(
      <thead>
        <tr>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
    )

    const tbodyRows = users.map(user => (
      <tr key={user.id}>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-warning mr-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));

    const tbody = (
      <tbody>
        {tbodyRows}
      </tbody>
    )

    return (
      <table className="table table-hover users-table">
        {thead}
        {tbody}
      </table>
    )

  }
}

export default UsersTable