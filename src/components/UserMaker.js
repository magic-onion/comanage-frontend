import React from 'react'
import { connect } from 'react-redux'
import { newUser, loginUser, clearError } from '../actions/user'
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
    if (this.props.error !== "") {
      this.props.clearError()
    }
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

  get errorHandle() {

    let errorArray = ["Cut it out", "Stop", "Don't do that", "Not cool my dude", "Clearly you're going full chungus"]
    let fullError = errorArray[(Math.floor(Math.random() * 5))]
    return fullError
  }

  get error() {
    if (this.props.error) {
      return (
        <div className="error-prompt">
          <h2>{this.errorHandle}</h2>
        </div>
      )
    }
    return null
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
        {this.error}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    password: state.user.password,
    status: state.user.status,
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newUser: (userObj) => dispatch(newUser(userObj)),
    loginUser: (userObj) => dispatch(loginUser(userObj)),
    clearError: () => dispatch(clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMaker)
