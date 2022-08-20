import { useParams, useSearchParams } from "react-router-dom"
import useDiscoverByGenre from "../hooks/useDiscoverByGenre"
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Pagination from "../components/Pagination"

const GenreList = () => {

    const [searchParams, setSearchparams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get("page")))
    const { id, genre } = useParams()
    const { data: movies, error, isError, isLoading } = useDiscoverByGenre(id, page)

    const handlePageClick = (increment) => {
        setSearchparams({ page: page + increment })
    }

    useEffect( () => {
        
        setPage(Number(searchParams.get("page")))

    } )

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

                        <Pagination onPageClick = { handlePageClick } currentPage = { page } totalPages = { movies.total_pages } />

                    </Container>
                    
                )
            }

            
        </>
        
    )

}

export default GenreList