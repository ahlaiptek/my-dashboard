import { Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import YouTubeContext from '../../context/YouTubeContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Play = ({ embedId }) => {
  const { setNavTitle } = useContext(YouTubeContext)

  useEffect(() => {
    setNavTitle('Play')
  }, [setNavTitle])

  return (
    <Container className='p-2'>
      <Row className='justify-content-md-center'>
        <iframe
          className='embed-responsive-item'
          src={`https://www.youtube.com/embed/${embedId}`}
          title='YouTube video player'
          allowFullScreen
        />
      </Row>
      <Row>
        <Link to='/youtube' className='btn btn-primary mt-2'>Kembali</Link>
      </Row>
    </Container>
  )
}

Play.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default Play
