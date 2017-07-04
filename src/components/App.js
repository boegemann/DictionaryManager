import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from "../containers/Header";


const App = () => (
  <div>
    <Header path="header"/>
    <div className="content">
      <AddTodo/>
      <VisibleTodoList/>
    </div>
    <Footer/>
  </div>
)

export default App
