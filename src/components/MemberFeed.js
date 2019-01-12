import React from 'react'
import MemberFeedItem from './MemberFeedItem'

class MemberFeed extends React.Component {
  render() {
    return (
      <div>
        {this.props.members.map((member, i) => <MemberFeedItem key={i} member={member}/>)}
      </div>
    )
  }
}

export default MemberFeed
