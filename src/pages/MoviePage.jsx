import useAddToLatestViewedMovies from "../hooks/useAddToLatestViewedMovies"
import useGetMovie from "../hooks/useGetMovie"
import LoadingSpinner from "../components/LoadingSpinner"
import AlertBox from "../components/AlertBox"
import MovieAdditionalInfo from "../components/MovieAdditionalInfo"
import defaultProfileIMG from '../assets/img/user.png'
import defaultMovieIMG from '../assets/img/camera.png'
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import MovieCardTiny from "../components/MovieCardTiny"

const MoviePage = () => {

    // Get dynamic URL params from useParams
    const { id } = useParams()
    // Get query data from useGetMovie hook
    const { data: movie, error, isError, isLoading } = useGetMovie(id)

    // Mutation variable to keep track of movie pages previously visited by user
    const addToLatest = useAddToLatestViewedMovies()

    // Add movie to history
    useEffect( () => {

        addToLatest.mutate(id)

    }, [movie] )

    return (

        <>

            {
                isLoading && <LoadingSpinner />
            }

            {
                isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
            }

            {
                movie && (
                    <>
                        <Card className="movie-card-one">
                            <Card.Body>

                                <Card.Title>{movie.title}</Card.Title>

                                <section className="movie-info">

                                    <div className="img-wrapper">
                                        <Card.Img variant="top" src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultMovieIMG } />
                                    </div>
                                    
                                    <div className="info-wrapper">

                                        <h3>About</h3>
                                        <div className="movie-info-about">
                                            { movie.overview }
                                        </div>

                                        <MovieAdditionalInfo date={ movie.release_date } language={ movie.original_language } score={ movie.vote_average } />

                                        <div className="movie-info-genres">

                                            {
                                                // Render names of tagged genres
                                                movie.genres.map( genre => (
                                                    <Link to={`/genre/${genre.id}/${genre.name.replace(/\s/g, '-').toLowerCase()}?page=1`} key={genre.id} >#{ genre.name }</Link>
                                                ) )
                                            }

                                        </div>
                                        
                                    </div>

                                </section>
                                
                                <section className="cast">

                                    <h3>Cast</h3>

                                    <ListGroup>
                                        {
                                            // Render actors featured in movie
                                            movie.credits.cast.map( (actor) => (
                                                <ListGroup.Item key={actor.id} as={Link} to={`/actor/${actor.id}`} >
                                                    <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultProfileIMG} />
                                                    <span>{actor.name}</span>
                                                </ListGroup.Item>
                                            ) )
                                        }
                                    </ListGroup>

                                </section>
                                
                                <section className="movie-related">

                                    <header>
                                        <h3>Related movies</h3>
                                    </header>
                                    <main>
                                        {
                                            // Render related movies
                                            movie.similar.results.map( relMovie => (

                                                <MovieCardTiny movie={ relMovie } key={ relMovie.id } />

                                            ) )
                                        }
                                    </main>

                                </section>
                                
                            </Card.Body>
                            
                        </Card>
                        
                    </>
                    
                )
            }

        </>
        
    )

}

export default MoviePage