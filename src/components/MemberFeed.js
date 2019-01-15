import React from 'react'
import MemberFeedItem from './MemberFeedItem'
import { createAssignment } from '../actions/assignment'
import { getRoomDetails } from '../actions/detail'
import { connect } from 'react-redux'

class MemberFeed extends React.Component {

  state ={
    assignmentOpen: false
  }

  handleAssignment = event => {
    event.preventDefault()
    console.log(event.target.children[0].value, event.target.children[1].value)
    let assignmentObject = {
      roomMember: {
        roomId: event.target.children[0].value,
        memberId: event.target.children[1].value,
        communityId: this.props.communityId
      }
    }
    this.props.createAssignment(assignmentObject)
    let assignmentOpen = !this.state.assignmentOpen
    this.setState({assignmentOpen})
    if (this.props.detail.currentRoom.id === assignmentObject.roomId && this.props.detail.toggled) {
      this.props.getRoomDetails(assignmentObject.roomId)
    }
  }


  toggleAssignment = event => {
    let assignmentOpen = !this.state.assignmentOpen
    this.setState({assignmentOpen})
  }

  get assignmentForms() {
    return (
      <form onSubmit={this.handleAssignment}>
      <select>
        {this.props.rooms.map((room, i) => <option value={room.id} key={i}>{room.name}</option>)}
      </select>
      <select>
        {this.props.members.map((member, i) => <option value={member.id} key={i}>{member.name}</option>)}
      </select>
      <button type="submit">Assign</button>
      </form>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleAssignment}>CLICK TO ASSIGN</button>
        {this.state.assignmentOpen ? this.assignmentForms : null}
        <h3>Members in this Community</h3>
        {this.props.members.map((member, i) => <MemberFeedItem key={i} member={member}/>)}
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
    createAssignment: (assignmentObject) => dispatch(createAssignment(assignmentObject)),
    getRoomDetails: (roomId) => dispatch(getRoomDetails(roomId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberFeed)
