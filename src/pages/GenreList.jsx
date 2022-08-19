import { useParams } from "react-router-dom"
import useDiscoverByGenre from "../hooks/useDiscoverByGenre"
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import { useState } from "react"
import Button from 'react-bootstrap/Button'

const GenreList = () => {

    const [page, setPage] = useState(1)
    const { id, genre } = useParams()
    const { data: movies, error, isError, isLoading } = useDiscoverByGenre(id, page)

    return (

        <>
            <h2>Showing results for { genre } </h2>

            {
                isLoading && (
                    <p>Loading data</p>
                )
            }

            {
                isError && (
                    <p>Something went wrong</p>
                )
            }

            {
                movies && (
                    
                    <Container>
                        <div className="movie-container">
                            {
                                movies.results.map( movie => (
                                    <Card key={movie.id} className="movie-container-item">
                                        <Card.Body>{movie.title}</Card.Body>
                                    </Card>
                                ) )
                            }
                        </div>
                        
                        <Button onClick={()=>{setPage( prevPage => prevPage - 1 )}}>prev page</Button>
                        <Button onClick={()=>{setPage( prevPage => prevPage + 1 )}}>next page</Button>
                    </Container>
                    

                )
            }

            
        </>
        
    )

}

export default GenreList