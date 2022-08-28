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
import { useState } from "react"

const MoviePage = () => {

    // Get dynamic URL params from useParams
    const { id } = useParams()
    // Get query data from useGetMovie hook
    const { data: movie, error, isError, isLoading } = useGetMovie(id)

    // Mutation variable to keep track of movie pages previously visited by user
    const addToLatest = useAddToLatestViewedMovies()

    const [isCastOpen, setIsCastOpen] = useState(true)
    const [isSimilarOpen, setIsSimilarOpen] = useState(true)

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

                                        <p className="movie-info-about">
                                            { movie.overview }
                                        </p>

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

                                    <div className="cast-heading-wrapper">
                                        <span onClick={ () => { setIsCastOpen( prevState => !prevState ) } } >{ isCastOpen ? '⬆️' : '⬇️' }</span>
                                        <h3>Cast</h3>
                                    </div>

                                    {
                                        isCastOpen && (
                                            <ListGroup>
                                                {
                                                    // Render actors featured in movie
                                                    movie.credits.cast.map( (actor) => (
                                                        <ListGroup.Item key={actor.id} as={Link} to={`/actor/${actor.id}`} >
                                                            <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultProfileIMG} loading='lazy' />
                                                            <span>{actor.name}</span>
                                                        </ListGroup.Item>
                                                    ) )
                                                }
                                            </ListGroup>
                                        )
                                    }
                                    

                                </section>
                                
                                <section className="movie-related">

                                    <header className="cast-heading-wrapper">
                                        <span onClick={ () => { setIsSimilarOpen( prevState => !prevState ) } } >{ isSimilarOpen ? '⬆️' : '⬇️' }</span>
                                        <h3>Related movies</h3>
                                    </header>
                                    
                                    {
                                        isSimilarOpen && (
                                            <main>
                                                {
                                                    // Render related movies
                                                    movie.similar.results.map( relMovie => (

                                                        <MovieCardTiny movie={ relMovie } key={ relMovie.id } />

                                                    ) )
                                                }
                                            </main>
                                        )
                                    }

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