import React from 'react'
import RoomCard from '../components/RoomCard'

class RoomContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <h2>ROOM CONTAINER</h2>
        {this.props.rooms.map((room, i) => <RoomCard key={i} room={room} /> )}
      </div>
    )
  }


}

export default RoomContainer
