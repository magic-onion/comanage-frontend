import React from 'react'
import { connect } from 'react-redux'

class MemberRoomDetail extends React.Component {

  get details() {
    if (this.props.memberView.currentRoom !== undefined) {
      return (
        <div className="member-room-detail">
          <h1>{this.props.memberView.currentRoom.name}</h1>
          <p>currently assigned:</p>
          {this.props.memberView.members.map((member, i) => <p key={i}>{member.username}</p>)}
        </div>
      )
    }
    return null
  }


  render() {
    return(
      <>
      {this.details}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    memberView: state.memberView
  }
}

export default connect(mapStateToProps)(MemberRoomDetail)
