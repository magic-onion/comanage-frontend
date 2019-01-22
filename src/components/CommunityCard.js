import React from 'react'
import { connect } from 'react-redux'
import {selectCommunity} from '../actions/community'

// import MemberContainer from './memberContainer'
// import RoomMaker from '../components/RoomMaker'


class CommunityCard extends React.Component {

  selected = event => {
    this.props.selectCommunity(event.target.id)
  }

  render() {
    const {props: {community}} = this
    return(
      <div className="community-card">
        <h1>{community.name}</h1>
          <h3>{community.rooms.length} Rooms</h3>
          <h4>&</h4>
          <h3>{community.members.length} Members</h3>
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

const mapDispatchToProps = dispatch => {
  return {
    selectCommunity: id => dispatch(selectCommunity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityCard)
