import React from 'react'

class MemberFeedItem extends React.Component {
  render() {
    return <h3 className="feed-item">{this.props.member.username}</h3>
  }
}

export default MemberFeedItem
