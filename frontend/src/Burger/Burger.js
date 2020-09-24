import React from "react";
import { StyledBurger } from "./Burger.styled";

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.signUp = this.signUp.bind(this);
  }
  signUp() {
    let temp;
    if (
      this.props.screenState.signUpScreen ||
      this.props.screenState.logInScreen
    ) {
      temp = { signUpScreen: false, logInScreen: false };
    } else {
      temp = { signUp: false, signUpScreen: true };
    }
    this.setState({ open: !this.state.open });
    this.props.onClick(temp);
  }
  render() {
    return (
      <StyledBurger open={this.state.open} onClick={this.signUp}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  }
}
