import React from 'react'

class FriendCard extends React.Component {





  render() {
    return (
      <div className="friend-card">
        <h2>{this.props.member.username}</h2>
        <button>details</button>
      </div>
    )
  }
}

export default FriendCard
