import ListGroup from 'react-bootstrap/ListGroup'
import { useParams, Link } from 'react-router-dom'
import useGetActor from '../hooks/useGetActor'
import Card from 'react-bootstrap/Card'
import defaultMovieIMG from '../assets/img/camera.png'
import defaultProfileIMG from '../assets/img/user.png'

const ActorPage = () => {

    const { id } = useParams()
    const { data: actor, error, isError, isLoading } = useGetActor(id)

    return (

        <>

            {
                isLoading && (
                    <div>Resource is loading</div>
                )
            }

            {
                isError && (
                    <div>There was an error</div>
                )
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