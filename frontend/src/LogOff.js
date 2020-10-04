import React from "react";

class LogOff extends React.Component {
  constructor(props) {
    super(props);
    this.logOff = this.logOff.bind(this);
  }
  logOff = async () => {
    localStorage.removeItem("@user");
    localStorage.removeItem("@token");

    let temp = {
      signUp: false,
      signUpScreen: false,
      logIn: false,
      logInScreen: true,
      first: true,
    };
    this.props.next(temp);
  };
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
    // var formStyle = {
    //   // display: "flex",
    //   // alignItems: "center",
    //   width: smaller ? "80%" : "40%",
    //   // height: "80%",
    //   background: "#eb5e8d",
    //   padding: 20,
    //   // justifyContent: "center"
    //   // margin: "0 auto",
    //   // maxWidth: "360"
    // };
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
    return (
      <div style={container}>
        <button style={buttonStyle} onClick={this.logOff}>
          Log Off
        </button>
      </div>
    );
  }
}

export default LogOff;
