import React from 'react'
import Header from './Header'
import Footer from './Footer'

// MainLayout nhận vào 1 children (có thể là component nào đó) để giữa header và footer
function MainLayout( {children} ) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout