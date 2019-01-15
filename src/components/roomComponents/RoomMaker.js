import React from 'react'
import { connect } from 'react-redux'

// This should be able to assign people based on the number of unassigned members

  const init = {
    RoomName: "",
  }

class RoomMaker extends React.Component {

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
      <form className="community-maker" onSubmit={this.handleSubmit} >
        <p>Room Name</p>
        <input onChange={this.handleChange} name="communityName" type="text" placeholder="Room Name" value={this.state.communityName}/>
          <p>rooms</p>
        <input onChange={this.handleChange} name="rooms" type="number" placeholder="Rooms" value={this.state.rooms}/>
          <p>members</p>
        <input onChange={this.handleChange} name="members" type="number" placeholder="Members" value={this.state.members}/>
        <button type="submit">Make the Room</button>
      </form>
    )
  }
}

const mapStateToProps = ({community}) => {
  return { community }
}

export default connect(mapStateToProps)(RoomMaker)
