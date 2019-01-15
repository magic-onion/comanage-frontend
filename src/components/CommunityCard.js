import React from 'react'
import { connect } from 'react-redux'

// import MemberContainer from './memberContainer'
// import RoomMaker from '../components/RoomMaker'


class CommunityCard extends React.Component {
  
  selected = event => {
    this.props.dispatch({ type: "SELECT_COMMUNITY", payload: event.target.id})
  }

  render() {
    const {props: {community}} = this
    return(
      <div className="community-container">
        <h1>{community.name}</h1>
        <ul>
          <li> Date Created: {community.start_date}</li>
          <li> Rooms: {community.rooms.length}</li>
          <li> Members: {community.members.length}</li>
        </ul>
        <button id={community.id} onClick={this.selected}>Select</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    communityToShow: state.community
  }
}

export default connect(mapStateToProps)(CommunityCard)
