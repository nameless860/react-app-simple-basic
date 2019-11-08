import React , { Component } from 'react';

class MyTableHeader extends Component {
  render() {
    return(
      <thead>
        <tr>
          <th className="col-8">Name</th>
          <th className="col-4">Actions</th>
        </tr>
      </thead>
    )
  }
}

export default MyTableHeader;