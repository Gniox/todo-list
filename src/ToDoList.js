import React from "react";
import TaskLoader from "./TaskLoader";
import "./index.css";
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      windowWidth: 0,
      widnowHeight: 0
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  addTask(e) {
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          taskList: prevState.taskList.concat(newTask)
        };
      });
      this._inputElement.value = "";
    }
    e.preventDefault();
  }
  deleteTask(key) {
    var filteredList = this.state.taskList.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      taskList: filteredList
    });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }
  render() {
    const { windowWidth } = this.state;

    const smaller = windowWidth < 600;

    var todoListContainer = {
      display: "flex",
      justifyContent: "center",
      // justifyItems: 'center',
      // alignItems: 'center',
      width: "100vw",
      maxHeight: "90vh",
      height: "85vh",
      borderRadius: 20,
      backgroundColor: "#e8c090"
      // justifyItems: 'center',
    };
    var header = {
      // display: 'flex',
      // justifyItems: 'center',
      // position: 'fixed',
      alignItems: "center",
      width: "70%",
      maxHeight: "85vh",
      // overscrollBehavior: 'contain',
      overflow: "hidden"
    };
    var formStyle = {
      display: "flex",
      justifyContent: "center"
    };
    var inputStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      marginRight: 20,
      width: smaller ? "50%" : "30%",
      height: "auto",
      marginTop: 20,
      borderColor: "transparent"
      // borderRadius: 20
    };
    var buttonStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      height: "auto",
      width: smaller ? "25%" : "15%",
      marginTop: 20,
      borderColor: "transparent",
      backgroundColor: "#9e55ab"
      // borderRadius: 20
    };
    return (
      <div style={todoListContainer}>
        <div style={header}>
          <form onSubmit={this.addTask} style={formStyle}>
            <input
              placeholder="Enter Task"
              ref={a => (this._inputElement = a)}
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
      </div>
    );
  }
}

export default ToDoList;
