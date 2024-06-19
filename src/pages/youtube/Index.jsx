import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from './partials/Card'
import YouTubeContext from '../../context/YouTubeContext'
import { useEffect } from 'react'
import convertCStoJSON from '../../utils/convertCSVtoJSON'
import { useState } from 'react'

const Index = () => {
  const { setNavTitle, data } = useContext(YouTubeContext)

  useEffect(() => {
    setNavTitle('YouTube')
  }, [setNavTitle])

  return (
    <Container>
      <Row className='border rounded'>
        <header className='card'>
          <h3 className='text-center'>Hasil</h3>
        </header>
        {data ? (data.map((e, i) => {
          return (
            <Col key={i} sm='6' className='mt-2 mb-2'>
              <Card id={e['ID']} judul={e['Judul']} deskripsi={e['Deskripsi']} />
            </Col>
          )
        })) : (
          <h6>Loading</h6>
        )}
      </Row>
    </Container>
  )
}

export default Index
