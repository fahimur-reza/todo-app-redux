import React, {Component} from 'react';
import './TodoApp.css'
import { connect } from 'react-redux';
import TodoList from './TodoList.js'



class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state = { inpText : ''}
    }

    change(e){
       this.setState({inpText : e.target.value }) 
    }

    submit(e){
        e.preventDefault();
        if (this.state.inpText){
        this.props.dispatch({ type: "ADD_FRUIT" , task: this.state.inpText})
        this.setState({inpText : ''})

       }
 
    }

    remove(inx){
        console.log(inx)
        this.props.dispatch({type : "CROSS", index : inx})

    }

    render (){
        return(
            <div>
                <h1>Todo App For Fruites</h1>
                <form onSubmit = {this.submit.bind(this)}>
                <input className = 'userInput' type = 'text' onChange = {this.change.bind(this)}
                 value = {this.state.inpText}></input>
                <input className = 'subButton' type = 'submit'></input>
                </form>
                 {this.props.taskArr.map ((val, i) => <TodoList taskText = {val} index = {i} 
                 indexToPass = {this.remove.bind(this)} /> )}
                

            </div>
        );

    }
}



export default connect(( pakhi )=> {  return {taskArr : pakhi}  }) (TodoApp)



