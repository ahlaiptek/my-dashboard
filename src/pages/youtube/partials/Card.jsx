import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CardCustom = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
          <br />
          <Link to='/youtube/play' className='btn btn-primary mt-2'>Lihat Selengkapnya</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardCustom
