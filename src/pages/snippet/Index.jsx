import { Routes, Route } from 'react-router-dom'

import Template from './Template'
import Syntax from './Syntax'

const Index = () => {
  return (
    <Template>
      <Routes>
        <Route path="/syntax" element={<Syntax />} />
      </Routes>
    </Template>
  )
}

export default Index
