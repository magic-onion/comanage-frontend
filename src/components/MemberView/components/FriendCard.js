import React from 'react'
import { connect } from 'react-redux'
import { toggleFriendView } from '../../../actions/member'
import { getMemberViewDetails } from '../../../actions/member'

class FriendCard extends React.Component {


  showFriendDetails = event => {
    // this.props.toggleFriendView()
    this.props.getMemberViewDetails(event.target.id)
  }



  render() {
    return (
      <div id={this.props.member.id} onClick={this.showFriendDetails} className="friend-card">
        <h2 id={this.props.member.id} onClick={this.showFriendDetails}>{this.props.member.username}</h2>
        <h3 id={this.props.member.id} onClick={this.showFriendDetails}>{this.props.member.bio}</h3>
        <img alt={this.props.member.name} id={this.props.member.id} onClick={this.showFriendDetails} src={require(`../../../assets/Icon-pngs/${this.props.member.image}.png`)}></img>
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
    toggleFriendView: () => dispatch(toggleFriendView()),
    getMemberViewDetails: id => dispatch(getMemberViewDetails(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendCard)
