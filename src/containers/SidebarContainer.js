import React from 'react'

import { Sidebar, Menu } from 'semantic-ui-react'


class SidebarContainer extends React.Component {


  render() {
      return (
        <Sidebar as={Menu} animation="overlay" icon="labeled" direction="right" inverted vertical visible width='thin'>
          <Menu.Item as='a'>
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            Community
          </Menu.Item>
          <Menu.Item as='a'>
            Rooms
          </Menu.Item>
          <Menu.Item as='a'>
            Members
          </Menu.Item>
          </Sidebar>
      )
  }
}

export default SidebarContainer
