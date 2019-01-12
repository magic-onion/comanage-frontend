import React from 'react'

const RoomDetails = props => {
  return (
    <div>
      <ul>
        {props.members.length ? props.members.map((member, i) => <li key={i}>{member.name}</li>) : <p>no recent members here!</p>}
      </ul>
    </div>
  )
}

export default RoomDetails
