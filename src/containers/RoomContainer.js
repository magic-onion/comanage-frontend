import React from 'react'
import RoomCard from '../components/RoomCard'
import MemberFeed from '../components/MemberFeed'


class RoomContainer extends React.Component {

  render() {
    return (
      <div className="room-container">
      <h2>ROOM CONTAINER</h2>
        {this.props.rooms.map((room, i) => <RoomCard key={i} room={room} roomMembers={this.props.roomMembers} members={this.props.members}/> )}
        <MemberFeed members={this.props.members} />
      </div>
    )
  }


}

export default RoomContainer
