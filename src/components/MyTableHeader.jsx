import React , { Component } from 'react';

class MyTableHeader extends Component {
  render() {
    return(
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
    )
  }
}

export default MyTableHeader;