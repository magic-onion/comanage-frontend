import React from 'react'
import { connect } from 'react-redux'
import { toggleFriendView } from '../../../actions/member'

class FriendCard extends React.Component {


  showFriendDetails = event => {
    this.props.toggleFriendView()
  }



  render() {
    return (
      <div className="friend-card">
        <h2>{this.props.member.username}</h2>
        <button onClick={this.showFriendDetails}>details</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memberView: state.memberView
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFriendView: () => dispatch(toggleFriendView())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendCard)
