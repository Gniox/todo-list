import React from "react";
import Nav from "./Nav";
import Burger from "./Burger/Burger";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
      signup: false,
      signUpScreen: true,
      logIn: false,
      logInScreen: false,
      logOffScreen: false,
    };
    this.navStatus = this.navStatus.bind(this);
  }
  navStatus(object) {
    if (object != null) {
      if (this.state.first) {
        this.setState({
          signUp:
            object.signUp === undefined ? this.state.signUp : object.signUp,
          signUpScreen:
            object.signUpScreen === undefined
              ? this.state.signUpScreen
              : object.signUpScreen,
          logIn: object.logIn === undefined ? this.state.logIn : object.logIn,
          logInScreen:
            object.logInScreen === undefined
              ? this.state.logInScreen
              : object.logInScreen,
          logOffScreen:
            object.logOffScreen === undefined
              ? this.state.logOffScreen
              : object.logOffScreen,
          first: object.first === undefined ? this.state.first : object.first,
        });
      } else {
        this.setState({
          signUp:
            object.signUp === undefined ? this.state.signUp : object.signUp,
          signUpScreen:
            object.signUpScreen === undefined
              ? this.state.signUpScreen
              : object.signUpScreen,
          logIn: object.logIn === undefined ? this.state.logIn : object.logIn,
          logInScreen:
            object.logInScreen === undefined
              ? this.state.logInScreen
              : object.logInScreen,
          logOffScreen:
            object.logOffScreen === undefined
              ? this.state.logOffScreen
              : object.logOffScreen,
        });
      }
    }
    // console.log(this.state.logIn);
  }
  render() {
    var todoListContainer = {
      display: "flex",
      // marginBottom: "auto",
      // justifyItems: 'center',
      // alignItems: 'center',
      width: "75%",
      // maxHeight: "85vh",
      height: "85vh",
      borderRadius: 20,
      backgroundColor:
        this.state.signUpScreen ||
        this.state.logInScreen ||
        this.state.logOffScreen
          ? "transparent"
          : "#e8c090",
      // justifyItems: 'center',
    };
    if (this.state.first) {
      return (
        <div style={todoListContainer}>
          <Nav screenState={this.state} navStatus={this.navStatus}></Nav>
        </div>
      );
    } else {
      console.log("In Container: " + this.state.logIn);
      return (
        <div style={todoListContainer}>
          <Burger onClick={this.navStatus} screenState={this.state}></Burger>
          <Nav screenState={this.state} navStatus={this.navStatus}></Nav>
        </div>
      );
    }
  }
}
