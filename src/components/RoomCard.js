import React from 'react'
import { getRoomDetails } from '../actions/detail'

import { connect } from 'react-redux'

class RoomCard extends React.Component {

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
          <button onClick={this.handleDetails}>Details</button>
        </span>
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
