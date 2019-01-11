import React from 'react'
import { connect } from 'react-redux'
import store from '../index.js'

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
      let user = this.state
      this.props.dispatch({ type: 'CREATE_USER', payload: user })
      let userBody = { user: store.getState().user }
      let config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userBody)
      }
      fetch('http://localhost:3000/api/v1/users', config).then(r=>r.json()).then(p=>localStorage.setItem("token", p.jwt))
      this.setState({username: init.username, password: init.password})
    }
    else if (event.target.name === "login") {
      let user = this.state
      this.props.dispatch({ type: 'CREATE_USER', payload: user })
      let userBody = { user: store.getState().user }
      let config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userBody)
      }
      fetch('http://localhost:3000/api/v1/login', config).then(r=>r.json()).then(p=> localStorage.setItem("token", p.jwt)).then(p => {
        let profileConfig = {
          method: "GET",
          headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
        }
        fetch('http://localhost:3000/api/v1/profile', profileConfig).then(r=>r.json()).then(p => {
          console.log(p)
          this.props.dispatch({type: "GET_USER_DATA", payload: p.communities})
        })
      })
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

export default connect(mapStateToProps)(UserMaker)
