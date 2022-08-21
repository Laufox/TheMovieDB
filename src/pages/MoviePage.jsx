import { useParams } from "react-router-dom"
import useGetMovie from "../hooks/useGetMovie"
import Card from 'react-bootstrap/Card'

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

                            <ul>
                                {
                                    movie.credits.cast.map( (actor) => <li key={actor.id}>{actor.name}</li> )
                                }
                            </ul>
                            
                        </Card.Body>
                    </Card>
                )
            }

        </>
        
    )

}

export default MoviePage