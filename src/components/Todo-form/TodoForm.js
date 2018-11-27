import React, {Component} from 'react'

export default class TodoForm extends Component {

handleFieldChange = (evt) => {
this.props.setToDoItemState(evt.target.value)

}
    render(){
        return(
            <div>
                <input type="text" placeholder= " new todo item" onChange={this.handleFieldChange} />
                <button onClick= {()=> {this.props.addTodo()}}> + </button>
            </div>
        )
    }
}