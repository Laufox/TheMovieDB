/**
 * Hook used to get data about all genres from the API service
 */

import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetGenres = () => {
    return useQuery('genres', TheMovieDB.getGenres)
}

export default useGetGenres