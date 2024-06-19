import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import IndexHome from './pages/home/Index'
import IndexSnippet from './pages/snippet/Index'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexHome />} />
        <Route path='/snippet' element={<IndexSnippet />} />
      </Routes>
      <ul>
        <li><Link to='/'>Satu</Link></li>
        <li><Link to='/snippet'>Snippet</Link></li>
      </ul>
    </BrowserRouter>
  )
}

export default App
