import useGetLatestViewedMovies from "../hooks/useGetLatestViewedMovies"

const PrevSeenMovies = () => {

    const {data: pastMovies} = useGetLatestViewedMovies()

    return (
        <>
            {
                pastMovies && pastMovies.map(movie => <p key={movie.id}>{movie.title}</p>)
            }
        </>
    )
}

export default PrevSeenMovies