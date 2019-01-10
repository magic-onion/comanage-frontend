import React from 'react'
// import PerkContainer from './perkContainer'
import MemberInfo from './memberInfo'
import MemberCard from '../components/MemberCard'



class MemberContainer extends React.Component {

  render() {
    return (
      <div className="member-container">
        members container
        <MemberInfo/>
        <MemberCard member={this.props.member}/>
      </div>
    )
  }


}

export default MemberContainer
