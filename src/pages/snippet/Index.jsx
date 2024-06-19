import { Routes, Route } from 'react-router-dom'

import Template from './Template'
import Syntax from './Syntax'

import AppContext from '../../context/AppContext'
import { useContext } from 'react'

const Index = () => {
  const { setNavTitle } = useContext(AppContext)
  setNavTitle('Snippet')
  
  return (
    <Template>
      <Routes>
        <Route path="/syntax" element={<Syntax />} />
      </Routes>
    </Template>
  )
}

export default Index
