import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useSearch from "../hooks/useSearch"
import MovieCard from "../components/MovieCard"
import Container from 'react-bootstrap/Container'
import Pagination from "../components/Pagination"
import AlertBox from "../components/AlertBox"
import LoadingSpinner from "../components/LoadingSpinner"

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
                isLoading && <LoadingSpinner />
            }

            {
                isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
            }

            {
                searchResult && (
                    
                    <Container>

                        {
                            !!searchResult.total_results && (

                                <>
                                <div className="movie-container">

                                    {
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