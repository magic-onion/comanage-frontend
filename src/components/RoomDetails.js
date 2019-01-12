import React from 'react'

const RoomDetails = props => {
  return (
    <div>
      <ul>
        {props.members.map((member, i) => <li>{member.name}</li>)}
      </ul>
    </div>
  )
}

export default RoomDetails
