import React from 'react'

function NavBar(props){
  let className
  if (props.color === 'black') {
    className = 'navbar navbar-inverse'
  } else if (props.color === 'white') {
    className = 'navbar navbar-default'
  }

  return React.createElement('nav', {className: className},
    React.createElement('div', {className: 'container-fluid' }), React.createElement('div', {className: 'navbar-header'}, React.createElement('a', {className: 'navbar-brand'}, props.title)))
}

export default NavBar
