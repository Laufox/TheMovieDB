import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MovieCard = ( { movie } ) => {

    return (
        <Card key={movie.id} className="movie-container-item">
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
                <Button>Go to</Button>

            </Card.Body>
        </Card>
    )

}

export default MovieCard