import React from 'react'
import RoomCard from '../components/RoomCard'
import MemberFeed from '../components/MemberFeed'
import { connect } from 'react-redux'


class RoomContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="room-container">
      <h2>ROOM CONTAINER</h2>
        {this.props.community.rooms.map((room, i) => <RoomCard key={i} room={room} roomMembers={this.props.community.roomMembers} members={this.props.community.members}/> )}
      {this.props.community.rooms.length > 0 ?  <MemberFeed members={this.props.community.members} rooms={this.props.community.rooms} communityId={this.props.community.id}/> : null}
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

export default connect(mapStateToProps)(RoomContainer)
