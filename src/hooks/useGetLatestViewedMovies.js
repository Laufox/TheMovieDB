import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetLatestViewedMovies = () => {

    return useQuery('pastMovies', TheMovieDB.getLatestViewedMovies)

}

export default useGetLatestViewedMovies