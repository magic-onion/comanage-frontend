import React from 'react'

class MemberRoomAssigner extends React.Component {
  render() {
    console.log(this.props)
    return (
      <>
        <select>
          {this.props.rooms.map((room, i) => <option key={i} value={room.id}>{room.name}</option> )}

        </select>
        <button type="submit">add</button>
      </>
    )
  }
}

export default MemberRoomAssigner
