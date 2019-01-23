import React, { Component } from 'react';
// import TodoMaker from './components/TodoMaker'
import Bgvid from './bgvid'
import CommunityMaker from './components/CommunityMaker'
import CommunitiesContainer from './containers/CommunitiesContainer'
import CommunityContainer from './containers/CommunityContainer'
import UserMaker from './components/UserMaker'
import DetailView from './components/DetailView'
import MemberDetailView from './components/MemberDetailView'
import NewMemberPasswordChanger from './components/MemberView/NewMemberPasswordChanger'
import MemberCommunityContainer from './components/MemberView/containers/MemberCommunityContainer'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import icon from './assets/Icon-pngs/comanage-logo.png'

import { getUser, logOut } from './actions/user'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import './containers.css'
import './components.css'
import './forms.css'
import './memberview.css'


class App extends Component {

  loggingOut = event => {
    localStorage.clear()
    this.props.logOut()
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getUser()
    }
  }

  get auth() {
    const {props: {isLoggedIn, selectedCommunity}} = this
    if (this.props.user) {
      switch (this.props.user.status) {
        case "newMember":
        return <NewMemberPasswordChanger user={this.props.user}/>
        case "manager":
        return (
          <div className="App">
            {isLoggedIn ?  <Logout loggingOut={this.loggingOut}/> : null}
            {isLoggedIn && !selectedCommunity ? <CommunitiesContainer/> : null }
            {isLoggedIn && selectedCommunity ? <CommunityContainer/> : null}
            {isLoggedIn && !selectedCommunity ? <CommunityMaker/> : null}
            {this.props.detail.toggled && this.props.detail.roomIsSelected ? <DetailView/> : null}
            {this.props.detail.toggled && this.props.detail.memberIsSelected ? <MemberDetailView /> : null}
          </div>
        )
        case "member":
        return (
        <div>
          <Logout loggingOut={this.loggingOut}/>
          <MemberCommunityContainer/>
        </div>
      )
        default:
        return <UserMaker/>
      }
    }
    else return <UserMaker />
  }

  render() {
    return (
      <div>
        {this.auth}
        <Bgvid/>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    user: state.user,
    isLoggedIn: state.user.isLoggedIn,
    communities: state.user.communities,
    selectedCommunity: state.user.selectedCommunity,
    detail: state.detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    logOut: () => dispatch(logOut())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// import NavigationContainer from './containers/NavigationContainer'
// import MemberContainer from './containers/memberContainer'
// import SidebarContainer from './containers/SidebarContainer'
// import RoomCard from './components/RoomCard'
// import { Route, Switch, Redirect } from 'react-router-dom'




// <img src={icon} alt={icon}></img>






// <img className="App-logo" src={icon} alt="logo"/>
