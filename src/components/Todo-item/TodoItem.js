import React, {Component} from 'react'

export default class TodoItem extends Component{
    render(){
        return(
        <div>
            <li>{this.props.todo.text}
            <button onClick={()=>{this.props.deleteTodo(this.props.todo.id)}}>done</button>
            </li>
        </div>
        )
    }
}