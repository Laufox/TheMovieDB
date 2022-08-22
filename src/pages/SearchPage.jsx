import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useSearch from "../hooks/useSearch"
import MovieCard from "../components/MovieCard"
import Container from 'react-bootstrap/Container'
import Pagination from "../components/Pagination"

const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get("page")))
    const [query, setQuery] = useState(searchParams.get("query"))
    const { data: searchResult, error, isError, isLoading } = useSearch(query, page)

    const handlePageClick = (increment) => {
        setSearchParams({ query: query, page: page + increment })
    }

    useEffect( () => {
        
        setPage(Number(searchParams.get("page")))
        setQuery(searchParams.get("query"))

    } )

    return (
        
        <>
            <h2>Showing search results for { query } </h2>

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
                searchResult && (
                    
                    <Container>

                        <div className="movie-container">
                            {
                                searchResult.results.map( movie => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ) )
                            }
                        </div>

                        <Pagination onPageClick = { handlePageClick } currentPage = { page } totalPages = { searchResult.total_pages } />

                    </Container>
                    
                )
            }

            
        </>

    )

}

export default SearchPage