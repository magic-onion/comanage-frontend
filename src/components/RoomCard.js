import React from 'react'
import RoomMaker from './RoomMaker'
import RoomEditor from './RoomEditor'

class RoomCard extends React.Component {
  state = {
    edit: false
  }

  handleEdit =  event => {
    let edit = !this.state.edit
    this.setState({edit})
  }


  render() {
    return (
      <div className="room-card">
        <span><h3>Room Name: </h3></span>
        <h4>Current Members: </h4>
        <span>
          <button onClick={this.handleEdit}>{this.state.edit ? "Hide" : "Edit"}</button>
          <button>Details</button>
        </span>
        {this.state.edit ? <RoomEditor /> : null}
      </div>
    )
  }

}

export default RoomCard
