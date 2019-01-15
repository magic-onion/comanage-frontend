import React from 'react'
import { connect } from 'react-redux'
import { createAssignment } from '../actions/assignment'
//the selection is not controlled
class MemberRoomAssigner extends React.Component {

  handleSubmit = event => {
    let assignment = {
      memberId: this.props.member,
      roomId: event.target.parentElement.children[0].value,
    }
    this.props.createAssignment(assignment)
  }

  render() {
    return (
      <div>
        <select>
          {this.props.rooms.map((room, i) => <option key={i} value={room.id}>{room.name}</option> )}
        </select>
        <button onClick={this.handleSubmit}>add</button>
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
    createAssignment: assignmentObj => dispatch(createAssignment(assignmentObj))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MemberRoomAssigner)
