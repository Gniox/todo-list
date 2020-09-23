import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change : false,
    }
    this.changeColor = this.changeColor.bind(this);
    this.changeBack = this.changeBack.bind(this);
  }
  changeColor(task) {
    this.setState({ change: !this.state.change ? true : this.props.delete(task)});
  }
  changeBack() {
    this.setState({change: this.state.change ? false : this.state.change});
  }
  render() {
    let whiteStyle = {
      backgroundColor: 'white',
      display: "flex",
      borderRadius: 20,
      borderColor: "black",
      borderWidth: 5,
      justifyContent: "center",
      marginBottom: "5%",
      marginTop: "5%"
    };
    let redStyle = {
      backgroundColor: 'red',
      display: "flex",
      borderRadius: 20,
      borderColor: "black",
      borderWidth: 5,
      justifyContent: "center",
      marginBottom: "5%",
      marginTop: "5%"
    };
    let taskStyle = {
      fontFamily: "sans-serif",
      fontSize: 24
    };
    return (
      <div key={this.props.k} style={!this.state.change ? whiteStyle : redStyle} onClick={() => {this.changeColor(this.props.task)}} onMouseOut={this.changeBack}>
            <p style={taskStyle}>{this.props.task}</p>
          </div>
    )
  }
}

class TaskLoader extends React.Component {
  render() {
    console.log("this is props.tasks: " + this.props.tasks);
    if (this.props.tasks != null) {
      let list = [];
      let count = 0;
      for (let task of this.props.tasks) {
        count++;
        console.log("In taskLoader: " + task);
        list.push(
          <Task task={task} delete={this.props.delete} k={count}/>
        );
      }
      return <div key={this.props.tasks.length}>{list}</div>;
    }
    return <div></div>;
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: [],
      color: "white"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  addTask(value) {
    if (value !== "") {
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
  }
  deleteTask(task) {
    console.log("hello m8");
    let list = this.state.taskList;
    for(let item in list) {
      console.log('task in deleteTask: ' + typeof(task));
      console.log('list[item] in deleteTask: ' + typeof(list[item]));
      console.log('equality in deleteTask: ' + (task === list[item]));
      if(task === list[item]) {
        delete list[item];
        let newList = list.filter((val) => {
          return val != null;
        });
        this.setState({taskList:newList});
        console.log(this.state.taskList);
        continue;
      }    
    }
  }
  render() {
    var todoListContainer = {
      display: "flex",
      justifyContent: "center",
      // justifyItems: 'center',
      // alignItems: 'center',
      width: "100vw",
      height: "auto"
      // justifyItems: 'center',
    };
    var header = {
      // display: 'flex',
      // justifyItems: 'center',
      alignItems: "center",
      width: "70%"
    };
    var formStyle = {
      display: "flex",
      justifyContent: "center"
    };
    var inputStyle = {
      fontFamily: "sans-serif",
      fontSize: 24,
      marginRight: 20,
      width: 225,
      height: 60,
      borderRadius: 20
    };
    var buttonStyle = {
      fontFamily: "sans-serif",
      fontSize: 24,
      height: 60,
      width: 100,
      borderRadius: 20
    };
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
            <button
              type="submit"
              onClick={() => this.addTask(this.state.task)}
              style={buttonStyle}
            >
              add
            </button>
          </form>
          <TaskLoader
            tasks={this.state.taskList}
            delete={this.deleteTask}
          ></TaskLoader>
        </div>
      </div>
    );
  }
}

export default ToDoList;
