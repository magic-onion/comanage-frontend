import React from 'react'
import { getRoomDetails } from '../actions/detail'

import { connect } from 'react-redux'

class RoomCard extends React.Component {

  handleDetails = event => {
    this.props.getRoomDetails(this.props.room.id)
  }

  get roomAssignees(){
    if (this.props.roomusers) {
      let assigned = this.props.roomusers.filter(assignment => assignment.room_id === this.props.room.id)
      let membersAssigned = assigned.map(assigned => this.props.members.find(member => assigned.member_id === member.id))
      return membersAssigned
    }
    else return [null]
  }

  render() {
    const {props: {room}} = this
    return (
      <div onClick={this.handleDetails} className="room-card">
        <span><h4>{room.name}</h4></span>
        {this.roomAssignees ? <h4>Current Members: {this.roomAssignees.length}</h4> : <p>No assigned Members</p>}
        <h5>Occupancy: {room.occupancy}</h5>
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
