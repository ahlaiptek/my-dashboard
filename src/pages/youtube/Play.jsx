import { Card, Col, Container, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import YouTubeContext from '../../context/YouTubeContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Play = () => {
  let { setNavTitle, data, playing } = useContext(YouTubeContext)
  data = data ? data : []
  const [video] = useState(data.find((e) => e['ID'] === playing))

  useEffect(() => {
    setNavTitle('Play')
  }, [setNavTitle])

  if (!data) return <h6>Data kosong</h6>
  
  return (
    <Container className='p-2'>
      <Row>
        <Col>
          <iframe
            src={video && video['URL']}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='w-100'
            style={{ aspectRatio: '16/9' }}
          />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>{video && video['Judul']}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {video && video['Deskripsi']}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Link to='/youtube' className='btn btn-primary'>Kembali</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Play
