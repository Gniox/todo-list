import React from "react";

class TaskLoader extends React.Component {
  createTasks(item, style) {
    return <li key={item.key} style={style}>{item.text}</li>;
  }

  render() {
    let containerStyle = {
      overflow: "scroll",
      overscrollBehavior: "contain",
      maxHeight: "80vh",
      boxSizing: "border-box",
      marginTop: 10,
      marginBottom: 10,
      listStyle: 'none',
      paddingLeft: 0,
    };
    let liStyle = {
      listStyle: 'none',
      backgroundColor: "#e3fac5",
      borderRadius: 20,
      textAlign: 'center',
      marginBottom: "4%",
      marginTop: "4%",
      fontFamily: "sans-serif",
      paddingTop: "2%",
      paddingBottom: "2%",
      fontSize: this.props.smaller ? 15: 24
    }
    console.log("this is props.tasks: " + this.props.tasks);

    console.log("smaller: " + this.props.smaller);
    var todoTasks = this.props.tasks;
    var listTasks = [];

    for(let task of todoTasks) {
      listTasks.push(this.createTasks(task, liStyle));
    }

    return <ul style={containerStyle}>{listTasks}</ul>;
  }
};

export default TaskLoader;
