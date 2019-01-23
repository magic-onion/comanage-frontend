import React from 'react'
import { toggleMemberViewRoomDetails } from '../../../actions/member'
import { connect } from 'react-redux'
// import { getMemberViewDetails } from '../../../actions/member'
import { getMemberViewRoomDetails } from '../../../actions/member'

class MemberRoomCard extends React.Component {

  getRoomDetails = event => {
    this.props.getMemberViewRoomDetails(this.props.room.id)
  }


  get roomAssignees(){
    if (this.props.roomusers) {
      let assigned = this.props.roomusers.filter(assignment => assignment.room_id === this.props.room.id)
      let membersAssigned = assigned.map(assigned => this.props.members.find(member => assigned.user_id === member.id))
      return membersAssigned
    }
    else return [null]
  }

  render() {
    return (
      <div id={this.props.room.id} onClick={this.getRoomDetails} className="member-room-card">
        <h1>{this.props.room.name}</h1>
        <h3>Current Members: {this.roomAssignees.length}</h3>
        <h2>Occupancy: {this.props.room.occupancy}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memberView: state.memberView
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMemberViewRoomDetails: () => dispatch(toggleMemberViewRoomDetails()),
    getMemberViewRoomDetails: id => dispatch(getMemberViewRoomDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRoomCard)



// {this.roomAssignees.map(member => <p>{member.name}</p>)}
