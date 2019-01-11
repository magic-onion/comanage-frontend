import React from 'react'
// import MemberContainer from './memberContainer'
// import RoomMaker from '../components/RoomMaker'
import { connect } from 'react-redux'


class CommunityCard extends React.Component {
  constructor(props) {
    super(props)
    this.things = null
  }

  selected = event => {
    this.props.dispatch({ type: "SELECT_COMMUNITY", payload: event.target.name})
  }

  render() {
    const {props: {community}} = this
    console.log(this.props)
    return(
      <div className="community-container">
        <h1>{community.name}</h1>
        <ul>
          <li> Date Created: {community.start_date}</li>
          <li> Rooms: {community.rooms.length}</li>
          <li> Members: {community.members.length}</li>
        </ul>
        <button name={community.id} onClick={this.selected}>Select</button>
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
