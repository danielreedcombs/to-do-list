import React, { Component } from 'react';
import './TodoApp.css';
import Title from './title/title.js'
import TodoForm from './Todo-form/TodoForm.js'
import TodoList from './Todo-list/TodoList'

class Todo extends Component {
  state={
    data:[],
    todoItem: ""
  }

  setTodoItemState =(val) => {
    this.setState({todoItem: val})
  }


  getTodos(){
    fetch("http://localhost:8088/todos")
    .then(data => data.json())
    .then( todos => this.setState({data: todos}))
  }

  deleteTodo= (id) =>{
    return fetch( `http://localhost:8088/todos/${id}`, {
      method: 'DELETE',
      headers:{ "Content-Type": "application/json; charset=utf-8"}
     })
      .then(() => this.getTodos())

  }

  addTodo = () => {
    const newTodo = {text:this.state.todoItem}
    fetch("http://localhost:8088/todos",{
    method:"POST",
    headers:{
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(newTodo)
  })
  .then(()=> this.getTodos())
  }

  render() {
    return (
     <div className="TodoApp">
       <Title />
       <TodoForm setToDoItemState = {this.setTodoItemState} addTodo= {this.addTodo} />
       <TodoList todos={this.state.data} deleteTodo={this.deleteTodo} />
     </div>
    )
}
}

export default Todo;
