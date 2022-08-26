import useGetAllMovies from "../hooks/useGetAllMovies"
import Pagination from "../components/Pagination"
import MovieCard from "../components/MovieCard"
import LoadingSpinner from "../components/LoadingSpinner"
import AlertBox from "../components/AlertBox"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Container from "react-bootstrap/Container"

const GenreList = () => {

    // States to get and set query strings in browser URL
    const [searchParams, setSearchparams] = useSearchParams()
    // State to keep track on what page user is currently on
    const [page, setPage] = useState(Number(searchParams.get("page")))
    // Get query data from useGetAllMovies hook
    const { data: movies, error, isError, isLoading } = useGetAllMovies(page ? page : 1)

    // When a user paginates, change value of query string in URL
    const handlePageClick = (increment) => {
        setSearchparams({ page: page + increment })
    }

    // Update page that user is on
    useEffect( () => {
        
        setPage( searchParams.get("page") ? Number(searchParams.get("page")) : 1)

    }, [searchParams] )

    return (

        <>
            <h2>Showing results for all movies </h2>

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
                                // Loop through movies to render each of them
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

export default GenreList