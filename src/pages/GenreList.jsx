import { useParams, useSearchParams } from "react-router-dom"
import useDiscoverByGenre from "../hooks/useDiscoverByGenre"
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
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
                                        <Card.Body className="card-body">
                                            
                                            <Card.Title className="movie-heading">{movie.title}</Card.Title>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                            <Card.Text className="additional-info">
                                                <span>{movie.release_date.slice(0, movie.release_date.indexOf('-'))}</span>
                                                <span>|</span>
                                                <span>{movie.original_language.toUpperCase()}</span>
                                                <span>|</span>
                                                <span>{movie.vote_average}</span>
                                            </Card.Text>
                                            <Button>Go to</Button>

                                        </Card.Body>
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