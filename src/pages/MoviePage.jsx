import { Link, useParams } from "react-router-dom"
import useGetMovie from "../hooks/useGetMovie"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup' 

const MoviePage = () => {

    const { id } = useParams()
    const { data: movie, error, isError, isLoading } = useGetMovie(id)

    return (

        <>

            {
                isLoading && (
                    <div>Loading data</div>
                )
            }

            {
                isError && (
                    <div>Something went wrong</div>
                )
            }

            {
                movie && (
                    <Card>
                        <Card.Body>

                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                            <Card.Text>
                                { movie.overview }
                            </Card.Text>

                            <ListGroup>
                                {
                                    movie.credits.cast.map( (actor) => <ListGroup.Item key={actor.id} as={Link} to={`/actor/${actor.id}`} >{actor.name}</ListGroup.Item> )
                                }
                            </ListGroup>
                            
                        </Card.Body>
                    </Card>
                )
            }

        </>
        
    )

}

export default MoviePage