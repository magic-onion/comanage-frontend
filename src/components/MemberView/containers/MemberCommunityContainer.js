import React from 'react'
import MemberRoomContainer from './MemberRoomContainer'
import MemberFriendsContainer from './MemberFriendsContainer'
import { connect } from 'react-redux'

class MemberCommunityContainer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <MemberRoomContainer/>
        <MemberFriendsContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

export default connect(mapStateToProps)(MemberCommunityContainer)
