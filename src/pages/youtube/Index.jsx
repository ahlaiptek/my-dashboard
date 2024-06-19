import { Routes, Route, Link } from 'react-router-dom'

import Template from './Template'
import Play from './Play'

import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import YouTubeContext from '../../context/YouTubeContext'
// import { useState } from 'react'

const Index = () => {
  const { setNavTitle } = useContext(AppContext)

  // const [data, setData] = useState()

  setNavTitle('YouTube')

  const context = {

  }

  return (
    <YouTubeContext.Provider value={context}>
      <Template>
        <Routes>
          <Route path="/play" element={<Play />} />
        </Routes>
        <Link to='/youtube/play'>Play</Link>
      </Template>
    </YouTubeContext.Provider>
  )
}

export default Index
