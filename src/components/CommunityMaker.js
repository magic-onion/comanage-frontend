import React from 'react'
import { connect } from 'react-redux'
import { createCommunity } from '../actions/community'

  const init = {
    name: "",
    roomamount: 0,
    memberamount: 0,
  }

class CommunityMaker extends React.Component {

  state= init

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let communityObj = {
      community: this.state
    }
    this.props.createCommunity(communityObj)
  }

  render() {
    return (
      <form className="community-maker" onSubmit={this.handleSubmit} >
        <p>Community Name</p>
        <input className="community-maker-input" onChange={this.handleChange} name="name" type="text" placeholder="Community Name" value={this.state.name}/>
          <p>No. of Rooms</p>
        <input className="community-maker-input" onChange={this.handleChange} name="roomamount" type="number" placeholder="Rooms" value={this.state.roomamount}/>
          <p>No. of Members</p>
        <input className="community-maker-input" onChange={this.handleChange} name="memberamount" type="number" placeholder="Members" value={this.state.memberamount}/>
        <button className="community-maker-button" type="submit">Make the Community</button>
      </form>
    )
  }
}

const mapStateToProps = ({community, user}) => {
  return { community, user }
}

const mapDispatchToProps = dispatch => {
  return {
    createCommunity: communityObj => dispatch(createCommunity(communityObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityMaker)
