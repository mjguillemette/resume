import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <p style={{ float: 'right', fontSize: '1em' }}>
        <strong style={{ color: '#1f6c90' }}>Software Developer</strong>
        <br />
        <a
          style={{ paddingRight: '1rem' }}
          href="mailto:mike.guillemette@gmail.com"
        >
          mike.guillemette@gmail.com
        </a>
        <br />
        (902) 817-3574
      </p>
    )
  }
}

export default Menu
