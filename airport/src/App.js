import React from 'react'

import logo from './assets/images/logo.png'
import './assets/styles/App.css'

import AppContent from './AppContent'

const App = () => (
  <div className="App">

    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <h1 className="App-title">Welcome to Airport</h1>
    </header>
    
    <div className="App-intro">
      <AppContent />
    </div>
  </div>
)

export default App
