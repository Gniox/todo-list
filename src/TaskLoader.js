import React from "react";
import "./index.css";
import FlipMove from "react-flip-move";
class TaskLoader extends React.Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item, style) {
    return (
      <li
        onClick={() => this.delete(item.key)}
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
      maxHeight: "75vh",
      boxSizing: "border-box",
      marginTop: 10,
      marginBottom: 10,
      listStyle: "none",
      paddingLeft: 0
    };
    let liStyle = {
      
      fontSize: this.props.smaller ? 15 : 24
    };
    console.log("this is props.tasks: " + this.props.tasks);

    console.log("smaller: " + this.props.smaller);
    var todoTasks = this.props.tasks;
    var listTasks = [];

    for (let task of todoTasks) {
      listTasks.push(this.createTasks(task, liStyle));
    }

    return (
      <ul style={containerStyle}>
        <FlipMove duration={250} easing="ease-out">
          {listTasks}
        </FlipMove>
      </ul>
    );
  }
}

export default TaskLoader;
