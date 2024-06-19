import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import YouTubeContext from '../../../context/YouTubeContext'

const CardCustom = ({ id, judul, deskripsi }) => {
  const { setPlaying } = useContext(YouTubeContext)

  return (
    <Card>
      <Card.Header>
        <Card.Title>{judul}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {deskripsi}
          <br />
          <Link to='/youtube/play' className='btn btn-primary mt-2' onClick={() => setPlaying(id)}>Lihat Selengkapnya</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

CardCustom.propTypes = {
  id: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired
}

export default CardCustom
