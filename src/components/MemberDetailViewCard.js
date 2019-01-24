import React from 'react'
import { getMemberDetails } from '../actions/detail'
import { connect } from 'react-redux'


class MemberDetailViewCard extends React.Component {

  state = {
    assigning: false,
    detailView: false
  }

  showMemberDetails = event => {
    this.props.getMemberDetails(this.props.member.id)
  }

  render() {
    return (
      <div className="member-room-detail-card" onClick={this.showMemberDetails}>
        <h1>{this.props.member.username}</h1>
        <img src={require(`../assets/Icon-pngs/${this.props.member.image}.png`)} alt={this.props.member.username}></img>
        <h3>{this.props.member.bio}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    assignment: state.assignment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMemberDetails: id => dispatch(getMemberDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailViewCard)

// <img src={this.props.member.image} alt={this.props.member.name}/>
