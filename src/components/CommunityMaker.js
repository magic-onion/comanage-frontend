import React from 'react'
import { connect } from 'react-redux'
import store from '../index.js'

  const init = {
    name: "",
    roomamount: 0,
    memberamount: 0,
    start_date: ""
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
    this.props.dispatch({type: "CREATE_COMMUNITY", payload: this.state})
    this.setState({name: init.name, roomamount: init.roomamount, memberamount: init.memberamount})
    const communityBody = {
      community: store.getState().community
    }
    console.log(communityBody)
    const config = {
      method: "POST",
      headers: {
        "Authorization": `bearer ${localStorage.token}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(communityBody)
    }
    console.log(config)
    fetch('http://localhost:3000/api/v1/communities', config).then(r=>r.json()).then(p=>{
      console.log(p.community)
      this.props.dispatch({
        type: 'SAVED_COMMUNITY',
        payload: {
          rooms: p.rooms,
          members: p.members
        }
      })
      if (this.props.user.communities === undefined) {
        this.props.dispatch({type:"MAKE_FIRST_COMMUNITY", payload: p.community})
      }
    })
  }

  render() {
    return (
      <form className="community-maker" onSubmit={this.handleSubmit} >
        <p>Community Name</p>
        <input onChange={this.handleChange} name="name" type="text" placeholder="Community Name" value={this.state.name}/>
          <p>roomamount</p>
        <input onChange={this.handleChange} name="roomamount" type="number" placeholder="Rooms" value={this.state.roomamount}/>
          <p>memberamount</p>
        <input onChange={this.handleChange} name="memberamount" type="number" placeholder="Members" value={this.state.memberamount}/>
        <button type="submit">Make the Community</button>
      </form>
    )
  }
}

const mapStateToProps = ({community, user}) => {
  return { community, user }
}

export default connect(mapStateToProps)(CommunityMaker)
