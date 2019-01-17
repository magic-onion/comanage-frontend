import React from 'react'
import { connect } from 'react-redux'

class MemberCommunityContainer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello Member
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

export default connect(mapStateToProps)(MemberCommunityContainer)
