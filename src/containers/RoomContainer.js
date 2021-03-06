import React from 'react'
import RoomCard from '../components/RoomCard'
import MemberFeed from '../components/MemberFeed'
import { connect } from 'react-redux'
import { createNewroom } from '../actions/room'

  const init = {
    toggleCreateForm: false,
    name: "name",
    occupancy: 1
  }

class RoomContainer extends React.Component {

  state = init

  roomInput = event => this.setState({[event.target.name]: event.target.value})

  createRoom = event => {
    event.preventDefault()
    let roomBody = {
      room: {
        name: this.state.name,
        occupancy: this.state.occupancy,
        communityId: this.props.community.id
      }
    }
    this.props.createNewroom(roomBody)
    this.setState({toggleCreateForm: false, name: init.name, occupancy: init.occupancy})
  }

  get createNewRoomForm() {
    return (
      <form className="member-creator-form" onSubmit={this.createRoom}>
        <input className="member-creator-input" onChange={this.roomInput} name="name" type="text" value={this.state.name}/>
        <input className="member-creator-input" onChange={this.roomInput} name="occupancy" type="number" value={this.state.occupancy}/>
        <button className="new-member-creator-button" type="submit">Save</button>
      </form>
    )
  }

  toggleCreateForm = () => {
    let toggleCreateForm = !this.state.toggleCreateForm
    this.setState({toggleCreateForm})
  }

  render() {
    return (
      <div className="room-container">
      <button className="room-creator-button" onClick={this.toggleCreateForm}>New Room</button>
        <h2 className="room-container-title">The Rooms of {this.props.community.name}</h2>
        {this.state.toggleCreateForm ? this.createNewRoomForm : null}
        {this.props.community.rooms.map((room, i) => <RoomCard key={i} room={room} roomusers={this.props.community.roomusers} members={this.props.community.members}/> )}
        {this.props.community.rooms.length > 0 ?  <MemberFeed members={this.props.community.members} rooms={this.props.community.rooms} communityId={this.props.community.id}/> : null}
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewroom: obj => dispatch(createNewroom(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer)
