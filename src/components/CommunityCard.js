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
      <div id={community.id} onClick={this.selected} className="community-card">
        <h1 id={community.id} onClick={this.selected}>{community.name}</h1>
          <h3 id={community.id} onClick={this.selected}>{community.rooms.length} Rooms</h3>
          <h4 id={community.id} onClick={this.selected}>&</h4>
          <h3 id={community.id} onClick={this.selected}>{community.members.length} Members</h3>
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
