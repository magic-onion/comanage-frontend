import React from 'react'
import MemberRoomCard from '../components/MemberRoomCard'
import { connect } from 'react-redux'

class MemberRoomContainer extends React.Component {

  get roomCards() {
    return  this.props.community.rooms.map((room, i) => <MemberRoomCard room={room} roomusers={this.props.community.roomusers} members={this.props.community.members} key={i}/>)
  }

  render() {
    return (
      <div className="member-room-container">
        {this.roomCards}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

export default connect(mapStateToProps)(MemberRoomContainer)
