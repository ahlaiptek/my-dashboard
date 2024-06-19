import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import IndexHome from './pages/home/Index'
import IndexSnippet from './pages/snippet/Index'

import './App.css'
import Navbar from './partials/Navbar'
import AppContext from './context/AppContext'
import { useState } from 'react'
import Footer from './partials/Footer'

function App() {
  const [navTitle, setNavTitle] = useState('My Dashboard')

  const context = {
    navTitle, setNavTitle
  }

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter basename='my-dashboard'>
        <Navbar />
        <Routes>
          <Route path='/' element={<IndexHome />} />
          <Route path='/snippet' element={<IndexSnippet />} />
        </Routes>
        <ul>
          <li><Link to='./'>Satu</Link></li>
          <li><Link to='./snippet'>Snippet</Link></li>
        </ul>
      </BrowserRouter>
      <Footer />
    </AppContext.Provider>
  )
}

export default App
