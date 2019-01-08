import React from 'react'
import PerkContainer from './perkContainer'
import MemberInfo from './memberInfo'

class MemberContainer extends React.Component {

  render() {
    return (
      <div>
        members container
        <MemberInfo/>
        <PerkContainer />
      </div>
    )
  }


}

export default MemberContainer
