import defaultMovieIMG from '../assets/img/camera.png'
import { Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MovieCardTiny = ( { movie } ) => {

    return (
        
        <Card className='movie-related-card'>

            <Card.Body className="movie-related-card-body">

                <Card.Title>{movie.title}</Card.Title>
                <Card.Img variant="top" src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultMovieIMG } loading={'lazy'} />
                <Button as={Link} to={`/movie/${movie.id}`}>Go to</Button>

            </Card.Body>
                                                    
        </Card>

    )

}

export default MovieCardTiny