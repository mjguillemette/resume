import React from 'react'
import './App.css'
import Menu from './components/Menu'
import SmallMenu from './components/SmallMenu'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact />
        <h1
          style={{
            fontWeight: '700',
            margin: '0'
          }}
        >
          Michael Guillemette
        </h1>
        <Menu />{' '}
      </header>
      {/* <SmallMenu />
      <article
        style={{
          maxWidth: '36rem',
          margin: '2em .12em 1em .12em',
          fontSize: '1.2rem'
        }}
      >
        <h2 style={{ margin: '.125em', fontWeight: '700', color: '#1F6C90' }}>
          Blog Slug
        </h2>
        Tesseract dream of the mind's eye a billion trillion at the edge.
      </article>
      <article
        style={{
          maxWidth: '36rem',
          margin: '2em .12em 1em .12em',
          fontSize: '1.2rem'
        }}
      >
        <h2 style={{ margin: '.125em', fontWeight: '700', color: '#1F6C90' }}>
          Second Blog Slug
        </h2>
        Sometimes we think big things about little pieces of bread. How do we go
        on living, knowing these things?
      </article> */}
      <div className="resume">
        <Resume />
      </div>
    </div>
  )
}

export default App
