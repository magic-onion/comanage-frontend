import React from 'react'
import { connect } from 'react-redux'

  const init = {
    communityName: "",
    rooms: 0,
    members: 0
  }

class CommunityMaker extends React.Component {

  state= init
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({type: "CREATE_COMMUNITY", payload: this.state})
    this.setState({communityName: init.communityName, rooms: init.rooms, members: init.members})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <p>Community Name</p>
        <input onChange={this.handleChange} name="communityName" type="text" placeholder="Community Name" value={this.state.communityName}/>
          <p>rooms</p>
        <input onChange={this.handleChange} name="rooms" type="number" placeholder="Rooms" value={this.state.rooms}/>
          <p>members</p>
        <input onChange={this.handleChange} name="members" type="number" placeholder="Members" value={this.state.members}/>
        <button type="submit">Make the Community</button>
      </form>
    )
  }
}

const mapStateToProps = ({community}) => {
  return { community }
}

export default connect(mapStateToProps)(CommunityMaker)
