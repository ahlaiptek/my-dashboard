import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IndexHome from './pages/home/Index'
import IndexSnippet from './pages/snippet/Index'
import IndexYoutube from './pages/youtube/Index'

import './App.css'
import Navbar from './partials/Navbar'
import AppContext from './context/AppContext'
import { useState } from 'react'
import Footer from './partials/Footer'

import { Container } from 'react-bootstrap'

function App() {
  const [navTitle, setNavTitle] = useState('My Dashboard')

  const context = {
    navTitle, setNavTitle
  }

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter basename='my-dashboard'>
        <Navbar />
        <Container className='card'>
          <Routes>
            <Route path='/' element={<IndexHome />} />
            <Route path='/youtube/*' element={<IndexYoutube />} />
            <Route path='/snippet/*' element={<IndexSnippet />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </AppContext.Provider>
  )
}

export default App
