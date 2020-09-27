import React from "react";
import TodoList from "./ToDoList";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handleNext(temp) {
    this.props.navStatus(temp);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }
  render() {
    if (this.props.screenState.signUpScreen) {
      return (
        <SignUp
          windowWidth={this.state.windowWidth}
          next={this.handleNext}
          screenState={this.props.screenState}
        ></SignUp>
      );
    } else if (this.props.screenState.logInScreen) {
      return (
        <LogIn
          windowWidth={this.state.windowWidth}
          next={this.handleNext}
        ></LogIn>
      );
    } else {
      return <TodoList windowWidth={this.state.windowWidth}></TodoList>;
    }
  }
}

export default Nav;
