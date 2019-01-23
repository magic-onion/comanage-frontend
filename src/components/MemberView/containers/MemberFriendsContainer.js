import React from 'react'
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'

class MemberFriendsContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="member-friends-container">
        {this.props.community.members.map((member, i) => <FriendCard key={i} member={member} roomusers={this.props.community.roomusers} rooms={this.props.rooms}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

export default connect(mapStateToProps)(MemberFriendsContainer)
