import React from 'react'
import MemberDetailCard from './MemberDetailCard'
import { roomEditSubmit } from '../actions/detail'
import {connect} from 'react-redux'
import {getCommunity} from '../actions/community'
import { icons } from '../containers/MemberContainer'

class MemberDetailView extends React.Component {

  state = {
    memberId: this.props.detail.currentMember.id,
    memberName: this.props.detail.currentMember.name,
    memberBio: this.props.detail.currentMember.bio,
    memberRooms: this.props.detail.rooms
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

  getMemberDetails() {
    if (this.props.detail.memberIsSelected) {
      return (
        <div>
          {this.props.detail.currentMember.name}
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
        {this.getMemberDetails()}
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

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailView)
