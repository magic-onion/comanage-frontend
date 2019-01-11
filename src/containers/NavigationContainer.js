import React from 'react'

import {Menu} from 'semantic-ui-react'

export default class NavigationContainer extends React.Component {


  render() {
    return (
      <Menu className="ui pointing menu">
      <Menu.Item name="home" />
      <Menu.Item name="rooms" />
      <Menu.Item name="members" />
      <Menu.Item name="skate or die" />
      </Menu>
    )
  }


}
