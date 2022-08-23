import { useParams, useSearchParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Pagination from "../components/Pagination"
import MovieCard from "../components/MovieCard"
import useGetTrendingMovies from "../hooks/useGetTrendingMovies"

const TrendingPage = () => {

    const [searchParams, setSearchparams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get("page")))
    const { timeframe } = useParams()
    const { data: movies, error, isError, isLoading } = useGetTrendingMovies(timeframe, page)

    const handlePageClick = (increment) => {
        setSearchparams({ page: page + increment })
    }

    useEffect( () => {
        
        setPage(Number(searchParams.get("page")))

    } )

    return (

        <>
            <h2>Showing trending movies for the {timeframe} </h2>

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