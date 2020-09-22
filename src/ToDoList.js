import React from "react";

class TaskLoader extends React.Component {
  render() {
    console.log("this is props.tasks: " + this.props.tasks);
    if (this.props.tasks != null) {
      let list = []
      for (let task of this.props.tasks) {
        console.log("In taskLoader: " + task);
          list.push(
          <div key={task}>
            <p>{task}</p>
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
    return (
      <div className="todoListContainer">
        <div className="header">
          <form onSubmit={value => this.handleSubmit(value)}>
            <input
              placeholder="Enter Task"
              value={this.state.task}
              onChange={this.handleChange}
            ></input>
            <button type="submit" onClick={() => this.addTask(this.state.task)}>
              add
            </button>
          </form>
        </div>
        <TaskLoader tasks={this.state.taskList}></TaskLoader>
      </div>
    );
  }
}

export default ToDoList;
