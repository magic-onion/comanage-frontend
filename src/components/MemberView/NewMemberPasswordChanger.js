import React from 'react'
import { connect } from 'react-redux'
import { makeNewMemberRealMember } from '../../actions/member'

class NewMemberPasswordChanger extends React.Component {
  state = {
    username: this.props.user.username,
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    let editObj = {
      id: this.props.user.id,
      user: {
        username: this.state.username,
        password: this.state.password
      }
    }
    this.props.makeNewMemberRealMember(editObj)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    return(
      <div className="member-password-changer">
      <h1>Please Change Your Password</h1>

      <form onSubmit={this.handleSubmit}>
        <input className="member-password-changer-input" name="username" onChange={this.handleChange} type="text" value={this.state.username}/>
        <input className="member-password-changer-input" name="password" onChange={this.handleChange} type="text" value={this.state.password}/>
        <button className="member-password-changer-button" type="submit">Thanks!</button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeNewMemberRealMember: obj => dispatch(makeNewMemberRealMember(obj))
  }
}

export default connect(null, mapDispatchToProps)(NewMemberPasswordChanger)
