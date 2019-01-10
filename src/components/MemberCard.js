import React from 'react'

import { Card} from 'semantic-ui-react'

class MemberCard extends React.Component {

  render() {
    return (

      <Card
      image='/Users/atru/fis-labs/comanage/comanage-frontend/src/assets/Icon-pngs/member-icon-0.png'
      header="A Member"
      meta='Status'
      description='stated datetime'
      extra={<button>Edit/Assign</button>}

      />
    )
  }

}

export default MemberCard
