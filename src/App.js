import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticleDetail from './pages/articleDetail/ArticleDetail'
function App() {

  return (
    <div className='font-opensans'>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog/:id' element={<ArticleDetail/>}/>
      </Routes>
    </div>
  )
}

export default App