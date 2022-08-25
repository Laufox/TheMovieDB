import useGetLatestViewedMovies from "../hooks/useGetLatestViewedMovies"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import defaultMovieIMG from '../assets/img/camera.png'

const PrevSeenMovies = () => {

    const {data: pastMovies} = useGetLatestViewedMovies()

    return (
        <div className="pastmovies">
            <h3>Recently viewed:</h3>
            {
                pastMovies && pastMovies.map(movie => (
                    <Card key={movie.id} className='pastmovie-card'>

                        <Card.Body className="pastmovie-body">

                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Img variant="top" src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultMovieIMG } />
                            <Button as={Link} to={`/movie/${movie.id}`}>Go to</Button>

                        </Card.Body>
                        
                    </Card>
                ))
            }
        </div>
    )
}

export default PrevSeenMovies