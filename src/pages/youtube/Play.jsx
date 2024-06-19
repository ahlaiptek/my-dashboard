import { Container, Row } from "react-bootstrap"
import PropTypes from 'prop-types'
import { useContext } from "react"
import YouTubeContext from "../../context/YouTubeContext"

const Play = ({ embedId }) => {
  const { setNavTitle } = useContext(YouTubeContext)

  setNavTitle('Play')

  return (
    <Container>
      <Row className="justify-content-md-center">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </Row>
    </Container>
  )
}

Play.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default Play
