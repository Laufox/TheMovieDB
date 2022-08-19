import { useParams, useSearchParams } from "react-router-dom"
import useDiscoverByGenre from "../hooks/useDiscoverByGenre"
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import { useState } from "react"
import Button from 'react-bootstrap/Button'

const GenreList = () => {

    const [searchParams, setSearchparams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get("page")))
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
                        
                        <Button 
                            onClick={()=>{
                                setSearchparams({page: page - 1})
                                setPage( prevPage => prevPage - 1 )
                            }}
                            disabled = { page <= 1 }
                        >
                            prev page
                        </Button>
                        <p>You are on page: {page}/{movies.total_pages}</p>
                        <Button 
                            onClick={()=>{
                                setSearchparams({page: page + 1})
                                setPage( prevPage => prevPage + 1 )
                            }}
                            disabled = { page >= movies.total_pages }
                        >
                            next page
                        </Button>
                    </Container>
                    
                )
            }

            
        </>
        
    )

}

export default GenreList