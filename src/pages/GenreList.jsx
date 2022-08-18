import { useParams } from "react-router-dom"
import useDiscoverByGenre from "../hooks/useDiscoverByGenre"

const GenreList = () => {

    const { id } = useParams()
    const { data: movies, error, isError, isLoading } = useDiscoverByGenre(id, 1)

    return (

        <>
            <p>Results for genre with id { id }</p>

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
                    
                    movies.results.map( movie => (<p key={movie.id}>{movie.title}</p>) )

                )
            }

            
        </>
        
    )

}

export default GenreList