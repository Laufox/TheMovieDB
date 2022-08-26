import useGetActor from '../hooks/useGetActor'
import LoadingSpinner from '../components/LoadingSpinner'
import AlertBox from '../components/AlertBox'
import defaultMovieIMG from '../assets/img/camera.png'
import defaultProfileIMG from '../assets/img/user.png'
import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const ActorPage = () => {

    // Get dynamic URL params from useParams
    const { id } = useParams()
    // Get query data from useGetMovie hook
    const { data: actor, error, isError, isLoading } = useGetActor(id)

    return (

        <>

            {
                isLoading && <LoadingSpinner />
            }

            {
                isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
            }

            {
                actor && (
                    <Card className='actor-card-one'>
                        <Card.Body>

                            <Card.Title>{actor.name}</Card.Title>

                            <section className='movie-info'>

                                <div className='img-wrapper'>
                                    <Card.Img variant="top" src={ actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultProfileIMG } />
                                </div>

                                <div className='info-wrapper'>

                                    <h3>About</h3>

                                    <Card.Text>
                                        { actor.biography }
                                    </Card.Text>

                                    <p>
                                        Born: { actor.birthday }
                                    </p>

                                </div>

                            </section>

                            <section className='actor-movies'>

                                <h3>Movies</h3>

                                <ListGroup>
                                    {
                                        // Renders movies actor casts in
                                        actor.movie_credits.cast.map( (movie) => (
                                            <ListGroup.Item key={movie.id} as={Link} to={`/movie/${movie.id}`} >
                                                <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultMovieIMG} />
                                                <span>{movie.title}</span>
                                            </ListGroup.Item>
                                        ) )
                                    }
                                </ListGroup>

                            </section>
                            
                        </Card.Body>
                    </Card>
                )
            }

        </>

    )

}

export default ActorPage