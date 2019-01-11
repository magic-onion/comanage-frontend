import React from 'react'
// import PerkContainer from './perkContainer'
// import MemberInfo from './memberInfo'
import MemberCard from '../components/MemberCard'
import icon0 from '../assets/Icon-pngs/member-icon-0.png'
import icon1 from '../assets/Icon-pngs/member-icon-1.png'
import icon2 from '../assets/Icon-pngs/member-icon-2.png'
import icon3 from '../assets/Icon-pngs/member-icon-3.png'
import icon4 from '../assets/Icon-pngs/member-icon-4.png'
import icon5 from '../assets/Icon-pngs/member-icon-5.png'
import icon6 from '../assets/Icon-pngs/member-icon-6.png'
import icon7 from '../assets/Icon-pngs/member-icon-7.png'
import icon8 from '../assets/Icon-pngs/member-icon-8.png'
import icon9 from '../assets/Icon-pngs/member-icon-9.png'
import icon10 from '../assets/Icon-pngs/member-icon-10.png'
import icon11 from '../assets/Icon-pngs/member-icon-11.png'
import icon12 from '../assets/Icon-pngs/member-icon-16.png'
import icon13 from '../assets/Icon-pngs/member-icon-13.png'
import icon14 from '../assets/Icon-pngs/member-icon-14.png'
import icon15 from '../assets/Icon-pngs/member-icon-15.png'

const icons = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15]
const rand = Math.floor(Math.random() * 15)
const icon = icons[rand]


class MemberContainer extends React.Component {

  render() {
    return (
      <div className="member-container">
        members container
        {this.props.members.map((member, i) => <MemberCard key={i} member={member} icon={icons[Math.floor(Math.random() * 15)]}/> )}
      </div>
    )
  }


}

export default MemberContainer
