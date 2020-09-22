import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList.js';

var destination = document.querySelector("#root");

ReactDOM.render(
  <div>
    <ToDoList></ToDoList>
  </div>, 
  destination
);
