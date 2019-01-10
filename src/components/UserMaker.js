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

  handleSubmit = event => {
    event.preventDefault()
    let user = this.state
    this.props.dispatch({
      type: 'CREATE_USER',
      payload: user
    })
    let userBody = {
      user: store.getState().user
    }

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userBody)
    }
    console.log(config)
    fetch('http://localhost:3000/api/v1/users', config).then(r=>r.json()).then(console.log)
    this.setState({username: init.username, password: init.password})
  }

  render() {
    return (
      <div className="user-maker">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="username" value={this.state.username}/>
          <input onChange={this.handleChange} type="text" name="password" value={this.state.password}/>
          <button type="submit">Create User</button>
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
