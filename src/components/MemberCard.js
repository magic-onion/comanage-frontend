import React from 'react'
import { getMemberDetails } from '../actions/detail'
import { connect } from 'react-redux'


class MemberCard extends React.Component {

  state = {
    assigning: false,
    detailView: false
  }

  showMemberDetails = event => {
    this.props.getMemberDetails(this.props.member.id)
  }

  render() {
    return (
      <div className="member-card">
        <h1>{this.props.member.username}</h1>
        <h3>"some bio stuff"</h3>
        <button name="detailView" onClick={this.showMemberDetails}>details</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MemberCard)

// <img src={this.props.member.image} alt={this.props.member.name}/>
