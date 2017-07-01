import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from "../containers/Header";

const App = () => (
  <div>
    <Header/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
