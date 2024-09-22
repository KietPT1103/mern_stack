import React from 'react'
import MainLayout from '../components/MainLayout'
import Hero from './home/container/Hero'
import Article from './home/container/Article'
import Contact from './home/container/Contact'

function HomePage() {
  return (
    <MainLayout>
      <Hero/>
      <Article/>
      <Contact/>
    </MainLayout>
  )
}

export default HomePage