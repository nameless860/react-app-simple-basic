import React, { Component, Fragment } from 'react'
import MyTable from '../Table/MyTable'

class UserIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount(){
    // window.axios.get("https://nus-react-demo-backend.herokuapp.com/v1/projects").then(res => {
    //   console.log("Get users successfully!!", res)
    //   this.setState({users: res.data})
    // })
    // .catch(error => {
    //   console.log(">>>>>>>>>>>> Having error", error)
    // })
  }

  render() {
    const users = this.state.users || []

    return (
      <Fragment>
        <h2 className="my-5">USERS MANAGEMENT</h2>
        <button className="btn btn-primary my-3"><b>+</b> New User</button>
        <MyTable data={users}/>
      </Fragment>
    )
  }
}

export default UserIndex