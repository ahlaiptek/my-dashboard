import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from './partials/Card'
import YouTubeContext from '../../context/YouTubeContext'

const Index = () => {
  const { setNavTitle } = useContext(YouTubeContext)
  setNavTitle('YouTube')

  return (
    <Container>
      <Row className='border rounded'>
        <header className='card'>
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
  )
}

export default Index
