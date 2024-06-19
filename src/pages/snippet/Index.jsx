import { Routes, Route } from 'react-router-dom'

import Syntax from './Syntax'

const Index = () => {
  return (
    <Routes>
      <Route path="/syntax" element={<Syntax />} />
    </Routes>
  )
}

export default Index
