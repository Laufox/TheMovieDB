import { useParams, useSearchParams } from "react-router-dom"
import useDiscoverByGenre from "../hooks/useDiscoverByGenre"
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import Pagination from "../components/Pagination"
import MovieCard from "../components/MovieCard"
import LoadingSpinner from "../components/LoadingSpinner"
import AlertBox from "../components/AlertBox"

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

export default GenreList