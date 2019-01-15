import React from 'react'
import CommunityCard from '../components/CommunityCard'
import { connect } from 'react-redux'


class CommunitiesContainer extends React.Component {

  render() {
    const {props: {communities}} = this
    return (
      <div className="communities-container">
      <p>Your Communities</p>
        <div>
          {communities !== undefined ? communities.map((comm, i) => <CommunityCard key = {i} community={comm}/>) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    communities: state.user.communities,
  }
}

export default connect(mapStateToProps)(CommunitiesContainer)
