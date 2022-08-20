import { useSearchParams } from "react-router-dom"
import useDiscoverTopRated from "../hooks/useDiscoverTopRated"
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Pagination from "../components/Pagination"

const TopRated = () => {

    const [searchParams, setSearchparams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get("page")))
    const { data: movies, error, isError, isLoading } = useDiscoverTopRated(page)

    const handlePageClick = (increment) => {
        setSearchparams({ page: page + increment })
    }

    useEffect( () => {
        
        setPage(Number(searchParams.get("page")))

    } )

    return (

        <>
            <h2>Showing most recent movies </h2>

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

export default TopRated