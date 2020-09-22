import React from "react";
import { white, black } from "color-name";

class TaskLoader extends React.Component {
  render() {
    let divStyle = {
      backgroundColor: 'white',
      display: 'flex',
      borderRadius: 20,
      borderColor: 'black',
      justifyContent: 'center',
      marginBottom: '5%',
      marginTop: '5%'
    }
    let taskStyle = {
      fontFamily: 'sans-serif',
      fontSize: 24,
    }
    console.log("this is props.tasks: " + this.props.tasks);
    if (this.props.tasks != null) {
      let list = []
      for (let task of this.props.tasks) {
        console.log("In taskLoader: " + task);
          list.push(
          <div key={task} style={divStyle}>
            <p style={taskStyle}>{task}</p>
          </div>
          );
      }
      return list;
    }
    return <div></div>;
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  addTask(value) {
    let updated = this.state.taskList;
    updated.push(value);
    // console.log(value);
    this.setState({
      taskList: updated,
      task: ""
    });
    let number;
    for (number in this.state.taskList) {
      console.log("task: " + this.state.taskList[number]);
    }
  }
  render() {
    var todoListContainer = {
      display: 'flex',
      justifyContent: 'center',
      // justifyItems: 'center',
      // alignItems: 'center',
      width: '100vw',
      height: 'auto',
      // justifyItems: 'center',
    };
    var header = {
      // display: 'flex',
      // justifyItems: 'center',
      alignItems: 'center',
      width: '70%'
    };
    var formStyle = {
      display: 'flex',
      justifyContent: 'center'
    }
    var inputStyle = {
      fontFamily: 'sans-serif',
      fontSize: 24,
      marginRight: 20,
      width: 225,
      height: 60,
      borderRadius: 20
      
    }
    var buttonStyle = {
      fontFamily: 'sans-serif',
      fontSize: 24,
      height: 60,
      width: 100,
      borderRadius: 20
    }
    return (
      <div style={todoListContainer}>
        <div style={header}>
          <form onSubmit={value => this.handleSubmit(value)} style={formStyle}>
            <input
              placeholder="Enter Task"
              value={this.state.task}
              onChange={this.handleChange}
              style={inputStyle}
            />
            <button type="submit" onClick={() => this.addTask(this.state.task)} style={buttonStyle}>
              add
            </button>
          </form>
          <TaskLoader tasks={this.state.taskList}></TaskLoader>
        </div>
      </div>
    );
  }
}

export default ToDoList;
