import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <p className="contact" style={{ fontSize: '1em' }}>
        <strong style={{ color: '#1f6c90' }}>Software Developer</strong>
        <br />
        <a
          style={{ paddingRight: '1rem' }}
          href="mailto:mike.guillemette@gmail.com"
        >
          mike.guillemette@gmail.com
        </a>
        <br />
        (978) 340-0477
      </p>
    )
  }
}

export default Menu
