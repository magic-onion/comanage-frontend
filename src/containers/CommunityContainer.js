import React from 'react'
import { connect } from 'react-redux'

class CommunityContainer extends React.Component {
  render() {
    const {props: {community}} = this
    return(
      <div>
        <p>Name: {community.communityName}</p>
        <p>Rooms {community.rooms}</p>
        <p>Members: {community.members}</p>
      </div>
    )
  }
}
const mapStateToProps = ({community}) => {
  return { community }
}

export default connect(mapStateToProps)(CommunityContainer)
