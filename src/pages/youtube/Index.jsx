import { Routes, Route, Link } from 'react-router-dom'

import Template from './Template'
import Play from './Play'

import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import YouTubeContext from '../../context/YouTubeContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from './partials/Card'

const Index = () => {
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
          <Route path="/play" element={<Play />} />
        </Routes>
        <Link to='/youtube/play'>Play</Link>
        <Container>
          <Row className='border rounded'>
            <header className="card">
              <h3 className='text-center'>Hasil</h3>
            </header>
            {[1, 2, 3, 4, 5].map((e, i) => {
              return (
                <Col key={i} sm='6' className='mt-2 mb-2'>
                  <Card />
                </Col>
              )
            })}
          </Row>
        </Container>
      </Template>
    </YouTubeContext.Provider>
  )
}

export default Index
