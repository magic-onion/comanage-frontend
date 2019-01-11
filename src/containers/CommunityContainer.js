import React from 'react'
import MemberContainer from './memberContainer'
// import RoomMaker from '../components/RoomMaker'
import RoomCard from '../components/RoomCard'
import MemberCard from '../components/MemberCard'
import { connect } from 'react-redux'


class CommunityContainer extends React.Component {
  constructor(props) {
    super(props)
    this.things = null
  }

  render() {
    const {props: {community}} = this
    console.log(community)
    return(
      <div className="community-container">
        <h1>{community.name}</h1>
        <ul>
          <li> Date Created: {community.start_date}</li>
          <li> Rooms: {community.rooms.length}</li>
          <li> Members: {community.members.length}</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({user}) => {
  return { user }
}

export default connect(mapStateToProps)(CommunityContainer)
