import React, {Component} from 'react';
import './TodoList.css'


class TodoList extends Component {
    constructor(props){
        super(props)
    }

    sendIndex(){
        this.props.indexToPass(this.props.index)
    }

    render(){
        return(
            <div className ='list'>
                {this.props.taskText}
                <button onClick = {this.sendIndex.bind(this)}> x </button>
            </div>
        );
    }
}


export default TodoList