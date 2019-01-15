import React from 'react'
import MemberCard from './MemberCard'
import { roomEditSubmit } from '../actions/detail'
import {connect} from 'react-redux'
import {getCommunity} from '../actions/community'

class DetailView extends React.Component {

  state = {
    toggleRommEditPane: this.props.detail.toggleRommEditPane,
    roomId: this.props.detail.currentRoom.id,
    roomName: this.props.detail.currentRoom.name,
    roomOccupancy: this.props.detail.currentRoom.occupancy
  }

  static getDerivedStateFromProps(props, state) {
    if (state.roomId !== props.detail.currentRoom.id) {
      return {...state, roomName: props.detail.currentRoom.name, roomOccupancy: props.detail.currentRoom.occupancy, roomId: props.detail.currentRoom.id}
    }
    return state
  }

  handleEditing = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  editRoom = event => {
    let toggleRommEditPane = !this.state.toggleRommEditPane
    this.setState({toggleRommEditPane})
  }

  roomEditSubmit = event => {
    event.preventDefault()
    let newRoomObj = {
      room: {
        id: this.props.detail.currentRoom.id,
        name: this.state.roomName,
        occupancy: this.state.roomOccupancy
      }
    }
    this.props.roomEditSubmit(newRoomObj, this.props.community.id)
    this.setState({toggleRommEditPane: false})
    // this.props.getCommunity(this.props.community.id)
  }

  getRoomDetails() {
    if (this.props.detail.roomIsSelected) {
      return (
        <div>
          <button onClick={this.editRoom}>Edit Room</button>
          {this.state.toggleRommEditPane ?
            <form onSubmit={this.roomEditSubmit}>
              <input onChange={this.handleEditing} type="text" name="roomName" value={this.state.roomName}/>
              <input onChange={this.handleEditing} type="number" name ="roomOccupancy" value={this.state.roomOccupancy}/>
              <button type="submit">save</button>
            </form> : null }
          <h3>{this.props.detail.currentRoom.name}</h3>
          <h4>Occupancy Limit: {this.props.detail.currentRoom.occupancy}</h4>
          <h5>current assignees:</h5>
          { this.props.detail.members.length ? this.props.detail.members.map((member, i) => <MemberCard member={member} rooms={this.props.community.rooms} key={i}/>) : null }
        </div>
      )
    }
    else return null
  }


  render() {
    console.log(this.props)
    return (
      <div className="detail-view">
        <h2>Detail View</h2>
        {this.getRoomDetails()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    roomEditSubmit: (roomObj, communityId) => dispatch(roomEditSubmit(roomObj, communityId)),
    getCommunity: selectedCommunity => dispatch(getCommunity(selectedCommunity))
  }
}

const mapStateToProps = ({assignment, room, community, user, detail}) => {
  return {assignment, room, community, user, detail }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView)
