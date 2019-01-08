import React from 'react'
import PerkContainer from './perkContainer'
import MemberInfo from './memberInfo'
import MemberCard from '../components/MemberCard'

class MemberContainer extends React.Component {

  render() {
    return (
      <div>
        members container
        <MemberInfo/>
        <PerkContainer />
        <MemberCard />
      </div>
    )
  }


}

export default MemberContainer
