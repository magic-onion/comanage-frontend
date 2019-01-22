import React from 'react'

class MemberFeedItem extends React.Component {
  render() {
    return (
      <div onClick={this.props.toggleAssignment} className="feed-item">
      <h3 onClick={this.props.toggleAssignment}>{this.props.member.username}</h3>
      </div>
    )
  }
}

export default MemberFeedItem
