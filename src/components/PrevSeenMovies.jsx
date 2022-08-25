import useGetLatestViewedMovies from "../hooks/useGetLatestViewedMovies"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import defaultMovieIMG from '../assets/img/camera.png'
import LoadingSpinner from "./LoadingSpinner"
import AlertBox from "./AlertBox"

const PrevSeenMovies = () => {

    const {data: pastMovies, error, isError, isLoading} = useGetLatestViewedMovies()

    return (

        <>
        {
            isLoading && <LoadingSpinner />
        }

        {
            isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
        }

        {
            pastMovies && (

                <div className="pastmovies">

                    <h3>Recently viewed:</h3>

                    {
                        pastMovies.map(movie => (
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
        
        </>
    )
}

export default PrevSeenMovies