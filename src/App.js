import React, { Component } from 'react';
import CommunityMaker from './components/CommunityMaker'
import CommunitiesContainer from './containers/CommunitiesContainer'
import CommunityContainer from './containers/CommunityContainer'
import UserMaker from './components/UserMaker'
import DetailView from './components/DetailView'
import MemberDetailView from './components/MemberDetailView'
import NewMemberPasswordChanger from './components/memberViewComponents/NewMemberPasswordChanger'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import icon from './assets/Icon-pngs/comanage-logo.png'
import { getUser, logOut } from './actions/user'
import './App.css';

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
            {isLoggedIn ?  <button onClick={this.loggingOut}>logout</button> : null}
            <img className="App-logo" src={icon} alt="logo"/>
            <h1>Death is not the greatest loss in life. The greatest loss is what dies inside us while we live</h1>
            {this.props.detail.toggled && this.props.detail.roomIsSelected ? <DetailView/> : null}
            {this.props.detail.toggled && this.props.detail.memberIsSelected ? <MemberDetailView /> : null}
            {isLoggedIn ? <CommunityMaker/> : null}
            {isLoggedIn && !selectedCommunity ? <CommunitiesContainer/> : null }
            {isLoggedIn && selectedCommunity ? <CommunityContainer/> : null}
          </div>
        )
        case "member":
        return <button onClick={this.loggingOut}>logout</button>
        default:
        return <UserMaker/>
      }
    }
  }

  render() {
    console.log(this.auth)
    return (
      <div>
        {this.auth}
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
