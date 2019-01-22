import React from 'react'
// import MemberDetailCard from './MemberDetailCard'
import { roomEditSubmit } from '../actions/detail'
import { memberEditSubmit } from '../actions/detail'

import {connect} from 'react-redux'
import {getCommunity} from '../actions/community'

// import { icons } from '../containers/MemberContainer'

class MemberDetailView extends React.Component {

  state = {
    toggleEdit: false,
    memberId: this.props.detail.currentMember.id,
    memberName: this.props.detail.currentMember.username,
    memberBio: this.props.detail.currentMember.bio,
    memberRooms: this.props.detail.rooms
  }

  static getDerivedStateFromProps(props, state) {
    if (state.memberId !== props.detail.currentMember.id) {
      return {...state, memberName: props.detail.currentMember.name, memberBio: props.detail.currentMember.bio, memberId: props.detail.currentMember.id}
    }
    return state
  }

  handleEditing = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  editMember = event => {
    let toggleEdit = !this.state.toggleEdit
    this.setState({toggleEdit})
  }

  memberEditSubmit = event => {
    event.preventDefault()
    console.log("ay")
    let newMemberObj = {
      user: {
        id: this.state.memberId,
        username: this.state.memberName,
      }
    }
    this.props.memberEditSubmit(newMemberObj, this.props.community.id)
    this.setState({toggleRommEditPane: false})
    // this.props.getCommunity(this.props.community.id)
  }

  getMemberDetails() {
    if (this.props.detail.memberIsSelected) {
      return (
        <div className="member-detail-view-details">
          { this.state.toggleEdit ?
              <form onSubmit={this.memberEditSubmit}>
                <input onChange={this.handleEditing} name="memberName" type="text" value={this.state.memberName}/>
                <button type="submit">Save</button>
                </form>
            : null }
          <button onClick={this.editMember}>Edit</button>
          <h3>{this.props.detail.currentMember.username}</h3>
          <h4>{this.props.detail.currentMember.bio}</h4>
          <p>Currently Assigned To:</p>
          {this.props.detail.rooms.map((room, i )=> <span key={i} className="rooms-in-member-detail">{room.name}</span> )}

        </div>
      )
    }
    else return null
  }


  render() {
    console.log(this.props)
    return (
      <div className="member-detail-view">
        <h2>Detail View</h2>
        {this.getMemberDetails()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    roomEditSubmit: (roomObj, communityId) => dispatch(roomEditSubmit(roomObj, communityId)),
    getCommunity: selectedCommunity => dispatch(getCommunity(selectedCommunity)),
    memberEditSubmit: (memberObj, communityId) => dispatch(memberEditSubmit(memberObj, communityId))
  }
}

const mapStateToProps = ({assignment, room, community, user, detail}) => {
  return {assignment, room, community, user, detail }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailView)
