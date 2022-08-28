import useGetLatestViewedMovies from "../hooks/useGetLatestViewedMovies"
import LoadingSpinner from "./LoadingSpinner"
import AlertBox from "./AlertBox"
import MovieCardTiny from "./MovieCardTiny"
import { useState } from "react"

const PrevSeenMovies = () => {

    // Get query data from useGetLatestViewedMovies hook
    const {data: pastMovies, error, isError, isLoading} = useGetLatestViewedMovies()

    const [isPastOpen, setIsPastOpen] = useState()

    return (

        <>
        {
            isLoading && <LoadingSpinner />
        }

        {
            isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
        }

        {
            pastMovies && (

                <div className="pastmovies">

                    <span onClick={ () => { setIsPastOpen( prevState => !prevState ) } } >{ isPastOpen ? '➡️' : '⬅️' }</span>
                    <h3>Past views:</h3>

                    {
                        // Loop through movies to render each of them 
                        isPastOpen && pastMovies.map(movie => (
                            <MovieCardTiny movie={movie} key={movie.id} />
                        ))
                    }

                </div>

            )
        }
        
        </>
    )
}

export default PrevSeenMovies