import { Routes, Route, Link } from 'react-router-dom'

import Template from './Template'
import Play from './Play'

import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import YouTubeContext from '../../context/YouTubeContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Index from './Index'

const Page = () => {
  const { setNavTitle } = useContext(AppContext)
  setNavTitle('YouTube')

  const [data, setData] = useState(undefined)

  useEffect(() => {
    setData(undefined)
  }, [])

  const context = {
    ...useContext(AppContext),
    data
  }

  return (
    <YouTubeContext.Provider value={context}>
      <Template>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/play' element={<Play />} />
        </Routes>
      </Template>
    </YouTubeContext.Provider>
  )
}

export default Page
