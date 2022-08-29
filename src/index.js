import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {App} from './App'
import {createStore} from 'redux'


const inState = [];

const myReducer = (state = inState , action) => {
  const newState = [...state]

  if(action.type =="ADD_FRUIT"){
      newState.push(action.task) 
      return newState; 
  } 
  else if (action.type == "CROSS"){
    newState.splice(action.index,1)
    return newState
  }


   else {return state}


} 



const store = createStore(myReducer)



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)