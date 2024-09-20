import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/routes'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='font-opensans'>
      <HomePage/>
    </div>
  )
}

export default App