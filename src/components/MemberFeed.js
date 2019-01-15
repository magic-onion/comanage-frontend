import React from 'react'
import MemberFeedItem from './MemberFeedItem'

class MemberFeed extends React.Component {
  render() {
    return (
      <div>
        <button>CLICK TO ASSIGN</button>
        <h3>Members in this Community</h3>
        {this.props.members.map((member, i) => <MemberFeedItem key={i} member={member}/>)}
      </div>
    )
  }
}

export default MemberFeed
