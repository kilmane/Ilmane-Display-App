import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="container">
        <div className={`text-display ${isVisible ? 'visible' : ''}`}>
          <h1 className="main-text">ILMANE</h1>
          <div className="text-shadow">ILMANE</div>
          <div className="glow-effect"></div>
        </div>
        
        <div className="subtitle">
          <p>Beautiful Typography Display</p>
        </div>
      </div>
      
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  )
}

export default App
