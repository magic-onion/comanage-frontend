import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => {
  return {
    memberView: state.memberView
  }
}

export default connect(mapStateToProps)(FriendCard)
