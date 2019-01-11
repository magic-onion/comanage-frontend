import React from 'react'
import { Card} from 'semantic-ui-react'

class MemberCard extends React.Component {

  render() {
    return (

      <Card
      className="member-card"
      image={this.props.icon}
      header={this.props.member.name}
      meta='Status'
      description='stated datetime'
      extra={<button>Edit/Assign</button>}

      />
    )
  }

}

export default MemberCard
