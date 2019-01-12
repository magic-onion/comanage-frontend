import React from 'react'

class MemberFeedItem extends React.Component {
  render() {
    return <h1>{this.props.member.name}</h1>
  }
}

export default MemberFeedItem
