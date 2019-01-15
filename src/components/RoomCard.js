import React from 'react'
// import RoomMaker from './RoomMaker'
import RoomEditor from './RoomEditor'
import RoomDetails from './RoomDetails'
import { getRoomDetails } from '../actions/detail'

import { connect } from 'react-redux'

class RoomCard extends React.Component {


  state = {
    edit: false,
    details: false
  }

  handleEdit = event => {
    let edit = !this.state.edit
    this.setState({edit})
  }

  handleDetails = event => {
    this.props.getRoomDetails(this.props.room.id)
  }

  get roomAssignees(){
    if (this.props.roomMembers) {
      let assigned = this.props.roomMembers.filter(assignment => assignment.room_id === this.props.room.id)
      let membersAssigned = assigned.map(assigned => this.props.members.find(member => assigned.member_id === member.id))
      return membersAssigned
    }
    else return [null]
  }

  render() {
    const {props: {room}} = this
    return (
      <div className="room-card">
        <span><h3>{room.name}</h3></span>
        {this.roomAssignees ? <h4>Current Members: {this.roomAssignees.length}</h4> : <p>No assigned Members</p>}
        <h5>Occupancy: {room.occupancy}</h5>
        <span>
          <button onClick={this.handleEdit}>{this.state.edit ? "Hide" : "Edit"}</button>
          <button onClick={this.handleDetails}>Details</button>
        </span>
        {this.state.edit ? <RoomEditor room={room} /> : null}
        {this.state.details ?  <RoomDetails members={this.roomAssignees}/> : null}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    detail: state.detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRoomDetails: roomId => dispatch(getRoomDetails(roomId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomCard)
