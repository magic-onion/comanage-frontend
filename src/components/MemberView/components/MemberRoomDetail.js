import React from 'react'
import { connect } from 'react-redux'

class MemberRoomDetail extends React.Component {


  render() {
    return(
      <div className="member-room-detail">
        <h1>{this.props.memberView.currentRoom.name}</h1>
        <p>currently assigned:</p>
        {this.props.memberView.members.map((member, i) => <p key={i}>{member.username}</p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memberView: state.memberView
  }
}

export default connect(mapStateToProps)(MemberRoomDetail)
