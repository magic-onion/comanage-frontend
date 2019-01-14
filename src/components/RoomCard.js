import React from 'react'
// import RoomMaker from './RoomMaker'
import RoomEditor from './RoomEditor'
import RoomDetails from './RoomDetails'

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
    let details = !this.state.details
    this.setState({details}, ()=>console.log(this.state.details))
  }

  get roomAssignees(){
    if (this.props.roomMembers) {
      let assigned = this.props.roomMembers.filter(assignment => assignment.room_id === this.props.room.id)
      let membersAssigned = assigned.map(assigned => this.props.members.find(member => assigned.member_id === member.id))
      return membersAssigned
    }
  }

  render() {
    const {props: {room}} = this
    return (
      <div className="room-card">
        <span><h3>{room.name}</h3></span>
        {this.roomAssignees ? <h4>Current Members: {this.roomAssignees.length}</h4> : <p>No assigned Members</p>}
        <h5>Occupancy: </h5>
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

export default RoomCard
