import React from 'react'
import { connect } from 'react-redux'
import { newUser, loginUser } from '../actions/user'

  const init = {
    username: "",
    password: ""
  }

class UserMaker extends React.Component {

  state = init

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUser = event => {
    event.preventDefault()
    if (event.target.name === "create") {
      this.props.newUser(this.state)
      this.setState({username: init.username, password: init.password})
    }
    else if (event.target.name === "login") {
      this.props.loginUser(this.state)
      this.setState({username: init.username, password: init.password})
    }
  }

  render() {
    return (
      <div className="user-maker">
        <form>
          <input onChange={this.handleChange} type="text" name="username" value={this.state.username}/>
          <input onChange={this.handleChange} type="text" name="password" value={this.state.password}/>
          <button onClick={this.handleUser} name="login" type="submit">Login</button>
          <button onClick={this.handleUser} name="create" type="submit">Create User</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    password: state.user.password,
    status: state.user.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newUser: (userObj) => dispatch(newUser(userObj)),
    loginUser: (userObj) => dispatch(loginUser(userObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMaker)
