import ListGroup from 'react-bootstrap/ListGroup'
import { useParams, Link } from 'react-router-dom'
import useGetActor from '../hooks/useGetActor'
import Card from 'react-bootstrap/Card'

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
                    <Card>
                        <Card.Body>

                            <Card.Title>{actor.name}</Card.Title>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                            <Card.Text>
                                { actor.biography }
                            </Card.Text>

                            <ListGroup>
                                {
                                    actor.movie_credits.cast.map( (movie) => <ListGroup.Item key={movie.id} as={Link} to={`/movie/${movie.id}`} >{movie.title}</ListGroup.Item> )
                                }
                            </ListGroup>
                            
                        </Card.Body>
                    </Card>
                )
            }

        </>

    )

}

export default ActorPage