import React from 'react'
import {connect} from 'react-redux'

class DetailView extends React.Component {
  render() {
    return (
      <div className="detail-view">
        <h2>DETAIL VIEW</h2>
      </div>
    )
  }
}

const mapStateToProps = ({assignment, room, community, user}) => {
  return {assignment, room, community, user }
}

export default connect(mapStateToProps)(DetailView)
