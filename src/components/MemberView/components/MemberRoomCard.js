import React from 'react'

class MemberRoomCard extends React.Component {


  get roomAssignees(){
    if (this.props.roomusers) {
      let assigned = this.props.roomusers.filter(assignment => assignment.room_id === this.props.room.id)
      let membersAssigned = assigned.map(assigned => this.props.members.find(member => assigned.user_id === member.id))
      return membersAssigned
    }
    else return [null]
  }

  render() {
    console.log(this.props.roomusers)
    return (
      <div className="member-room-card">
        <h1>{this.props.room.name}</h1>
        {this.roomAssignees.map((member, i) => <p key={i}>{member.username}</p>)}
        <h2>Occupancy: {this.props.room.occupancy}</h2>
      </div>
    )
  }
}

export default MemberRoomCard



// {this.roomAssignees.map(member => <p>{member.name}</p>)}
