import React from 'react'
import { connect } from 'react-redux'
import MemberContainer from './MemberContainer'
import RoomContainer from './RoomContainer'
import { getCommunity } from '../actions/community'
import store from '../index'

class CommunityContainer extends React.Component {

  componentDidMount() {
    this.props.getCommunity(store.getState().user.selectedCommunity)
  }

  render() {
    console.log(this.props.community)
    const {props: {community: {name, start_date, rooms, members, roomMembers}}} = this
    return (
      <div className="community-container">
        <p>{name}, created: {start_date}</p>
        <RoomContainer/>
        <MemberContainer members={members} rooms={rooms} roomMembers={roomMembers}/>
      </div>
    )
  }
}

const mapStateToProps = ({user, community}) => ({ user, community})

const mapDispatchToProps = dispatch => {
  return {
    getCommunity: id => dispatch(getCommunity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)
