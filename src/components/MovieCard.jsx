import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const MovieCard = ( { movie } ) => {

    return (
        <Card className="movie-container-item">
            <Card.Body className="card-body">
                                                
                <Card.Title className="movie-heading">{movie.title}</Card.Title>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Text className="additional-info">
                    <span>{movie.release_date.slice(0, movie.release_date.indexOf('-'))}</span>
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