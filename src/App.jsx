import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IndexHome from './pages/home/Index'
import IndexSnippet from './pages/snippet/Index'
import YouTubePage from './pages/youtube/_page'

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
        <Container className='card mt-2 mb-5 p-2'>
          <Routes>
            <Route path='/' element={<IndexHome />} />
            <Route path='/youtube/*' element={<YouTubePage />} />
            <Route path='/snippet/*' element={<IndexSnippet />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </AppContext.Provider>
  )
}

export default App
