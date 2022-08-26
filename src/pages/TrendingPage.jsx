import useGetTrendingMovies from "../hooks/useGetTrendingMovies"
import Pagination from "../components/Pagination"
import MovieCard from "../components/MovieCard"
import LoadingSpinner from "../components/LoadingSpinner"
import AlertBox from "../components/AlertBox"
import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import Container from "react-bootstrap/Container"

const TrendingPage = () => {

    // States to get and set query strings in browser URL
    const [searchParams, setSearchparams] = useSearchParams()
    // State to keep track on what page user is currently on
    const [page, setPage] = useState(Number(searchParams.get("page")))
    // Get dynamic URL params from useParams
    const { timeframe } = useParams()
    // Get query data from useGetTrendingMovies hook
    const { data: movies, error, isError, isLoading } = useGetTrendingMovies(timeframe, page)

    // When a user paginates, change value of query string in URL
    const handlePageClick = (increment) => {
        setSearchparams({ page: page + increment })
    }

    // Update page that user is on
    useEffect( () => {
        
        setPage(Number(searchParams.get("page")))

    }, [searchParams] )

    return (

        <>
            <h2>Showing trending movies for the {timeframe} </h2>

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

export default TrendingPage