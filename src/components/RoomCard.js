import React from 'react'
// import RoomMaker from './RoomMaker'
import RoomEditor from './RoomEditor'
import RoomDetails from './RoomDetails'

class RoomCard extends React.Component {
  state = {
    edit: false,
    details: false
  }

  handleEdit = event => {
    let edit = !this.state.edit
    this.setState({edit})
  }

  handleDetails = event => {
    let details = !this.state.details
    this.setState({details}, ()=>console.log(this.state.details))
  }

  render() {
    console.log(this.props.room)
    const {props: {room}} = this
    return (
      <div className="room-card">
        <span><h3>{room.name}</h3></span>
        <h4>Current Members: </h4>
        <span>
          <button onClick={this.handleEdit}>{this.state.edit ? "Hide" : "Edit"}</button>
          <button onClick={this.handleDetails}>Details</button>
        </span>
        {this.state.edit ? <RoomEditor /> : null}
        {this.state.details ?  <RoomDetails room={room}/> : null}
      </div>
    )
  }

}

export default RoomCard
