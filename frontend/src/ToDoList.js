import React from "react";
import TaskLoader from "./TaskLoader";
import "./index.css";

let user_requests = require("./requests/user_requests");

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  componentDidMount = async () => {
    let user = await JSON.parse(localStorage.getItem("@user"));
    console.log("todolist: " + user.tasks);
    this.setState({ taskList: JSON.parse(user.tasks.slice()) });
  };
  async addTask(e) {
    e.preventDefault();
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      await this.setState((prevState) => {
        return {
          taskList: prevState.taskList.concat(newTask),
        };
      });
      this._inputElement.value = "";
      console.log("tasklist: " + this.state.taskList);

      if (localStorage.getItem("@user")) {
        user_requests.update(this.state.taskList);
      }
    }
  }
  async deleteTask(key) {
    var filteredList = this.state.taskList.filter(function (item) {
      return item.key !== key;
    });

    await this.setState({
      taskList: filteredList,
    });

    user_requests.update(this.state.taskList);
  }
  render() {
    const width = this.props.windowWidth;

    const smaller = width < 600;

    var header = {
      // display: 'flex',
      // justifyItems: 'center',
      // position: 'fixed',
      alignItems: "center",
      width: "100%",
      maxHeight: "75vh",
      // overscrollBehavior: 'contain',
      // overflow: "hidden"
    };
    var formStyle = {
      display: "flex",
      justifyContent: "center",
    };
    var inputStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      marginRight: 20,
      width: smaller ? "50%" : "30%",
      height: "auto",
      marginTop: 20,
      borderColor: "transparent",
      padding: 5,
      // borderRadius: 20
    };
    var buttonStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      height: "auto",
      width: smaller ? "25%" : "15%",
      marginTop: 20,
      borderColor: "transparent",
      backgroundColor: "violet",
      padding: 5,
      // borderRadius: 20
    };
    return (
      <div style={header}>
        <form onSubmit={this.addTask} style={formStyle}>
          <input
            placeholder="Enter Task"
            ref={(a) => (this._inputElement = a)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            add
          </button>
        </form>
        <TaskLoader
          tasks={this.state.taskList}
          delete={this.deleteTask}
          smaller={smaller}
        ></TaskLoader>
      </div>
    );
  }
}

export default ToDoList;
