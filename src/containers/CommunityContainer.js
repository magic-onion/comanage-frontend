import React from 'react'
import { connect } from 'react-redux'
import MemberContainer from './MemberContainer'
import RoomContainer from './RoomContainer'
// import { Router, Route, Link } from 'react-router-dom'
import { getCommunity } from '../actions/community'
import store from '../index'

class CommunityContainer extends React.Component {

  componentDidMount() {
    this.props.getCommunity(store.getState().user.selectedCommunity)
  }

  render() {
    const {props: {community: {name}}} = this
    return (
      <div className="community-container">
        <p>{name}</p>
        <MemberContainer />
        <RoomContainer />
      </div>
    )
  }
}

const mapStateToProps = ({user, community}) => ({ user, community})

const mapDispatchToProps = dispatch => {
  return {
    getCommunity: id => dispatch(getCommunity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)
