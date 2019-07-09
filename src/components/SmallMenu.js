import React, { Component } from 'react'

class SmallMenu extends Component {
  render() {
    return (
      <div
        style={{
          margin: 'auto',
          borderRadius: '50%',
          height: '75px',
          width: '75px',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          cursor: 'pointer'
        }}
        className="smallMenu"
      >
        <p
          style={{
            color: '#aaaaaa',
            position: 'absolute',
            top: 0,
            display: 'block',
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
            padding: 0,
            margin: 0,
            lineHeight: '75px',
            fontSize: '4em',
            fontFamily: 'Roboto',
            fontHeight: '300'
          }}
        >
          +
        </p>
      </div>
    )
  }
}

export default SmallMenu
