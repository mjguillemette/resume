import React, { Component } from 'react'

const menuItem = ['📜 Resume']
// '✏️Blog', '🖥️ Projects',

const menuItems = menuItem.map(item => (
  <li
    className="menuItems"
    style={{ color: '#1F6C90', marginRight: '1em', lineHeight: '2.215em' }}
  >
    {item}
  </li>
))

class Menu extends Component {
  render() {
    return (
      <ul
        className="bigMenu"
        style={{
          listStyle: 'none',
          display: 'flex',
          margin: '0',
          fontSize: '1.12rem'
        }}
      >
        {menuItems}
      </ul>
    )
  }
}

export default Menu
