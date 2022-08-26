import useGetLatestViewedMovies from "../hooks/useGetLatestViewedMovies"
import LoadingSpinner from "./LoadingSpinner"
import AlertBox from "./AlertBox"
import MovieCardTiny from "./MovieCardTiny"

const PrevSeenMovies = () => {

    // Get query data from useGetLatestViewedMovies hook
    const {data: pastMovies, error, isError, isLoading} = useGetLatestViewedMovies()

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

                    <h3>Recently viewed:</h3>

                    {
                        // Loop through movies to render each of them 
                        pastMovies.map(movie => (
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