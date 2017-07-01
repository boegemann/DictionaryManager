import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


let Header = ({dispatch}) => {

  return <div className="headerBar">
    <h3 onClick={() => {
      dispatch(addTodo("Dummy"))
    }}>TO DO</h3>
  </div>
}

Header = connect()(Header)

export default Header
