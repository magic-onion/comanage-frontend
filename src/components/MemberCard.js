import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

class MemberCard extends React.Component {

  render() {
    return (

      <Card
      image='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent-lga3-1.xx&oh=7a5764b4dc35df391cd6b0f15f663db0&oe=5CCD40E9'
      header="A Member"
      meta='Status'
      description='stated datetime'
      extra="extra stuff"

      />
    )
  }

}

export default MemberCard
