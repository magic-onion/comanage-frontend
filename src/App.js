import React, { Component } from 'react';
import CommunityMaker from './components/CommunityMaker'
import CommunitiesContainer from './containers/CommunitiesContainer'
import CommunityContainer from './containers/CommunityContainer'
import UserMaker from './components/UserMaker'
import DetailView from './components/DetailView'
import MemberDetailView from './components/MemberDetailView'
import NewMemberPasswordChanger from './components/NewMemberPasswordChanger'
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
    if (this.props.user && this.props.user.status === "newMember") {
      return true
    }
    else if (this.props.user && this.props.user.status === "manager") {
      return false
    }
  }


  get newUserAuth() {
    return(
      <NewMemberPasswordChanger user={this.props.user}/>
    )
  }

  get managerAuth() {
    const {props: {isLoggedIn, selectedCommunity}} = this
      return (
        <div className="App">
        {isLoggedIn ?  <button onClick={this.loggingOut}>logout</button> : null}
        <img className="App-logo" src={icon} alt="logo"/>
        <h1>CoMicroManage</h1>
        {this.props.detail.toggled && this.props.detail.roomIsSelected ? <DetailView/> : null}
        {this.props.detail.toggled && this.props.detail.memberIsSelected ? <MemberDetailView /> : null}
        {isLoggedIn ? <CommunityMaker/> : null}
        {isLoggedIn && !selectedCommunity ? <CommunitiesContainer/> : null }
        {isLoggedIn && selectedCommunity ? <CommunityContainer/> : null}
        </div>
      )
    }

  render() {
    console.log(this.auth)
    return (
      <div>
        {this.props.isLoggedIn ? null: <UserMaker/> }
        {this.auth ? this.newUserAuth : this.managerAuth }
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
