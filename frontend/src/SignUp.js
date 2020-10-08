import React from "react";

let user_requests = require('./requests/user_requests');

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.signedUp = this.signedUp.bind(this);
    this.skipSignUp = this.skipSignUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  componentdidMount = async () => {
    let token = localStorage.getItem("@user");
    console.log("component");
    if (token !== null) {
      let temp;
      temp = {
        signUp: false,
        signUpScreen: false,
        logIn: true,
        logInScreen: false,
        first: false,
      };
      console.log("Logged On");
      this.props.next(temp);
    }
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        this.setState({ username: value });
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        this.setState({ email: value });
        errors.email = this.validateEmail(value) ? "" : "Email is not valid!";
        break;
      case "password":
        this.setState({ password: value });
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ [name]: value }, () => {
      console.log(errors);
    });
  };
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  signedUp() {
    let temp;

    user_requests.signUp(this.state.username, this.state.email, this.state.password);

    temp = {
      signUp: true,
      signUpScreen: false,
      logIn: false,
      logInScreen: false,
      first: false,
    };
    console.log("signed up");
    this.props.next(temp);
  }
  skipSignUp() {
    let temp;

    temp = {
      signUp: false,
      signUpScreen: false,
      logIn: false,
      logInScreen: false,
      first: false,
    };
    this.props.next(temp);
  }
  logIn() {
    let temp;
    if (this.props.screenState.first)
      temp = {
        signUp: false,
        signUpScreen: false,
        logIn: false,
        logInScreen: true,
        first: true,
      };
    else
      temp = {
        signUp: false,
        signUpScreen: false,
        logIn: false,
        logInScreen: true,
      };
    console.log("yoyoyo");
    this.props.next(temp);
  }
  render() {
    const width = this.props.windowWidth;

    const smaller = width < 600;

    var container = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: '20%',
      // width: "20%",
      margin: "0 auto",
      // padding: "60"
    };
    var formStyle = {
      // display: "flex",
      // alignItems: "center",
      width: smaller ? "80%" : "40%",
      // height: "80%",
      background: "#eb5e8d",
      padding: 20,
      // justifyContent: "center"
      // margin: "0 auto",
      // maxWidth: "360"
    };
    var inputStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      // marginRight: "auto",
      // marginLeft: "auto",
      // marginRight: 20,
      boxSizing: "border-box",
      marginBottom: 10,
      marginTop: 10,
      width: "100%",
      // height: "auto",
      // marginTop: 20,
      borderColor: "transparent",
      // borderRadius: 20
    };
    var buttonStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      // height: "auto",
      width: "100%",
      marginTop: 10,
      borderColor: "transparent",
      backgroundColor: "violet",
      cursor: "pointer",
      // alignSelf: "center"
      // borderRadius: 20
    };
    var headerStyle = {
      padding: 10,
      textAlign: "center",
      background: "#68609e",
      marginBottom: 10,
    };
    var skipButtonStyle = {
      background: "transparent",
      // width: "100%",
      borderColor: "transparent",
      marginTop: 10,
      cursor: "pointer",
    };
    var logInButtonStyle = {
      background: "transparent",
      // width: "100%",
      borderColor: "transparent",
      marginTop: 10,
      cursor: "pointer",
      // justifyContent: "flex-end"
    };
    var buttonContainer = {
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <div style={container}>
        <form style={formStyle} onSubmit={this.signedUp}>
          <h1 style={headerStyle}>Sign Up</h1>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            name="name"
            style={inputStyle}
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            style={inputStyle}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            style={inputStyle}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button style={buttonStyle}>Sign Up</button>
          <div style={buttonContainer}>
            <button style={skipButtonStyle} onClick={this.skipSignUp}>
              Skip Sign Up
            </button>
            <button style={logInButtonStyle} onClick={this.logIn}>
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
