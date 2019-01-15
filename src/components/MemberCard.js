import React from 'react'
import { getMembersRooms } from '../actions/member'
import { connect } from 'react-redux'


class MemberCard extends React.Component {

  state = {
    assigning: false,
    detailView: false
  }

  showMemberDetails = event => {
    
  }

  toggling = event => {
    if (event.target.name === "detailView") {
      let detailView = !this.state.detailView
      this.setState({detailView}, ()=> {
        if (this.state.detailView) {
          this.props.getMembersRooms(this.props.member.id)
        }
      })
    }
    else {
      let assigning = !this.state.assigning
      this.setState({assigning})
    }
  }

  get assignedRooms() {
    if (this.props.roomMembers) {
      let assigned = this.props.roomMembers.filter(assignment => assignment.active)
      let membersAssigned = assigned.filter(assignment => assignment.member_id === this.props.member.id)
      let roomsAssigned = membersAssigned.map(assigned => this.props.rooms.find(room => assigned.room_id === room.id))
      return roomsAssigned
    }
    else return [null]
  }

  render() {
    return (

      <div className="member-card">
        <h1>{this.props.member.name}</h1>
        <img src={this.props.icon} alt={this.props.member.name}/>
        <h6>"{this.props.member.bio}"</h6>
        <button name="detailView" onClick={this.showMemberDetails}>details</button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    assignment: state.assignment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMembersRooms: id => dispatch(getMembersRooms(id))
  }
}

export default connect(null, mapDispatchToProps)(MemberCard)
