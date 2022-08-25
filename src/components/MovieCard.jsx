import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import defaultMovieIMG from '../assets/img/camera.png'

const MovieCard = ( { movie } ) => {

    return (
        <Card className="movie-container-item">
            <Card.Body className="card-body">
                                                
                <Card.Title className="movie-heading">{movie.title}</Card.Title>
                <Card.Img variant="top" src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultMovieIMG } />
                <Card.Text className="additional-info">
                    <span>{ movie.release_date ? movie.release_date.slice(0, movie.release_date.indexOf('-')) : 'xxxx'}</span>
                    <span>|</span>
                    <span>{movie.original_language.toUpperCase()}</span>
                    <span>|</span>
                    <span>{movie.vote_average}</span>
                </Card.Text>
                <Button as={Link} to={`/movie/${movie.id}`}>Go to</Button>

            </Card.Body>
        </Card>
    )

}

export default MovieCard