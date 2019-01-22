import React from 'react'
import { connect } from 'react-redux'
import { newUser, loginUser } from '../actions/user'
// import icon from '../assets/Icon-pngs/comanage-logo.png'


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
        <h2> Please Log In or Create a New Account </h2>
        <form className="user-maker-form">
          <input className="user-maker-username" onChange={this.handleChange} type="text" name="username" value={this.state.username}/>
          <input className="user-maker-password" onChange={this.handleChange} type="text" name="password" value={this.state.password}/>
          <button className="user-maker-buttons" onClick={this.handleUser} name="login" type="submit">Login</button>
          <button className="user-maker-buttons" onClick={this.handleUser} name="create" type="submit">Create User</button>
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
