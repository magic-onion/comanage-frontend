import React from 'react'
import { connect } from 'react-redux'

  const init = {
    username: "",
    password: ""
  }

class UserMaker extends React.Component {

  state = init

  handleChange = event => {
    this.setState({
      [event.target.placeholder]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let user = this.state
    this.props.dispatch({
      type: 'CREATE_USER',
      payload: user
    })
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.user)
    }
    fetch('http://localhost:4000/api/users', config).then(r=>r.json).then(console.log)
  }

  render() {
    return (
      <div className="user-maker">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="username" value={this.state.username}/>
          <input onChange={this.handleChange} type="text" placeholder="password" value={this.state.password}/>
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
