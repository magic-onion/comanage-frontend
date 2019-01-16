import React from 'react'
// import PerkContainer from './perkContainer'
// import MemberInfo from './memberInfo'
import {connect} from 'react-redux'
import { createNewMember } from '../actions/member'
import MemberCard from '../components/MemberCard'

const init = {
  toggleCreator: false,
  name: "name",
  bio: "bio"
}

class MemberContainer extends React.Component {

  state = init
  newMemberInput = event => this.setState({[event.target.name]: event.target.value})

  toggleCreator = event => {
    let toggleCreator = !this.state.toggleCreator
    this.setState({toggleCreator})
  }

  createMember = event => {
    event.preventDefault()
    let memberBody = {
      member: {
        name: this.state.name,
        bio: this.state.bio,
        communityId: this.props.community.id
      }
    }
    this.props.createNewMember(memberBody)
    this.setState({toggleCreator: init.toggleCreator, name: init.name, bio: init.bio, })
  }

  get createMemberForm() {
    return (
        <form onSubmit={this.createMember}>
          <input onChange={this.newMemberInput} type="text" name="name" value={this.state.name} />
          <input onChange={this.newMemberInput} type="text" name="bio" value={this.state.bio}/>
          <button>create</button>
        </form>
    )
  }

  render() {
    console.log(this.props )
    return (
      <div className="member-container">
        <button onClick={this.toggleCreator}>Add a Member</button>
        {this.state.toggleCreator ? this.createMemberForm : null}
        {this.props.community.members.map((member, i) => <MemberCard key={i} roomMembers={this.props.community.roomMembers} rooms={this.props.community.rooms} member={member}/> )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    community: state.community
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewMember: obj => dispatch(createNewMember(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer)
