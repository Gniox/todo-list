import React from "react";
import { black } from "color-name";

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
      backgroundColor: '#e3fac5',
      display: "flex",
      borderRadius: 20,
      justifyContent: "center",
      marginBottom: "2%",
      marginTop: "2%"
    };
    let redStyle = {
      backgroundColor: '#eb5e8d',
      display: "flex",
      borderRadius: 20,
      justifyContent: "center",
      marginBottom: "2%",
      marginTop: "2%"
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
    let containerStyle = {
      overflow: 'scroll',
      overscrollBehavior: 'contain',
      maxHeight: '80vh',
      boxSizing: 'border-box',
      marginTop: 10,
      marginBottom: 10,
    }
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
      return <div style={containerStyle} key={this.props.tasks.length}>{list}</div>;
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
        break;
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
      maxHeight: '90vh',
      height: '90vh',
      borderRadius: 20,
      backgroundColor: '#e8c090',
      // justifyItems: 'center',
    };
    var header = {
      // display: 'flex',
      // justifyItems: 'center',
      // position: 'fixed',
      alignItems: "center",
      width: "70%",
      maxHeight: '85vh',
      // overscrollBehavior: 'contain',
      overflow: 'hidden'
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
      height: 52,
      marginTop: 20,
      borderColor: 'transparent',
      // borderRadius: 20
    };
    var buttonStyle = {
      fontFamily: "sans-serif",
      fontSize: 24,
      height: 60,
      width: 100,
      marginTop: 20,
      borderColor: 'transparent',
      backgroundColor: '#9e55ab'
      // borderRadius: 20
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
