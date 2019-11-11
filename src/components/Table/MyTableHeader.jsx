import React , { Component } from 'react';
import { PropTypes } from 'prop-types'

class MyTableHeader extends Component {
  render() {
    const t = this.context.t;

    return(
      <thead>
        <tr>
          <th className="col-8">{t("table.header.name")}</th>
          <th className="col-4">{t("table.header.action")}</th>
        </tr>
      </thead>
    )
  }
}

MyTableHeader.contextTypes = {
  t: PropTypes.func.isRequired
}

export default MyTableHeader;