import React from 'react'
import MemberRoomAssigner from './MemberRoomAssigner'


class MemberCard extends React.Component {

  state = {
    assigning: false
  }

  assignMember = event => {
    let assigning = !this.state.assigning
    this.setState({assigning})
  }

  get assignedRooms() {
    if (this.props.roomMembers) {
      let assigned = this.props.roomMembers.filter(assignment => assignment.active)
      let membersAssigned = assigned.filter(assignment => assignment.member_id === this.props.member.id)
      let roomsAssigned = membersAssigned.map(assigned => this.props.rooms.find(room => assigned.room_id === room.id))
      return roomsAssigned
    }
  }

  render() {
    return (

      <div className="member-card">
        <h1>{this.props.member.name}</h1>
        <img src={this.props.icon} alt={this.props.member.name}/>
        <div>
          <p>Currently Assigned To: </p>
          {this.assignedRooms ? this.assignedRooms.map((room, i) => <p key={i}>{room.name}</p>) : null}
        </div>
        <h6>"{this.props.member.bio}"</h6>
        <button onClick={this.assignMember}>Edit/Assign</button>
        {this.state.assigning ? <MemberRoomAssigner rooms={this.props.rooms} member={this.props.member.id}/> : null}
      </div>
    )
  }

}

export default MemberCard


// let assignBody = {
//   member_id: this.props.member.id
//
// }
// let config = {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${localStorage.token}`
//   },
//   body: JSON.stringify(assignBody)
// }
