import useSearch from "../hooks/useSearch"
import MovieCard from "../components/MovieCard"
import Pagination from "../components/Pagination"
import AlertBox from "../components/AlertBox"
import LoadingSpinner from "../components/LoadingSpinner"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Container from 'react-bootstrap/Container'

const SearchPage = () => {

    // States to get and set query strings in browser URL
    const [searchParams, setSearchParams] = useSearchParams()
    // State to keep track on what page user is currently on
    const [page, setPage] = useState(Number(searchParams.get("page")))
    // State to keep track on what search query user enteres
    const [query, setQuery] = useState(searchParams.get("query"))
    // Get query data from useSearch hook
    const { data: searchResult, error, isError, isLoading } = useSearch(query, page)

    // When a user paginates, change value of query string in URL
    const handlePageClick = (increment) => {
        setSearchParams({ query: query, page: page + increment })
    }

    // Update page that user is on and what search query was entered
    useEffect( () => {
        
        setPage(Number(searchParams.get("page")))
        setQuery(searchParams.get("query"))

    }, [searchParams] )

    return (
        
        <>
            <h2>Showing search results for { query } </h2>

            {
                isLoading && <LoadingSpinner />
            }

            {
                isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
            }

            {
                searchResult && (
                    
                    <Container>

                        {
                            // Render search results if there are any
                            !!searchResult.total_results && (

                                <>
                                <Pagination onPageClick = { handlePageClick } currentPage = { page } totalPages = { searchResult.total_pages } />

                                <div className="movie-container">

                                    {
                                        // Loop through movies to render each of them
                                        searchResult.results.map( movie => (
                                            <MovieCard key={movie.id} movie={movie} />
                                        ) )
                                    }

                                </div>

                                <Pagination onPageClick = { handlePageClick } currentPage = { page } totalPages = { searchResult.total_pages } />
                                </>
                            )
                        }
                        
                        {
                            // Render alert to user if there is no results for search query
                            !searchResult.total_pages && (
                                <AlertBox variant={'warning'} headingMessage={'No matches'} bodyMessage={'Your search gave no results'} />
                            )
                        }
                        

                    </Container>
                    
                )
            }

            
        </>

    )

}

export default SearchPage