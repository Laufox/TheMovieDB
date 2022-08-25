import { useSearchParams } from "react-router-dom"
import useDiscoverLatest from "../hooks/useDiscoverLatest"
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Pagination from "../components/Pagination"
import MovieCard from "../components/MovieCard"
import LoadingSpinner from "../components/LoadingSpinner"
import AlertBox from "../components/AlertBox"

const Latest = () => {

    const [searchParams, setSearchparams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get("page")))
    const { data: movies, error, isError, isLoading } = useDiscoverLatest(page)

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
                isLoading && <LoadingSpinner />
            }

            {
                isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
            }

            {
                movies && (
                    
                    <Container>
                        
                        <div className="movie-container">
                            {
                                movies.results.map( movie => (
                                    <MovieCard key={movie.id} movie={movie} />
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

export default Latest