import React from 'react'

const Logout = props => {
  return (
    <div className="logout-div">
      <button onClick={props.loggingOut}>Logout</button>
    </div>
  )
}

export default Logout
