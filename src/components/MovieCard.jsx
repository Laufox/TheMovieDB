import MovieAdditionalInfo from './MovieAdditionalInfo'
import defaultMovieIMG from '../assets/img/camera.png'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MovieCard = ( { movie } ) => {

    return (
        <Card className="movie-container-item">
            <Card.Body className="card-body">
                                                
                <Card.Title className="movie-heading">{movie.title}</Card.Title>
                <Card.Img variant="top" src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultMovieIMG } />
                <MovieAdditionalInfo date={ movie.release_date } language={ movie.original_language } score={ movie.vote_average } />
                <Button as={Link} to={`/movie/${movie.id}`}>Go to</Button>

            </Card.Body>
        </Card>
    )

}

export default MovieCard