import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import IndexHome from './pages/home/Index';
import IndexSnippet from './pages/snippet/Index';
import Syntax from './pages/snippet/Syntax';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexHome />} />
        <Route path='/snippet' element={<IndexSnippet />} />
        <Route path='/snippet/syntax' element={<Syntax />} />
      </Routes>
      <ul>
        <li><Link to='/'>Satu</Link></li>
        <li><Link to='/snippet'>Snippet</Link></li>
        <li><Link to='/snippet/syntax'>Syntax</Link></li>
      </ul>
    </BrowserRouter>
  )
}

export default App
