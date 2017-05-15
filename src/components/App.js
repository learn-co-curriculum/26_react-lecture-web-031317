import React from 'react'

import NavBar from './NavBar'
import StudentList from './StudentList'

function App(props){
  return React.createElement('div', {},
    NavBar({color: 'black', title: 'Hello'}),
    StudentList({students: props.names})
  )
}

export default App
