import React from 'react'
import CommunityContainer from './CommunityContainer'
import { connect } from 'react-redux'


class CommunitiesContainer extends React.Component {

  render() {
    const {props: {communities}} = this
    console.log(this.props.communities)
    return (
      <div className="communities-container">
      <p>hello</p>
        <div>
          {communities.map((comm, i) => <CommunityContainer key = {i} community={comm}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    communities: state.user.communities
  }
}

export default connect(mapStateToProps)(CommunitiesContainer)
