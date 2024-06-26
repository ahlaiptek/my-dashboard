import { Routes, Route, Link } from 'react-router-dom'

import Template from './Template'
import Play from './Play'

import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import YouTubeContext from '../../context/YouTubeContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Index from './Index'
import convertCStoJSON from '../../utils/convertCSVtoJSON'

const Page = () => {
  const [data, setData] = useState(undefined)
  const [playing, setPlaying] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const url = import.meta.env.VITE_SPREADSHEET_YOUTUBE

      const response = await fetch(url)
      const data = await response.text()

      let json = convertCStoJSON(data)
      setData(json)
    }

    fetchData()
  }, [])

  const context = {
    ...useContext(AppContext),
    data,
    playing, setPlaying
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
