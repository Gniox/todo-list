import React from "react";
import "./index.css";
class TaskLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#e3fac5"
    };

    this.createTasks = this.createTasks.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeColorBack = this.changeColorBack.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  changeColor() {
    this.setState({ color: "#eb5e8d" });
  }

  changeColorBack() {
    this.setState({ color: "#e3fac5" });
  }

  createTasks(item, style) {
    return (
      <li
        onClick={() => this.delete(item.key)}
        onMouseEnter={this.changeColor}
        onMouseLeave={this.changeColorBack}
        key={item.key}
        style={style}
        className="task"
      >
        {item.text}
      </li>
    );
  }

  render() {
    let containerStyle = {
      overflow: "scroll",
      overscrollBehavior: "contain",
      maxHeight: "80vh",
      boxSizing: "border-box",
      marginTop: 10,
      marginBottom: 10,
      listStyle: "none",
      paddingLeft: 0
    };
    let liStyle = {
      listStyle: "none",
      backgroundColor: this.state.color,
      borderRadius: 20,
      textAlign: "center",
      marginBottom: "4%",
      marginTop: "4%",
      fontFamily: "sans-serif",
      paddingTop: "2%",
      paddingBottom: "2%",
      fontSize: this.props.smaller ? 15 : 24
    };
    console.log("this is props.tasks: " + this.props.tasks);

    console.log("smaller: " + this.props.smaller);
    var todoTasks = this.props.tasks;
    var listTasks = [];

    for (let task of todoTasks) {
      listTasks.push(this.createTasks(task, liStyle));
    }

    return <ul style={containerStyle}>{listTasks}</ul>;
  }
}

export default TaskLoader;
