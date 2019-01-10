import React from 'react'

const Logout = props => {
  console.log(props)
  return (
    <div className="logout-div">
      <button onClick={event => props.loggingOut(event)}>Logout</button>
    </div>
  )
}

export default Logout
